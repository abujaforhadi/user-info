
# User Dashboard - Next.js App

A modern **User Dashboard** application built with **Next.js** and **TypeScript**.  
This app fetches user data from an API, displays it in a searchable and paginated list, and allows viewing detailed user information. Animations are added with **Framer Motion**, making the UI interactive and dynamic.

---

## Live Demo

[https://user-info23.vercel.app/](https://user-info23.vercel.app/)

---

## Features

- **User List Page**
  - Displays a paginated list of users.
  - Fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).
- **Search & Filter**
  - Filter users by name or email in real-time.
- **User Details Page**
  - Click a user to view full details including email, address, and company info.
- **Pagination**
  - Limits number of users displayed per page for easy navigation.
- **Responsive Design**
  - Works on mobile, tablet, and desktop devices.
- **Animations**
  - Smooth hover and page transition animations using **Framer Motion**.
  - Optionally, 3D effects can be added using **Three.js**.

---

## Technologies Used

- **Next.js 15** – React framework with SSR support  
- **TypeScript** – Strongly typed JavaScript  
- **React** – Component-based UI  
- **Framer Motion** – Animations & transitions  
- **Tailwind CSS** – Styling and layout  
- **JSONPlaceholder** – Fake API for users data  
- **Vercel** – Deployment platform  

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/abujaforhadi/user-info.git
cd user-info
````

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Project Structure

```
src/
├─ components/     # UI components like UserCard, UserListItem, Pagination
├─ App/          # Next.js App (index.tsx, users/[id].tsx)
├─ APIs/           # API helpers (fetch users)
├─ styles/         # Tailwind & global CSS
```

---

## Deployment

The app is hosted live on **Vercel**:

[https://user-info23.vercel.app/](https://user-info23.vercel.app/)

---

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License**.

---

## Contact

GitHub: [https://github.com/abujaforhadi](https://github.com/abujaforhadi)

```

---

If you want, I can also **make a “fancy” GitHub-ready README** with **badges (Next.js, TypeScript, Vercel, License), animated GIF preview of your dashboard, and 3D mention** so it looks professional for submission.  

```
