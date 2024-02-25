import Table from './components/Table';
import './App.css'
import Header from './components/Header';
import Sidebar from './components/Sidebar'
// import Revenue from './components/Revenue';
import ClientNums from './components/ClientNums'
import Grid from "@mui/material/Grid";
import Revenue from './components/Revenue';
import Login from './components/Login';

function App() {
  
  return (
    
    <>
    <Grid container spacing={0.5}>
      <Grid item xs={8}>
        <Header />
      </Grid>

      <Grid container direction="row" justifyContent="center" alignItems="center" item md={6} xs={8}>
        <Revenue />
      </Grid>

      <Grid container direction="row" justifyContent="center" alignItems="center" item md={6} xs={8}>
        <ClientNums />
      </Grid>

      <Grid item md={2} s={12}>
          <Sidebar />
          <Login />
        </Grid>

      <Grid item md={10} s={12}>
        <h2>Transactions</h2>
        <Table />
      </Grid>

    </Grid>
  </>
  );
}

export default App;
