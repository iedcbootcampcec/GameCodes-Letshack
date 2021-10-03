
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavButtons from './NavigationButtons';
import Grid from './Grid';
import Auto from './Auto';
import './FindKeypress'
import BtnGameCtrl from './GameMode'
import ScoreBoard from './Score'
import logo from './apple.gif';
import BtnStop from './EndGame';
import GameStatus from './Game_Status'
import Obstacle from './SelectObstacle'


function App() {

  return (
    <div  className="pt-2 "id="app">
    <div className="h-75 contents mt-0 shadow-lg pb-">
    <table id='container'>
        <tr>
          <h1 className="mt-1">Eat The Apple<span><img alt="apple" id="logo" src={logo} /></span></h1>
        </tr>
        <tr>
          <td id="col1">              
                <Grid/> 
          </td>
          <td id="col2">
              <ScoreBoard/>
              <NavButtons/>
              <BtnGameCtrl/>
              <Auto/>
              <BtnStop/>
              <Obstacle/>
          </td>
        </tr>
        <tr>
        <GameStatus/>
        </tr>
      </table>
    </div>
      
      
      </div>
  );
}


export default App;