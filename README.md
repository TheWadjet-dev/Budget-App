# Budget App in Node.js

This is a simple web-based budget management application built with Node.js and Express. The app allows users to track their income and expenses, showing the total budget and expense percentages. The frontend is served through HTML, CSS, and JavaScript. This project demonstrates basic server-side functionality for a budget tracking system.

## Project Structure

- **server.js**: Contains the Express server logic to serve static files and handle routes.
- **index.html**: The main HTML file that provides the user interface for adding and viewing income and expenses.
- **Dockerfile**: Configuration to containerize the application with Docker.
- **css/styles.css**: CSS file for styling the app.
- **js/app.js**: JavaScript file containing the app's logic for adding/removing entries and calculating totals.
- **js/Data.js**: Data model for storing income and expense items.
- **js/Income.js**: JavaScript model for managing income items.
- **js/Expense.js**: JavaScript model for managing expense items.

## Prerequisites

To run this project, you need:
- [Node.js](https://nodejs.org/) (version 16 or later)
- [Docker](https://www.docker.com/get-started) (optional, if you want to run the application in a container)

## Running the Application Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/budget-app
    cd budget-app
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Run the Node.js application**:
    ```bash
    node server.js
    ```

4. **Access the app**:
   Open your browser and go to `http://localhost:3000` to start using the Budget App.

## Running the Application with Docker

1. **Build the Docker image**:
    ```bash
    docker build -t budget-app .
    ```

2. **Run the Docker container**:
    ```bash
    docker run -p 3000:3000 budget-app
    ```

3. **Access the app**:
   Open your browser and go to `http://localhost:3000`.

## How to Use

- **Add an Income**: Select the `+` option, enter a description and amount, and click the check button.
- **Add an Expense**: Select the `-` option, enter a description and amount, and click the check button.
- **Delete an Entry**: Click the delete icon next to the income or expense you want to remove.
- **View Your Budget**: The total budget will be displayed based on the difference between total income and total expenses.

## Application Logic Overview

- **Income and Expense Management**: Users can add, view, and delete income and expense items.
- **Budget Calculation**: The app calculates the total budget as the difference between income and expenses, and shows the percentage of expenses relative to income.
- **Data Storage**: Data is stored temporarily in memory for the session (can be extended to use a database in future versions).
