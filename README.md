# 🍽️ FoodZone – Food Ordering Website

**FoodZone** is a modern and user-friendly food ordering web application built with **React.js** and powered by **Swiggy Live API** to provide real-time restaurant data, menus, and ordering options.

---

## 📌 Links
- **GitHub:** [FoodZone Repository](https://github.com/lovepoonia/FoodZone---Food-Ordering)  
- **LinkedIn:** [Love Poonia](https://www.linkedin.com/in/love-poonia/)  

---

## ✨ Features
✅ **Real-time Restaurant Data** – Fetches restaurant listings, menus, and prices from the Swiggy Live API.  
✅ **Restaurant Search** – Search for restaurants by cuisine or name.  
✅ **Menu Display** – View detailed restaurant menus dynamically.  
✅ **Responsive Design** – Optimized for desktop and mobile devices.  
✅ **Dark/Light Mode** – Toggle between themes for better UX.  
✅ **Fast Performance** – Efficient API calls with caching to reduce load times.  

---

## 🛠️ Tech Stack
- **Frontend:** React.js, React Router, Tailwind CSS  
- **State Management:** Redux Toolkit  
- **API:** Swiggy Live API  
- **Other Tools:** Fetch API, Git, npm  

---

## 📂 Project Structure
```plaintext
src/
│
├── components/
│   ├── Header.js
│   ├── Footer.js
│   ├── Body.js
│   ├── RestaurantCard.js
│   ├── RestaurantMenu.js
│   ├── RestaurantCategories.js
│   ├── Cart.js
│   ├── Login.js
│   ├── Contact.js
│   ├── AboutUs.js
│   ├── Shimmer.js
│
├── hooks/
│   ├── useBody.js
│   ├── useOnlineStatus.js
│   ├── useRestaurantMenu.js
│
├── store/
│   ├── appStore.js
│   ├── cartSlice.js
│
├── utils/
│   ├── UserContext.js
│   ├── constants.js
│
├── App.js
└── index.js


---

## 🚀 Installation & Setup

**Clone the repository**
   ```bash
   git clone https://github.com/lovepoonia/FoodZone---Food-Ordering.git
   cd FoodZone---Food-Ordering
   npm install
   npm start
   http://localhost:1234

## 🛠 How to Enable CORS for Local Development

Swiggy API has CORS restrictions, so you need a workaround for local testing.

**Option 1 – Use a Browser Extension**

### For Chrome:
- Install [Allow CORS: Access-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-cors-access-control/).
- Enable it only during development.

### For Firefox:
- Install [CORS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/).
- Enable it only during local testing.

---

## 📌 Future Improvements
- 🛒 Add cart & checkout functionality
- 🔐 Add grocery ordering
- ⭐ Add restaurant reviews & ratings
- 📍 Integrate location-based search

---

## 🤝 Connect with Me
- **GitHub:** [@lovepoonia](https://github.com/lovepoonia)  
- **LinkedIn:** [Love Poonia](https://www.linkedin.com/in/love-poonia)


