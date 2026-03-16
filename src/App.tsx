import { useEffect } from 'react';
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './pages/HomePage';
import Projects from './pages/ProjectsPage';
import NotFound from './pages/NotFoundPage';

interface NavigationItem {
  to: string;
  label: string;
  icon?: string;
}

const navigationItems: NavigationItem[] = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
];

const HeaderComponent = () => {
  return (
    <header className="sticky top-0 z-100">
      <nav className="primary-color p-5 flex gap-5 justify-center text-white font-semibold">
        {navigationItems.map((item) => (
          <NavLink to={item.to} className="nav-link">{item.label}</NavLink>
        ))}
      </nav>
    </header>
  );
}

const FooterComponent = () => {
  return (
    <footer className="primary-color flex p-5 justify-center">
      <span className="text-white">&copy; 2026 Muhammad Arsya Nurafi. All rights reserved.</span>
    </footer>
  );
}

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />

      <main className="flex flex-1 m-4 sm:m-20">
        <Outlet />
      </main>

      <FooterComponent />
    </div>
  );
}

// Nested routing configuration
function App() {
  useEffect(() => {
    document.title = "Arsya's Portfolio"
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="projects" element={<Projects />}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  );
}

export default App
