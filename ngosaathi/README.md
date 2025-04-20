# NGO Saathi - Activity & Beneficiary Management App

A mobile application built with React Native (Expo) for nonprofit organizations to track field activities, beneficiaries, and supporting documentation.

## Features

### Activity Management
- Create, edit, and delete activities
- Track activity details (name, date, location, description)
- Upload multiple images and documents
- Categorize documents (bills, receipts, agendas, etc.)

### Beneficiary Management
- Add and manage beneficiaries
- Track personal information (name, gender, caste, DOB)
- Store contact and address details
- Upload and manage ID documents
- Add reference contacts for validation

### Media & Document Handling
- Image and document uploads
- Firebase storage integration
- Categorization and tagging system

### Search & Filter
- Filter activities by date, location, or document category
- Search beneficiaries by name, caste, or document number

## Tech Stack

- **Frontend**: React Native (Expo)
- **State Management**: Redux Toolkit
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **Navigation**: Expo Router
- **Styling**: React Native StyleSheet

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Firebase account

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ngosaathi.git
   cd ngosaathi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a Firebase project and add your configuration:
   - Create a new project in Firebase Console
   - Enable Firestore and Storage
   - Add your Firebase configuration to `app/config/firebase.ts`

4. Set up environment variables:
   Create a `.env` file in the root directory with your Firebase configuration:
   ```
   EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key
   EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

5. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
ngosaathi/
├── app/
│   ├── activities/        # Activity-related screens
│   ├── beneficiaries/     # Beneficiary-related screens
│   ├── components/        # Reusable components
│   ├── config/           # Configuration files
│   ├── features/         # Feature-specific code
│   ├── hooks/            # Custom hooks
│   ├── services/         # API and service functions
│   ├── store/            # Redux store and slices
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── assets/               # Static assets
└── ...
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@ngosaathi.com or open an issue in the repository.
