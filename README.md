# Nest POS Auto Field

A lightweight Google Chrome extension designed to streamline customer data entry in the 6Valley-based POS system (`nest.com.bd`). It automatically generates and fills in the customer's email address as soon as a valid phone number is entered.

## Features

- **Automatic Email Generation:** Instantly populates the `email` input field using the format `customers+{phonenumber}@pos.nest.com.bd` once the phone number reaches the required digit length.
- **Dynamic Form Support:** Works seamlessly with dynamically loaded off-canvas modals (`#offcanvasAddNewCustomer`).
- **Input Sanitization:** Automatically strips spaces and non-numeric characters before generating the email address.
- **Zero Overhead:** Built with pure vanilla JavaScript and Manifest V3 without any external dependencies.

## Project Structure

```text
nest.com.bd-pos-extension-for-6vally/
├── manifest.json       # Extension configuration and permissions (Manifest V3)
├── content.js          # DOM listener and auto-fill logic
├── icon16.png          # 16x16 toolbar icon
├── icon48.png          # 48x48 extensions management page icon
├── icon128.png         # 128x128 installation/store icon
└── README.md           # Project documentation