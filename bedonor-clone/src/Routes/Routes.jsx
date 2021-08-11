import { Switch, Route } from 'react-router-dom';
import { CasePage } from '../Components/CasePage/CasePage';
import { Fundraiser } from '../Components/Fundraiser/Fundraiser';
import { Home } from '../Components/Home/Home';

export function Main({ altShow, altShowFn, load, changeLoad, init }) {
  return <Switch>
    <Route exact path='/'><Home altShow={altShow} altShowFn={altShowFn} changeLoad={changeLoad}/></Route>
    <Route exact path='/fundraiser'><Fundraiser init={init} load={load} altShowFn={altShowFn} /></Route>
    <Route exact path='/case'><CasePage/></Route>
      </Switch>
}