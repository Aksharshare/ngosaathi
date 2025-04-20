import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Ionicons } from '@expo/vector-icons';

export default function ActivityDetail() {
  const { id } = useLocalSearchParams();
  const activity = useSelector((state: RootState) =>
    state.activities.activities.find((a) => a.id === id)
  );

  if (!activity) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Activity not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Activity Details</Text>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{activity.activityName}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>
            {new Date(activity.activityDate).toLocaleDateString()}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>
            {activity.activityLocation.city}, {activity.activityLocation.state}
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Contact Person:</Text>
          <Text style={styles.value}>{activity.personOfContact}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Contact Number:</Text>
          <Text style={styles.value}>{activity.contactNumber}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{activity.activityDescription}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Media</Text>
        <View style={styles.mediaContainer}>
          {activity.activityMedias.map((media, index) => (
            <View key={index} style={styles.mediaItem}>
              <Ionicons name="image" size={24} color="#666" />
              <Text style={styles.mediaName}>{media.imageName}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Documents</Text>
        <View style={styles.documentsContainer}>
          {activity.activityDocuments.map((doc, index) => (
            <View key={index} style={styles.documentItem}>
              <Ionicons name="document-text" size={24} color="#666" />
              <View style={styles.documentInfo}>
                <Text style={styles.documentName}>{doc.documentName}</Text>
                <Text style={styles.documentCategory}>{doc.documentCategory}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
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
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
  mediaContainer: {
    gap: 12,
  },
  mediaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  mediaName: {
    fontSize: 14,
    color: '#333',
  },
  documentsContainer: {
    gap: 12,
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  documentInfo: {
    flex: 1,
  },
  documentName: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  documentCategory: {
    fontSize: 12,
    color: '#666',
    textTransform: 'capitalize',
  },
  errorText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
}); 