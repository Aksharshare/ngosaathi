import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ActivityMedia {
  imageName: string;
  imageURL: string;
}

export interface ActivityDocument {
  documentName: string;
  documentURL: string;
  documentDescription: string;
  documentCategory: 'bill' | 'invoice' | 'receipt' | 'cashVoucher' | 'agenda' | 'resolution' | 'others';
}

export interface Activity {
  id: string;
  activityName: string;
  activityLocation: {
    state: string;
    city: string;
  };
  activityDate: string;
  personOfContact: string;
  contactNumber: string;
  activityDescription: string;
  activityMedias: ActivityMedia[];
  activityDocuments: ActivityDocument[];
}

interface ActivitiesState {
  activities: Activity[];
  loading: boolean;
  error: string | null;
}

const initialState: ActivitiesState = {
  activities: [],
  loading: false,
  error: null,
};

const activitiesSlice = createSlice({
  name: 'activities',
  initialState,
  reducers: {
    setActivities: (state, action: PayloadAction<Activity[]>) => {
      state.activities = action.payload;
    },
    addActivity: (state, action: PayloadAction<Activity>) => {
      state.activities.push(action.payload);
    },
    updateActivity: (state, action: PayloadAction<Activity>) => {
      const index = state.activities.findIndex(activity => activity.id === action.payload.id);
      if (index !== -1) {
        state.activities[index] = action.payload;
      }
    },
    deleteActivity: (state, action: PayloadAction<string>) => {
      state.activities = state.activities.filter(activity => activity.id !== action.payload);
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
  setActivities,
  addActivity,
  updateActivity,
  deleteActivity,
  setLoading,
  setError,
} = activitiesSlice.actions;

export default activitiesSlice.reducer; 