import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Ionicons } from '@expo/vector-icons';

export default function BeneficiaryDetail() {
  const { id } = useLocalSearchParams();
  const beneficiary = useSelector((state: RootState) =>
    state.beneficiaries.beneficiaries.find((b) => b.id === id)
  );

  if (!beneficiary) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Beneficiary not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>
            {beneficiary.beneficiaryFirstName} {beneficiary.beneficiaryMiddleName}{' '}
            {beneficiary.beneficiaryLastName}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>
            {beneficiary.beneficiaryGender.charAt(0).toUpperCase() +
              beneficiary.beneficiaryGender.slice(1)}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Caste:</Text>
          <Text style={styles.value}>
            {beneficiary.beneficiaryCaste.toUpperCase()}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.value}>
            {new Date(beneficiary.beneficiaryDOB).toLocaleDateString()}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Primary Contact:</Text>
          <Text style={styles.value}>{beneficiary.beneficiaryContactNumber}</Text>
        </View>
        {beneficiary.beneficiaryAlternateContactNumber && (
          <View style={styles.detailRow}>
            <Text style={styles.label}>Alternate Contact:</Text>
            <Text style={styles.value}>
              {beneficiary.beneficiaryAlternateContactNumber}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address</Text>
        <View style={styles.detailRow}>
          <Text style={styles.label}>State:</Text>
          <Text style={styles.value}>{beneficiary.beneficiaryState}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>District:</Text>
          <Text style={styles.value}>{beneficiary.beneficiaryDistrict}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Tehsil:</Text>
          <Text style={styles.value}>{beneficiary.beneficiaryTehsil}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{beneficiary.beneficiaryAddress}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reference Contact</Text>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{beneficiary.beneficiaryReferencePerson}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Contact:</Text>
          <Text style={styles.value}>
            {beneficiary.beneficiaryReferencePersonContactNumber}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Documents</Text>
        {beneficiary.beneficiaryDocuments.map((doc, index) => (
          <View key={index} style={styles.documentItem}>
            <Ionicons name="document-text" size={24} color="#666" />
            <View style={styles.documentInfo}>
              <Text style={styles.documentType}>
                {doc.beneficiaryDocumentType.toUpperCase()}
              </Text>
              <Text style={styles.documentNumber}>
                {doc.beneficiaryDocumentNumber}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {beneficiary.beneficiaryComment && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Comments</Text>
          <Text style={styles.comment}>{beneficiary.beneficiaryComment}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  label: {
    width: 120,
    fontSize: 14,
    color: '#666',
  },
  value: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 8,
  },
  documentInfo: {
    flex: 1,
  },
  documentType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  documentNumber: {
    fontSize: 12,
    color: '#666',
  },
  comment: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
}); 