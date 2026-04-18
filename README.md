# 📚 Book Vibe
Book Vibe is a simple and interactive React-based web application where users can explore books, view details, and track reading progress visually.
This project was built as a practice project to strengthen skills in React, routing, UI design, and data handling.

🌐 **Live Site:** [book-vibe-bookshelf.vercel.app](https://book-vibe-bookshelf.vercel.app)

---
## ✨ Features
- 📖 Browse a curated collection of books with full details
- ✅ Mark books as **Read** — saved in local storage
- 💚 Add books to your **Wishlist** — saved in local storage
- 🔄 Moving a book from wishlist to read list removes it from wishlist automatically
- 🔃 Sort listed books by **Rating**, **Number of Pages**, or **Year of Publishing**
- 📋 Separate tabs for Read List and Wishlist
- ⭐ Book rating display
- 🏷️ Category and tag system
- 📊 Pages-to-read chart visualization (Recharts)
- 🌗 Light & Dark theme toggle (daisyUI)
- 🔔 Toast notifications for all user actions
- 📱 Fully responsive design
- 🎨 Clean and modern UI with Tailwind CSS
---
## 🛠️ Technologies Used
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge&logo=lucide&logoColor=white)
![React Tabs](https://img.shields.io/badge/React_Tabs-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Toastify](https://img.shields.io/badge/React_Toastify-FFBE00?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
---
## 📁 Project Structure

```
Book-Vibe/
├── public/
│   ├── book.ico
│   └── booksData.json          # Static book data
├── src/
│   ├── assets/
│   │   └── banner.png
│   ├── components/
│   │   ├── HomePage/
│   │   │   ├── AllBooks.jsx    # Book grid on home page
│   │   │   └── Banner.jsx      # Hero banner section
│   │   ├── ListedBooks/
│   │   │   ├── ListedReadList.jsx   # Read list tab content
│   │   │   └── ListedWishlist.jsx   # Wishlist tab content
│   │   ├── shared/
│   │   │   ├── Footer/
│   │   │   │   └── Footer.jsx
│   │   │   └── Navbar/
│   │   │       └── Navbar.jsx
│   │   └── ui/
│   │       ├── BookCard.jsx         # Card for book grid
│   │       └── BookListCard.jsx     # Card for listed books
│   ├── context/
│   │   └── BookProvider.jsx         # Context API — global state
│   ├── layout/
│   │   └── MainLayout.jsx           # Shared layout with Navbar & Footer
│   ├── pages/
│   │   ├── BookDetails/
│   │   │   └── BookDetails.jsx      # Single book detail page
│   │   ├── Books/
│   │   │   └── Books.jsx            # All books page
│   │   ├── Error/
│   │   │   └── Error.jsx            # 404 page
│   │   ├── Home/
│   │   │   └── Home.jsx             # Home page
│   │   └── PagesToRead/
│   │       └── PagesToRead.jsx      # Recharts bar chart page
│   ├── routes/
│   │   └── Routes.jsx               # React Router config
│   ├── utils/
│   │   └── localDB.js               # Local storage helper functions
│   ├── index.css
│   └── main.jsx
├── index.html
├── vercel.json
├── vite.config.js
├── eslint.config.js
└── package.json
```

---
## 🚀 Run Locally

```bash
# Clone the repository
git clone https://github.com/Saharier36/Book-Vibe.git

# Go into the project folder
cd Book-Vibe

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---
## 📌 Purpose
This project is built for learning and practicing:
- React fundamentals
- Component structure & reusability
- Context API for state management
- Routing with React Router
- Local storage integration
- UI/UX design
- Data visualization with Recharts
---
## 👨‍💻 Author
**Saharier Omi**
- GitHub: [@Saharier36](https://github.com/Saharier36)
- LinkedIn: [saharier-omi](https://linkedin.com/in/saharier-omi)
---
## 📃 License
This project is for educational purposes only.
