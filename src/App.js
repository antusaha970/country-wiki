import './App.css';
import HeaderText from './Components/Header/Header';
import { useState, useEffect } from 'react';
import AllCountrys from './Components/AllCountrys/AllCountrys';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetails from './Components/CountryDetails/CountryDetails';
import NoMatch from './Components/NoMatch/NoMatch';



function App() {
  const [countrys, setCountrys] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountrys(data));
  }, [])


  return (
    <div className="App">
      <Router>

        <HeaderText></HeaderText>

        <Switch>
          <Route exact path="/">
            <header className="App-header">
            </header>
            <main>
              <AllCountrys countrys={countrys}></AllCountrys>
            </main>
          </Route>
          <Route exact path={'/country/:name'}>
            <CountryDetails></CountryDetails>
          </Route>

          <Route path={'*'}>
            <NoMatch></NoMatch>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
