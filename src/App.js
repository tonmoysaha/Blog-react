import './App.css';
import  Home from './pages/home'
import Contact from "./pages/contact";

function App() {
  return (
      <div>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-center">
              <Home></Home>
              <Contact></Contact>
          </div>
      </div>
  );
}

export default App;
