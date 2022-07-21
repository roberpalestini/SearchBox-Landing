import './App.css';
import SearchBox from './components/searchbox'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import '/node_modules/primeflex/primeflex.css'
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBox />
    </div>
  );
}

export default App;
