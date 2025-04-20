import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BeneficiaryDocument {
  beneficiaryDocumentType: 'aadhar' | 'pan' | 'drivingLicense' | 'electionId';
  beneficiaryDocumentNumber: string;
  beneficiaryDocumentURL: string;
}

export interface Beneficiary {
  id: string;
  beneficiaryFirstName: string;
  beneficiaryMiddleName?: string;
  beneficiaryLastName: string;
  beneficiaryGender: 'male' | 'female';
  beneficiaryCaste: 'general' | 'obc' | 'sc' | 'st';
  beneficiaryDOB: string;
  beneficiaryContactNumber: string;
  beneficiaryAlternateContactNumber?: string;
  beneficiaryAddress: string;
  beneficiaryState: string;
  beneficiaryDistrict: string;
  beneficiaryTehsil: string;
  beneficiaryComment?: string;
  beneficiaryDocuments: BeneficiaryDocument[];
  beneficiaryReferencePerson: string;
  beneficiaryReferencePersonContactNumber: string;
  activityId: string; // Reference to the activity this beneficiary belongs to
}

interface BeneficiariesState {
  beneficiaries: Beneficiary[];
  loading: boolean;
  error: string | null;
}

const initialState: BeneficiariesState = {
  beneficiaries: [],
  loading: false,
  error: null,
};

const beneficiariesSlice = createSlice({
  name: 'beneficiaries',
  initialState,
  reducers: {
    setBeneficiaries: (state, action: PayloadAction<Beneficiary[]>) => {
      state.beneficiaries = action.payload;
    },
    addBeneficiary: (state, action: PayloadAction<Beneficiary>) => {
      state.beneficiaries.push(action.payload);
    },
    updateBeneficiary: (state, action: PayloadAction<Beneficiary>) => {
      const index = state.beneficiaries.findIndex(beneficiary => beneficiary.id === action.payload.id);
      if (index !== -1) {
        state.beneficiaries[index] = action.payload;
      }
    },
    deleteBeneficiary: (state, action: PayloadAction<string>) => {
      state.beneficiaries = state.beneficiaries.filter(beneficiary => beneficiary.id !== action.payload);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setBeneficiaries,
  addBeneficiary,
  updateBeneficiary,
  deleteBeneficiary,
  setLoading,
  setError,
} = beneficiariesSlice.actions;

export default beneficiariesSlice.reducer; 