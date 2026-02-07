import { useEffect } from 'react';
import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AboutMe from './pages/AboutMePage';
import Projects from './pages/ProjectsPage';
import Certificates from './pages/CertificatesPage';
import NotFound from './pages/NotFoundPage';

interface NavigationItem {
  to: string;
  label: string;
  icon?: string;
}

const navigationItems: NavigationItem[] = [
  { to: '/', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certifications' }
];

const HeaderComponent = () => {
  return (
    <div className="bg-blue-800 p-5">
      <nav className="flex gap-5 justify-center rounded-xl p-2 text-white font-semibold">
        {navigationItems.map((item) => (
          <NavLink to={item.to} className="nav-link hover:underline">{item.label}</NavLink>
        ))}
      </nav>
    </div>
  );
}

const FooterComponent = () => {
  return (
    <div className="bg-blue-800 flex p-5 justify-center">
      <p className="text-white">&copy; 2026 Muhammad Arsya Nurafi. All rights reserved.</p>
    </div>
  );
}

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky">
        <HeaderComponent />
      </header>

      <main className="flex flex-col flex-1">
        <Outlet />
      </main>

      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

// Nested routing configuration
function App() {
  useEffect(() => {
    document.title = "Personal Portfolio"
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutMe />}/>
        <Route path="projects" element={<Projects />}/>
        <Route path="certifications" element={<Certificates />}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  );
}

export default App
