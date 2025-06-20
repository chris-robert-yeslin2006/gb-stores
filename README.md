
# 🛒 GB stores

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



## ✨ Google Apps Script Integration

- Orders submitted from the modal form are sent to a Google Form (via Apps Script) using a `POST` request.


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

This project is for internzo private limited 

---
