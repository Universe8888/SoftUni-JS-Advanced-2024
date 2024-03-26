src/
│
├── api/             # API-related functions, like making HTTP requests
│   ├── auth.js      # Functions related to user authentication
│   └── motorcycles.js  # Functions to perform CRUD on motorcycles
│
├── components/      # Reusable UI components
│   ├── NavBar.js    # NavBar component
│   └──MotorcycleCard.js  # Component for displaying a single motorcycle
│
│
├── pages/           # Scripts for each page view
│   ├── HomePage.js  # Script for the Home page view
│   ├── DashboardPage.js  # Script for the Dashboard (Motorcycles page) view
│   ├── LoginPage.js # Script for the Login page view
│   ├── RegisterPage.js  # Script for the Register page view
│   ├── MotorcycleDetailsPage.js  # Script for the Motorcycle Details page view
│   ├── AddMotorcyclePage.js  # Script for the Add Motorcycle page view
│   ├── EditMotorcyclePage.js  # Script for the Edit Motorcycle page view
│   └── ...
│
├── utils/          # Utility functions that can be used throughout the app
│   ├── api.js
│   ├── auth.js   # Functions to handle session/localStorage
│   └── validators.js  # Functions for validating form inputs, etc.
│
└── app.js           # The main JavaScript entry point for initializing the SPA
