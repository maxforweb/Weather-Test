import React from "react";
import { hot } from 'react-hot-loader/root';
import SearchInfo from './components/searchBar';
import Weather from './components/weather';

class App extends React.Component {
  render() {
    return(
      <div className='container'>
        <SearchInfo />
        <Weather /> 
      </div>
    );
  }
}

export default hot(App);
