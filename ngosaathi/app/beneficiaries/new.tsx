import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBeneficiary } from '../store/slices/beneficiariesSlice';
import { Ionicons } from '@expo/vector-icons';

export default function NewBeneficiary() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { activityId } = useLocalSearchParams();
  const [formData, setFormData] = useState({
    beneficiaryFirstName: '',
    beneficiaryMiddleName: '',
    beneficiaryLastName: '',
    beneficiaryGender: 'male' as const,
    beneficiaryCaste: 'general' as const,
    beneficiaryDOB: new Date().toISOString().split('T')[0],
    beneficiaryContactNumber: '',
    beneficiaryAlternateContactNumber: '',
    beneficiaryAddress: '',
    beneficiaryState: '',
    beneficiaryDistrict: '',
    beneficiaryTehsil: '',
    beneficiaryComment: '',
    beneficiaryReferencePerson: '',
    beneficiaryReferencePersonContactNumber: '',
    beneficiaryDocuments: [],
  });

  const handleSubmit = () => {
    const newBeneficiary = {
      id: Date.now().toString(),
      activityId: activityId as string,
      ...formData,
    };
    dispatch(addBeneficiary(newBeneficiary));
    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              value={formData.beneficiaryFirstName}
              onChangeText={(text) =>
                setFormData({ ...formData, beneficiaryFirstName: text })
              }
              placeholder="Enter first name"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Middle Name</Text>
            <TextInput
              style={styles.input}
              value={formData.beneficiaryMiddleName}
              onChangeText={(text) =>
                setFormData({ ...formData, beneficiaryMiddleName: text })
              }
              placeholder="Enter middle name (optional)"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              value={formData.beneficiaryLastName}
              onChangeText={(text) =>
                setFormData({ ...formData, beneficiaryLastName: text })
              }
              placeholder="Enter last name"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              value={formData.beneficiaryDOB}
              onChangeText={(text) =>
                setFormData({ ...formData, beneficiaryDOB: text })
              }
              placeholder="YYYY-MM-DD"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Primary Contact</Text>
            <TextInput
              style={styles.input}
              value={formData.beneficiaryContactNumber}
              onChangeText={(text) =>
                setFormData({ ...formData, beneficiaryContactNumber: text })
              }
              placeholder="Enter contact number"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Alternate Contact</Text>
            <TextInput
              style={styles.input}
              value={formData.beneficiaryAlternateContactNumber}
              onChangeText={(text) =>
                setFormData({ ...formData, beneficiaryAlternateContactNumber: text })
              }
              placeholder="Enter alternate contact (optional)"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Address</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>State</Text>
            <TextInput
              style={styles.input}
              value={formData.beneficiaryState}
              onChangeText={(text) =>
                setFormData({ ...formData, beneficiaryState: text })
              }
              placeholder="Enter state"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>District</Text>
            <TextInput
              style={styles.input}
              value={formData.beneficiaryDistrict}
              onChangeText={(text) =>
                setFormData({ ...formData, beneficiaryDistrict: text })
              }
              placeholder="Enter district"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tehsil</Text>
            <TextInput
              style={styles.input}
              value={formData.beneficiaryTehsil}
              onChangeText={(text) =>
                setFormData({ ...formData, beneficiaryTehsil: text })
              }
              placeholder="Enter tehsil"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.beneficiaryAddress}
              onChangeText={(text) =>
                setFormData({ ...formData, beneficiaryAddress: text })
              }
              placeholder="Enter full address"
              multiline
              numberOfLines={4}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reference Contact</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Reference Person</Text>
            <TextInput
              style={styles.input}
              value={formData.beneficiaryReferencePerson}
              onChangeText={(text) =>
                setFormData({ ...formData, beneficiaryReferencePerson: text })
              }
              placeholder="Enter reference person name"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Reference Contact</Text>
            <TextInput
              style={styles.input}
              value={formData.beneficiaryReferencePersonContactNumber}
              onChangeText={(text) =>
                setFormData({
                  ...formData,
                  beneficiaryReferencePersonContactNumber: text,
                })
              }
              placeholder="Enter reference contact number"
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Information</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Comments</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.beneficiaryComment}
              onChangeText={(text) =>
                setFormData({ ...formData, beneficiaryComment: text })
              }
              placeholder="Enter any additional comments"
              multiline
              numberOfLines={4}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Ionicons name="save" size={24} color="white" />
          <Text style={styles.submitButtonText}>Save Beneficiary</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  form: {
    padding: 16,
  },
  section: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    gap: 8,
    marginTop: 24,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 