# Invoice App

A professional and responsive web-based Invoice Management Application built using React.js and Firebase. This application helps users create, manage, track, print, and store invoices digitally with company details, customer information, product billing, and revenue analytics.

---

## Repository

GitHub Repository: https://github.com/NishantAwasthi87/Invoice-App

---

## Overview

Invoice App is designed to simplify invoice generation and business billing management. It allows users to register their company, upload a company logo, create invoices for customers, add multiple products, calculate totals automatically, view invoice history, track revenue, and print invoices in a clean format.

The application uses Firebase Authentication for secure user login, Firestore Database for storing user and invoice data, and Firebase Storage for handling company logo uploads.

---

## Features

- User registration and login
- Secure authentication using Firebase Authentication
- Company profile creation
- Upload and update company logo
- Update company name
- Create new invoices
- Add customer details
- Add multiple products in a single invoice
- Automatic total amount calculation
- Store invoice data in Firebase Firestore
- View all invoices
- View detailed invoice information
- Delete invoices
- Print invoice
- Generate invoice PDF
- Dashboard analytics
- Track total number of invoices
- Track overall collection
- Track current month collection
- View recent invoices
- Month-wise revenue chart
- Responsive and clean user interface

---

## Tech Stack

- React.js
- Firebase Authentication
- Firebase Firestore
- Firebase Storage
- React Router DOM
- Chart.js
- jsPDF
- html2canvas
- CSS

---

## Project Structure

```bash
Invoice-App/
│
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
│
├── src/
│   ├── asstes/
│   │   └── invoice.jpg
│   │
│   ├── component/
│   │   ├── dashboard/
│   │   │   ├── Dashboard.js
│   │   │   ├── Home.js
│   │   │   ├── InvoiceDetail.js
│   │   │   ├── Invoices.js
│   │   │   ├── NewInvoice.js
│   │   │   ├── Setting.js
│   │   │   └── dashboard.css
│   │   │
│   │   ├── login/
│   │   │   ├── Login.js
│   │   │   └── login.css
│   │   │
│   │   └── register/
│   │       └── Register.js
│   │
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── firebase.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
│
├── .gitattributes
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

---

## Installation and Setup

Follow the steps below to run this project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/NishantAwasthi87/Invoice-App.git
```

### 2. Navigate to the Project Directory

```bash
cd Invoice-App
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Firebase

Create a Firebase project from the Firebase Console and enable the following services:

- Firebase Authentication
- Cloud Firestore
- Firebase Storage

After creating the Firebase project, update your Firebase configuration inside:

```bash
src/firebase.js
```

Example Firebase configuration:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 5. Start the Development Server

```bash
npm start
```

The application will run locally at:

```bash
http://localhost:3000
```

---

## Available Scripts

In the project directory, you can run the following commands:

### Start Development Server

```bash
npm start
```

Runs the application in development mode.

### Build for Production

```bash
npm run build
```

Creates an optimized production build of the application.

### Run Tests

```bash
npm test
```

Launches the test runner.

---

## Main Functionalities

### Authentication

Users can register and log in securely using Firebase Authentication. During registration, users can provide company details such as company name, email, password, and company logo.

### Dashboard

The dashboard provides a quick overview of business performance, including total invoices, total collection, current month collection, recent invoices, and month-wise revenue analytics.

### Invoice Creation

Users can create invoices by entering customer details and adding product information such as product name, price, and quantity. The total invoice amount is calculated automatically.

### Invoice Management

Users can view all created invoices, open invoice details, delete invoices, and manage invoice records from the dashboard.

### Invoice Print and PDF

The application allows users to print invoices and generate invoice PDFs using jsPDF and html2canvas.

### Company Settings

Users can update their company name and company logo from the settings section.

---

## Firebase Database Structure

### Users Collection

Stores registered user and company information.

```js
{
  uid: "user_id",
  displayName: "Company Name",
  email: "company@example.com",
  photoURL: "company_logo_url"
}
```

### Invoices Collection

Stores invoice information created by users.

```js
{
  to: "Customer Name",
  phone: "Customer Phone Number",
  email: "Customer Email",
  address: "Customer Address",
  product: [
    {
      id: 0,
      name: "Product Name",
      price: 1000,
      qty: 2
    }
  ],
  total: 2000,
  uid: "user_id",
  date: "timestamp"
}
```

---

## Pages

- Login Page
- Register Page
- Dashboard Page
- Home Page
- Invoice List Page
- New Invoice Page
- Invoice Detail Page
- Settings Page

---

## Dependencies

```json
{
  "@testing-library/jest-dom": "^5.17.0",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "chart.js": "^4.4.3",
  "firebase": "^10.12.5",
  "html2canvas": "^1.4.1",
  "jspdf": "^2.5.1",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.0",
  "react-scripts": "5.0.1",
  "web-vitals": "^2.1.4"
}
```

---

## Future Improvements

- Add invoice editing functionality
- Add invoice search and filter option
- Add customer management module
- Add payment status tracking
- Add due date and invoice status
- Add export invoice data as CSV
- Add dark mode
- Add better form validation
- Improve mobile responsiveness
- Add role-based access control

---

## Author

**Nishant Awasthi**

GitHub: https://github.com/NishantAwasthi87

---

## Conclusion

Invoice App is a complete invoice management solution for creating, storing, tracking, and printing invoices. It provides a simple and efficient way to manage business billing records with Firebase-powered authentication, database storage, and a clean React-based user interface.

---

