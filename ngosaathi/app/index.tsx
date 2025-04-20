import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NGO Saathi</Text>
      <Text style={styles.subtitle}>Activity & Beneficiary Management</Text>
      
      <View style={styles.buttonContainer}>
        <Link href="/activities" asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="calendar" size={24} color="white" />
            <Text style={styles.buttonText}>Activities</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/beneficiaries" asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="people" size={24} color="white" />
            <Text style={styles.buttonText}>Beneficiaries</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
  },
  buttonContainer: {
    width: '100%',
    gap: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 20,
    borderRadius: 10,
    gap: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
