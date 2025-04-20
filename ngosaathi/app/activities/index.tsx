import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { RootState } from '../store';
import { Activity } from '../store/slices/activitiesSlice';

export default function ActivitiesList() {
  const router = useRouter();
  const activities = useSelector((state: RootState) => state.activities.activities);

  const renderActivityItem = ({ item }: { item: Activity }) => (
    <TouchableOpacity
      style={styles.activityItem}
      onPress={() => router.push({
        pathname: '/activities/[id]',
        params: { id: item.id }
      })}
    >
      <View style={styles.activityHeader}>
        <Text style={styles.activityName}>{item.activityName}</Text>
        <Text style={styles.activityDate}>{new Date(item.activityDate).toLocaleDateString()}</Text>
      </View>
      <Text style={styles.activityLocation}>
        {item.activityLocation.city}, {item.activityLocation.state}
      </Text>
      <Text style={styles.activityDescription} numberOfLines={2}>
        {item.activityDescription}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push({
          pathname: '/activities/new'
        })}
      >
        <Ionicons name="add" size={24} color="white" />
        <Text style={styles.addButtonText}>New Activity</Text>
      </TouchableOpacity>

      <FlatList
        data={activities}
        renderItem={renderActivityItem}
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
  activityItem: {
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
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  activityName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  activityDate: {
    fontSize: 14,
    color: '#666',
  },
  activityLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  activityDescription: {
    fontSize: 14,
    color: '#444',
  },
}); 