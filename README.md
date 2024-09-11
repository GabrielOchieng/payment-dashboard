# Payment Dashboard

## Project Overview

This project involves designing and implementing a simple payment dashboard using React and TypeScript. The dashboard will showcase features of a hypothetical payment platform, including transactions, collections, and transfers. 

## Key Focus Areas

1. **TypeScript Fluency**: Demonstrate understanding of typing, interfaces, generics, and utility types in TypeScript.
2. **React Knowledge**: Showcase component design, state management, hooks, and lifecycle methods.
3. **Design Skills**: Exhibit UI/UX understanding, component reusability, and clean CSS organization (Tailwind CSS is a plus).

## Task Details

### 1. Dashboard Overview Component

- **Layout**: Create a dashboard with a header, sidebar, and main content area.
- **Summary Cards**: Display metrics like:
  - Total Transactions
  - Total Transfers
  - Total Collections
  - Pending Payouts

**Requirements**:
- Use React hooks (e.g., `useState`, `useEffect`) for data management.
- Simulate API calls for fetching data (e.g., using `setTimeout`).
- Apply TypeScript typings for fetched data.

### 2. Transactions List Component

- **Table**: List transactions with fields:
  - Transaction ID
  - Amount
  - Type (Transfer, Collection, etc.)
  - Date
  - Status (Completed, Pending, Failed)

**Requirements**:
- Filter transactions by status.
- Implement a search bar for Transaction ID.
- Show a loading spinner or skeleton loader while data is loading.
- Use TypeScript interfaces for transaction data.

### 3. Transfer Funds Form Component

- **Form**: Design a form for initiating transfers with fields:
  - Recipient
  - Amount
  - Transfer Type (Bank, Mobile, etc.)
  - Description

**Requirements**:
- Manage form inputs using React state.
- Validate inputs (e.g., amount should be numeric, recipient should not be empty).
- Display confirmation messages or errors using toast notifications (e.g., `react-hot-toast`).
- Strong TypeScript typing for form data.

### 4. Design & UI/UX Skills

- Use Tailwind CSS or another CSS framework for styling.
- Ensure the dashboard is responsive.
- Create a clean, intuitive, and user-friendly UI.

**Bonus Points**:
- Implement a dark mode toggle.
- Include meaningful icons next to summary cards and transaction types.

### 5. Code Quality and Documentation

- Write clean, maintainable code with proper comments.
- Structure the app modularly with logically broken-down components.
- Provide documentation on how to set up and run the project, including the structure and any significant design decisions.

## Task Submission

- Submit your project via a GitHub repository.
- Ensure that the project is easily set up and run locally with clear README instructions.

## Evaluation Criteria

1. **TypeScript**:
   - Proper use of interfaces, types, generics, and typing in React components.

2. **React**:
   - Effective use of functional components, hooks, and state management.

3. **Design Skills**:
   - Clean, simple, and responsive UI.
   - Effective use of CSS or Tailwind CSS.

4. **Problem Solving**:
   - Logical and maintainable app structure.
   - Handling of asynchronous data fetching and error states.

5. **Bonus Points**:
   - Extra features like dark mode, good use of icons, or optimizations.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/payment-dashboard.git
   cd payment-dashboard
