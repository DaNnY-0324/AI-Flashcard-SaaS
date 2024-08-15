# Flashcard SaaS Application

## Overview

The Flashcard SaaS application allows users to generate, save, and review flashcards based on text input. The application leverages Next.js for the frontend, Firebase for data storage, Stripe for payment processing, and OpenAI for generating flashcards. User authentication is handled through Clerk.

## Features

- **User Authentication**: Secure user sign-up and login via Clerk.
- **Flashcard Generation**: Create flashcards using OpenAI by entering text.
- **Subscription Payments**: Manage subscriptions using Stripe.
- **Firebase Integration**: Save and retrieve flashcards from Firebase Firestore.
- **Responsive UI**: Built with Material-UI for a responsive and modern design.

## Directory Structure

```
flashcard-saas/
├── app/
│   ├── api/
│   │   ├── checkout_sessions.js
│   │   ├── generate.js
│   ├── generate/
│   │   └── page.js
│   ├── flashcards/
│   │   └── page.js
│   ├── result/
│   │   └── page.js
│   ├── sign-in/
│   │   └── [[...sign-in]]/
│   │       └── page.js
│   ├── page.js
├── public/
│   └── (static assets like images, icons, etc.)
├── styles/
│   └── (global and module CSS files)
├── utils/
│   └── get-stripe.js
├── firebase.js
├── .env.local
├── .gitignore
├── package.json
├── README.md
└── next.config.js
```

Getting Started
Prerequisites

- Node.js: Ensure you have Node.js (LTS version) installed. You can download it here.
- npm: npm is included with Node.js.

Installation

1.Clone the Repository:

- git clone https://github.com/your-username/flashcard-saas.git
- cd flashcard-saas

2. Install dependencies:

- npm install

3. Set Up Firebase:

- Go to the Firebase Console and create a new project.
- Add a new web app and copy the Firebase configuration.
- Create a firebase.js file in the root directory and add your Firebase configuration.

4. Set Up Environment Varibles:

- Create a '.env.local' file in the root directory and add the following:

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api_key
CLERK_API_KEY=your_clerk_api_key

5. Run the development server:

   npm run dev

The application will be accessible at http://localhost:3000.

Deployment
You can deploy the application using Vercel, which provides a seamless deployment experience for Next.js applications.

1. Push your code to a GitHub repository.
2. Link the repository to Vercel and deploy.

Usage

Generate Flashcards

1. Sign in to the application.
2. Navigate to the "Generate" page.
3. Enter the text from which you want to generate flashcards.
4. Click "Generate Flashcards."
5. Review the generated flashcards and save them to your account.

Review Saved Flashcards

1. Sign in to the application.
2. Navigate to the "Flashcards" page.
3. Click on any saved flashcard set to review and interact with the flashcards.

Manage Subscription

1. Sign in to the application.
2. Navigate to the "Pricing" section on the home page.
3. Select a subscription plan and proceed with the payment using Stripe.

Technologies Used

- Next.js: React framework for building the frontend.
- Firebase: Backend as a service for database and authentication.
- Stripe: Payment processing.
- Clerk: Authentication and user management.
- OpenAI: AI-powered flashcard generation.
- Material-UI: UI components for a responsive design.
