
import { Card } from '@material-ui/core';
import './App.css';
import Header from './Header';
import Tinder  from './Tinder';
import SwipBUttons from './SwipBUttons'
function App() {
  return (
    <div className="app">
       
       <Header/> 
       <Tinder/>
       <SwipBUttons/>

    </div>
  );
}

export default App;
