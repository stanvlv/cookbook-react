import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <Footer />
      <h1>CookBook</h1>
    </div>
  );
}

export default App;
