import './App.css';
import { Navbar } from './Components/Navbar';
import styles from './App.module.css';
import { Login } from './Components/Login';
import { Footer } from './Components/Footer';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Fundraiser } from './Components/Fundraiser';
import { CasePage } from './Components/CasePage';
import { useEffect, useState } from 'react';
import ScrollToTop from './Components/ScrollToTop';
import axios from 'axios';


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
     <Main altShowFn={altShowFn} init={init} load={load} changeLoad={changeLoad} />
      <Footer/>
    </div>
  );
}


function Main({altShow, altShowFn, load, changeLoad, init }) {
  return <Switch>
    <Route exact path='/'><Home altShow={altShow} altShowFn={altShowFn} changeLoad={changeLoad}/></Route>
    <Route exact path='/fundraiser'><Fundraiser init={init} load={load} altShowFn={altShowFn} /></Route>
    <Route exact path='/case'><CasePage/></Route>
      </Switch>
}

// const Main = () => (
//       <Switch>
//     <Route exact path='/'><Home temp={temp}/></Route>
//         <Route exact path='/fundraiser' component={Fundraiser}></Route>
//       </Switch>
//     );

export default App;
