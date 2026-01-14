import { useEffect } from 'react';
import './App.css'

const HeaderComponent = () => {
  return (
    <div className="bg-sky-700 flex">
      <p className="p-5">Header</p>
    </div>
  );
}

const FooterComponent = () => {
  return (
    <div className="bg-sky-700 flex">
      <p className="p-5">Footer</p>
    </div>
  );
}

// Nested routing configuration
function App() {
  useEffect(() => {
    document.title = "Personal Portfolio"
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky">
        <HeaderComponent />
      </header>
      <main className="flex-1">
        <div>
          <p>Main</p>
        </div>
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App
