# Data Query Dashboard Prototype

A React-based dashboard prototype for a Gen AI Analytics tool with a modern, intuitive UI. This tool allows users to query data using natural language and visualize the results in various formats, such as line charts, bar charts, and pie charts.

## Features
- **Natural Language Query Input**: Users can input queries in plain language to fetch data insights.
- **Query History**: Interactive recent searches for quick access to past queries.
- **Multiple Visualizations**:
  - Line Chart for trend analysis.
  - Bar Chart for comparisons.
  - Pie Chart for category distributions.
- **Dynamic Chart Switching**: Users can toggle between different chart types seamlessly.
- **Premium UI Design**:
  - Card-based layout with subtle shadows.
  - Gradient backgrounds and modern buttons.
  - Responsive design for all screen sizes.
  - Clean typography and interactive hover effects.
- **Loading States and Error Handling**:
  - Animated spinner for loading states.
  - User-friendly error messages for failed queries.
- **Customizable Themes**: Easily update colors and styles using Tailwind CSS.

## Tech Stack
- **Frontend**: React.js
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Data Visualization**: Recharts
- **Build Tool**: Vite (or Create React App, if applicable)

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Vasu996/Gen-AI-Analytics-tool-Internshala.git
2.Navigate to the project directory:
cd Gen-AI-Analytics-tool-Internshala
3.Install dependencies:
npm install
4.Start the development server:
npm start
5.Open your browser and navigate to http://localhost:3000.
6.Deployment
The application can be deployed on platforms like Netlify or Vercel. Once deployed, the live application will be accessible at: [Deployment URL].
Project Structure
src/
├── components/
│   ├── [ResultsDisplay.js]   # Main component for displaying query results
│   ├── QueryInput.js       # Component for natural language query input
│   ├── QueryHistory.js     # Component for displaying recent queries
│   └── ChartSwitcher.js    # Component for toggling between chart types
├── redux/
│   ├── querySlice.js       # Redux slice for managing query state
│   └── store.js            # Redux store configuration
├── styles/
│   └── tailwind.css        # Tailwind CSS configuration
├── App.js                  # Root component
├── index.js                # Entry point
└── assets/                 # Static assets (images, icons, etc.)

How It Works
Query Input: Users type a natural language query into the input box.
Data Fetching: The query is processed, and data is fetched from the backend or a mock API.
Visualization: The fetched data is displayed in the selected chart type (Line, Bar, or Pie).
Interactive Features: Users can switch between chart types, view query history, and handle errors gracefully.

Future Enhancements
Authentication: Add user login and session management.
Export Options: Allow users to export visualizations as images or PDFs.
Advanced Filters: Enable users to filter data by date, category, or other parameters.
Backend Integration: Connect to a real backend API for dynamic data fetching.
Dark Mode: Add a toggle for light and dark themes.

License
This project is licensed under the MIT License.

Contact
For any questions or feedback, feel free to reach out:

Author: Vasu
GitHub: https://github.com/Vasu996


