import './App.css'

const Header = () => {
  return (
    <div className="bg-sky-700 flex w-full">
      <p className="p-5">Header</p>
    </div>
  );
}

const Footer = () => {
  return (
    <div>
      <p>Footer</p>
    </div>
  );
}

// Nested routing configuration
function App() {
  return (
    <Header />
  );
}

export default App
