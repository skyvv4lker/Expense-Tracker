# 💰 Expense Tracker

A fully functional **Expense Tracker Web Application** built with **HTML, CSS, and JavaScript**, featuring charts, reports, import/export, and authentication.

## ✨ Features

* 📊 **Dashboard**

  * Balance, Income, Expense summary cards
  * Transaction log with "See More" modal
  * Add new transactions with categories, date picker, and type (Income/Expense)

* 🍩 **Charts & Reports**

  * Donut chart of expenses by category
  * Monthly line chart with budget tracking and overspending highlights

* 📂 **Import & Export Data**

  * Import transactions from **CSV, Excel, JSON**
  * Export transactions as **CSV, Excel, PDF**
  * Supports range filters (This month, Last 3 months, Custom)

* 🔐 **Authentication**

  * Sign In with **email & password**
  * Create Account option
  * Session stored in `localStorage`
  * "Sign In" dynamically switches to "Logout" after login

* 🖼 **UI/UX**

  * Responsive layout
  * Custom dropdown for categories
  * Drag & Drop file import
  * Clean charts with Chart.js

---

## 🛠️ Tech Stack

* **Frontend**: HTML, CSS, JavaScript
* **Libraries**:

  * [Chart.js](https://www.chartjs.org/) (charts + reports)
  * [Flatpickr](https://flatpickr.js.org/) (date picker)
  * [SheetJS (XLSX)](https://sheetjs.com/) (Excel import/export)
  * [jsPDF](https://github.com/parallax/jsPDF) (PDF export)

---

## 🚀 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

### 2️⃣ Open in Browser

Simply open `index.html` in your favorite browser.
No backend required – everything runs on the client side.

---

## 🔧 Usage

1. **Sign In / Sign Up**

   * Use your email + password to log in
   * Or create a new account

2. **Add Transactions**

   * Click **+ Add New Entry**
   * Fill details (title, amount, category, type, date)
   * Save → Updates dashboard, charts, and logs

3. **Import Transactions**

   * Drag & drop or upload a file (`.csv`, `.xlsx`, `.json`)
   * Click **Validate & Import**

4. **Export Transactions**

   * Choose a format (CSV / Excel / PDF)
   * Click **Export Now**

5. **Reports**

   * See expense trends over months
   * Use **Set Budget** to track against spending

---

## 📸 Screenshots

* Dashboard with charts & transactions
* Import/Export section
* Sign In & Sign Up modals

---

## 📌 Roadmap

* [ ] Cloud sync (backend integration)
* [ ] Multi-user support
* [ ] Categories customization
* [ ] Advanced filters & analytics

---

## 📜 License

MIT License © 2025 Ammy

---
