import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Ionicons } from '@expo/vector-icons';
import { Beneficiary } from '../store/slices/beneficiariesSlice';

export default function BeneficiariesList() {
  const router = useRouter();
  const beneficiaries = useSelector((state: RootState) => state.beneficiaries.beneficiaries);

  const renderBeneficiaryItem = ({ item }: { item: Beneficiary }) => (
    <TouchableOpacity
      style={styles.beneficiaryItem}
      onPress={() => router.push({
        pathname: '/beneficiaries/[id]',
        params: { id: item.id }
      })}
    >
      <View style={styles.beneficiaryHeader}>
        <Text style={styles.beneficiaryName}>
          {item.beneficiaryFirstName} {item.beneficiaryLastName}
        </Text>
        <Text style={styles.beneficiaryGender}>
          {item.beneficiaryGender.charAt(0).toUpperCase() + item.beneficiaryGender.slice(1)}
        </Text>
      </View>
      <Text style={styles.beneficiaryLocation}>
        {item.beneficiaryDistrict}, {item.beneficiaryState}
      </Text>
      <Text style={styles.beneficiaryContact}>{item.beneficiaryContactNumber}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push({
          pathname: '/beneficiaries/new'
        })}
      >
        <Ionicons name="person-add" size={24} color="white" />
        <Text style={styles.addButtonText}>New Beneficiary</Text>
      </TouchableOpacity>

      <FlatList
        data={beneficiaries}
        renderItem={renderBeneficiaryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 15,
    margin: 16,
    borderRadius: 10,
    justifyContent: 'center',
    gap: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  listContainer: {
    padding: 16,
  },
  beneficiaryItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  beneficiaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  beneficiaryName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  beneficiaryGender: {
    fontSize: 14,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  beneficiaryLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  beneficiaryContact: {
    fontSize: 14,
    color: '#444',
  },
}); 