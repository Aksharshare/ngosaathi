import { db, storage } from '../config/firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  Query,
  CollectionReference,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Activity, ActivityMedia, ActivityDocument } from '../store/slices/activitiesSlice';
import { Beneficiary, BeneficiaryDocument } from '../store/slices/beneficiariesSlice';

// Activities
export const addActivityToFirebase = async (activity: Omit<Activity, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'activities'), activity);
    return { id: docRef.id, ...activity };
  } catch (error) {
    console.error('Error adding activity:', error);
    throw error;
  }
};

export const updateActivityInFirebase = async (activity: Activity) => {
  try {
    const { id, ...activityData } = activity;
    await updateDoc(doc(db, 'activities', id), activityData);
    return activity;
  } catch (error) {
    console.error('Error updating activity:', error);
    throw error;
  }
};

export const deleteActivityFromFirebase = async (activityId: string) => {
  try {
    await deleteDoc(doc(db, 'activities', activityId));
    return activityId;
  } catch (error) {
    console.error('Error deleting activity:', error);
    throw error;
  }
};

export const getActivitiesFromFirebase = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'activities'));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Activity[];
  } catch (error) {
    console.error('Error getting activities:', error);
    throw error;
  }
};

// Beneficiaries
export const addBeneficiaryToFirebase = async (beneficiary: Omit<Beneficiary, 'id'>) => {
  try {
    const docRef = await addDoc(collection(db, 'beneficiaries'), beneficiary);
    return { id: docRef.id, ...beneficiary };
  } catch (error) {
    console.error('Error adding beneficiary:', error);
    throw error;
  }
};

export const updateBeneficiaryInFirebase = async (beneficiary: Beneficiary) => {
  try {
    const { id, ...beneficiaryData } = beneficiary;
    await updateDoc(doc(db, 'beneficiaries', id), beneficiaryData);
    return beneficiary;
  } catch (error) {
    console.error('Error updating beneficiary:', error);
    throw error;
  }
};

export const deleteBeneficiaryFromFirebase = async (beneficiaryId: string) => {
  try {
    await deleteDoc(doc(db, 'beneficiaries', beneficiaryId));
    return beneficiaryId;
  } catch (error) {
    console.error('Error deleting beneficiary:', error);
    throw error;
  }
};

export const getBeneficiariesFromFirebase = async (activityId?: string) => {
  try {
    const beneficiariesRef = collection(db, 'beneficiaries');
    let beneficiariesQuery: Query | CollectionReference = beneficiariesRef;
    
    if (activityId) {
      beneficiariesQuery = query(beneficiariesRef, where('activityId', '==', activityId));
    }
    
    const querySnapshot = await getDocs(beneficiariesQuery);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Beneficiary[];
  } catch (error) {
    console.error('Error getting beneficiaries:', error);
    throw error;
  }
};

// File Upload
export const uploadActivityMedia = async (
  activityId: string,
  media: ActivityMedia,
  file: Blob
) => {
  try {
    const storageRef = ref(storage, `activities/${activityId}/media/${media.imageName}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return { ...media, imageURL: downloadURL };
  } catch (error) {
    console.error('Error uploading activity media:', error);
    throw error;
  }
};

export const uploadActivityDocument = async (
  activityId: string,
  document: ActivityDocument,
  file: Blob
) => {
  try {
    const storageRef = ref(
      storage,
      `activities/${activityId}/documents/${document.documentName}`
    );
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return { ...document, documentURL: downloadURL };
  } catch (error) {
    console.error('Error uploading activity document:', error);
    throw error;
  }
};

export const uploadBeneficiaryDocument = async (
  beneficiaryId: string,
  document: BeneficiaryDocument,
  file: Blob
) => {
  try {
    const storageRef = ref(
      storage,
      `beneficiaries/${beneficiaryId}/documents/${document.beneficiaryDocumentType}`
    );
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return { ...document, beneficiaryDocumentURL: downloadURL };
  } catch (error) {
    console.error('Error uploading beneficiary document:', error);
    throw error;
  }
}; 