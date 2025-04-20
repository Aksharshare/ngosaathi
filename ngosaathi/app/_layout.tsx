import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from './store';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: 'NGO Saathi',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="activities/index"
          options={{
            title: 'Activities',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="activities/[id]"
          options={{
            title: 'Activity Details',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="beneficiaries/index"
          options={{
            title: 'Beneficiaries',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="beneficiaries/[id]"
          options={{
            title: 'Beneficiary Details',
            headerShown: true,
          }}
        />
      </Stack>
    </Provider>
  );
}
