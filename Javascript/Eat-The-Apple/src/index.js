import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Global variables
window.cur_dirc ="right";
window.auto="off";
window.apple_id="";
window.score=0;
window.cur_act_id="id09_10";
window.rw_pos=9;
window.cl_pos=10;
window.pause_status='On'
window.all_act_ids=["id09_10"];
window.apple_eated='no';
window.snake_speed=500;
window.grid_order=20;
window.obstacle_pattern=[];

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Default srttings
document.getElementById("btn_Stop").disabled = true;
document.getElementById("btn_Auto").disabled = true;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
