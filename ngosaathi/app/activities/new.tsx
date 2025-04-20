import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addActivity } from '../store/slices/activitiesSlice';
import { Ionicons } from '@expo/vector-icons';

export default function NewActivity() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    activityName: '',
    activityLocation: {
      state: '',
      city: '',
    },
    activityDate: new Date().toISOString().split('T')[0],
    personOfContact: '',
    contactNumber: '',
    activityDescription: '',
  });

  const handleSubmit = () => {
    const newActivity = {
      id: Date.now().toString(),
      ...formData,
      activityMedias: [],
      activityDocuments: [],
    };
    dispatch(addActivity(newActivity));
    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Activity Name</Text>
          <TextInput
            style={styles.input}
            value={formData.activityName}
            onChangeText={(text) => setFormData({ ...formData, activityName: text })}
            placeholder="Enter activity name"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Location</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              value={formData.activityLocation.state}
              onChangeText={(text) =>
                setFormData({
                  ...formData,
                  activityLocation: { ...formData.activityLocation, state: text },
                })
              }
              placeholder="State"
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              value={formData.activityLocation.city}
              onChangeText={(text) =>
                setFormData({
                  ...formData,
                  activityLocation: { ...formData.activityLocation, city: text },
                })
              }
              placeholder="City"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            value={formData.activityDate}
            onChangeText={(text) => setFormData({ ...formData, activityDate: text })}
            placeholder="YYYY-MM-DD"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contact Person</Text>
          <TextInput
            style={styles.input}
            value={formData.personOfContact}
            onChangeText={(text) => setFormData({ ...formData, personOfContact: text })}
            placeholder="Enter contact person name"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contact Number</Text>
          <TextInput
            style={styles.input}
            value={formData.contactNumber}
            onChangeText={(text) => setFormData({ ...formData, contactNumber: text })}
            placeholder="Enter contact number"
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={formData.activityDescription}
            onChangeText={(text) => setFormData({ ...formData, activityDescription: text })}
            placeholder="Enter activity description"
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Ionicons name="save" size={24} color="white" />
          <Text style={styles.submitButtonText}>Save Activity</Text>
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
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  halfInput: {
    flex: 1,
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