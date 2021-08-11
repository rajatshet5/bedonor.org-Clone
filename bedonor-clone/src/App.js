import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
//import styles from './App.module.css';
//import { Login } from './Components/Login';
import { Footer } from './Components/Footers/Footer';
import { useState } from 'react';
import ScrollToTop from './Components/Scroll/ScrollToTop';
import { Main } from './Routes/Routes';


function App() {
  const [load, setLoad] = useState();
  const [altShow, setAltShow] = useState(false);
  const changeLoad = () => {
    setLoad(!load);
  }
  const altShowFn = (val) => {
    setAltShow(val);
  }
  const [init, setInit] = useState();
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar altShow={altShow} altShowFn={altShowFn} load={load} changeLoad={changeLoad}/>
     <Main altShowFn={altShowFn} init={init} setInit={setInit} load={load} changeLoad={changeLoad} />
      <Footer/>
    </div>
  );
}




export default App;
