import Table from './components/Table';
import './App.css'
import Header from './components/Header';
// import Sidebar from './components/Sidebar'
import Home from './components/Home';
import Revenue from './components/Revenue';

function App() {
  
  return (
    <div>
      <Header />
      {/* <Sidebar /> */}
      <Home />
      <br></br>
      <Revenue />
      <br></br>
      <Table />
    </div>
  );
}

export default App;
