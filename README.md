
# 🛒 My Shopping Site

![Shopping Cats](https://media.tenor.com/uneqmK1ERo8AAAAi/tkthao219-bubududu.gif)

A cute and simple shopping website built with **Next.js** and **Tailwind CSS**, where users can browse gadgets and clothes, add products to cart (stored in **localStorage**), and place orders via a Google Form (Google Apps Script).

---

## 🌟 Features

- 💻 **Next.js + Tailwind CSS**
- 🛍️ Browse Gadgets and Clothes (stored in local files)
- 🧺 Cart functionality using `localStorage`
- 📦 Order placement via **Google Apps Script** to Google Sheets
- 🎨 Responsive UI with a clean, minimal design
- 📱 Modal-based form for order submission

---

## 🗂️ Project Structure

```
/components
  └── Navbar.js          # Reusable navigation
  └── ProductCard.js     # Product display card
  └── ModalForm.js       # Order form modal

/data
  └── gadgets.js         # Array of gadget products
  └── clothes.js         # Array of clothing products

/pages
  └── index.js           # Home page
  └── gadgets.js         # Gadgets page
  └── clothes.js         # Clothes page
  └── cart.js            # Cart and order page

/utils
  └── cart.js            # LocalStorage cart utility functions
```

---

## 🛠️ Setup Instructions

1. **Clone the Repo**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Locally**
   ```bash
   npm run dev
   ```

4. **Access the App**
   ```
   http://localhost:3000
   ```

---

## ✨ Google Apps Script Integration

- Orders submitted from the modal form are sent to a Google Form (via Apps Script) using a `POST` request.
- The Google Script URL used should match your own script:
  ```js
  https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
  ```

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Apps Script](https://developers.google.com/apps-script)
- `localStorage` (for client-side cart persistence)

---

## 🐾 Credits

- 🐱 Cute shopping gif from [Tenor](https://tenor.com/view/tkthao219-bubududu-gif-uneqmK1ERo8)
- 💖 Inspired by simplicity and fun!

---

## 📸 Preview

You can include screenshots or your own animated demo here!

---

## 📄 License

This project is for educational and fun purposes. Feel free to fork and modify!

---
