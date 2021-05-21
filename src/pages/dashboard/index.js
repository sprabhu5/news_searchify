/*
Mounts the component and navigates to the various links
*/


import Search from '../search';
import "../../styles/dashboard.css"
import Navbar from './Navbar';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import History from '../history';
import { StoreProvider } from '../../store/StoreProvider';

const App = () => {
  return (
    <StoreProvider>
      <div className="App">
        <Router>
          <Navbar/>
          <div  style={{marginTop: "2rem"}}>
            <Switch>
                <Route exact path="/home" component={Search} />
                <Route exact path="/history" component={History} />
                <Route path="*">
                  <Redirect to="/home" />
                </Route>
              
            </Switch>
          </div>
        </Router>
      </div>
    </StoreProvider>
  );
}

export default App;
