
import {GoAuto} from './Auto';
import {move} from './NavigationButtons'
import './index.css'

var var_AppleColor;
var previous_time_difference=0;
var time_difference;

function BtnGameCtrl(){
     return(
         <div>
             <button type="button" class="new-game-button btn btn-dark" id="btn_game" onClick={()=> Game()}>New Game</button>
         </div>
        
     );
 }

 function Game(){
    let game_action =document.getElementById("btn_game").innerHTML;
    let el=document.getElementById("btn_Auto");
    //New Game
    if (game_action==="New Game"){                                                        
        document.getElementById("btn_game").innerHTML="| |";
        Reset();

        //View Apple
        var_AppleColor='Red';
        GenerateApple();
        window.var_Blink =setInterval(function(){  Blink_Apple() }, 400);
        document.getElementById("btn_Stop").disabled = false;
        document.getElementById("btn_Auto").disabled = false;
        document.getElementById("Ob_pattern").disabled = true;
        document.getElementById("selectedDifficulty").disabled = true;
        GoAuto(el);

        //Start Timer
        window.var_StartTime = new Date().getTime();
        window.var_Timer=setInterval(function() {Timer()});
        
    }
    //Pause Game
    else if (game_action==="| |"){
        document.getElementById("btn_game").innerHTML="| ▶";

        //Pause apple
        clearInterval(window.var_Blink);
        if (document.getElementById(window.apple_id).className!=="active_box"){
        document.getElementById(window.apple_id).className="apple_box";
        
        }

        // Pause Timer
        clearInterval(window.var_Timer);
        previous_time_difference=time_difference;

        clearInterval(window.var_Auto);
        document.getElementById("btn_Auto").disabled = true;
        window.pause_status='On'
        document.getElementById('game_alert').innerHTML="PAUSED";
        document.getElementById('game_alert').className="alert_class_show";
    }
    //Resume
    else{
        window.pause_status='Off'
        document.getElementById("btn_game").innerHTML="| |";
        document.getElementById("btn_Auto").disabled = false;

        //Resume apple
        window.var_Blink =setInterval(function(){  Blink_Apple() }, 400);
        

        // Resume Timer
        window.var_StartTime = new Date().getTime();
        window.var_Timer=setInterval(function() {Timer()});

        // Resume Auto
        document.getElementById('game_alert').innerHTML="";
        document.getElementById('game_alert').className="alert_class_hidden";
        if (window.auto==="on"){
        
        window.var_Auto =setInterval(function(){  move(window.cur_dirc,"auto") },window.snake_speed);
    
        }
    }

 }

function GenerateApple(){
    let rw_index=Math.floor(Math.random() * 16) + 1;
    let cl_index=Math.floor(Math.random() * 16) + 1;
    window.apple_id='id'+("0" + rw_index).slice(-2)+'_'+("0" +cl_index).slice(-2);

    if (window.all_act_ids.includes(window.apple_id)||(window.obstacle_pattern.includes(window.apple_id))){
        GenerateApple();
    }
    document.getElementById(window.apple_id).className="apple_box";
    
}

function Reset(){
    window.score=0;
    document.getElementById("score").innerHTML="000";
    
    for (let id of window.all_act_ids){
        document.getElementById(id).className="box";
    }
    for (let id of window.obstacle_pattern){
        document.getElementById(id).className="obstacle_box";
    }
  

    document.getElementById("id09_10").className="active_box";
    window.cur_act_id="id09_10";
    window.rw_pos=9;
    window.cl_pos=10;
    window.cur_dirc ="right";
    window.apple_eated='no';
    window.all_act_ids=["id09_10"];
    window.pause_status='Off'
    document.getElementById('game_alert').innerHTML="";
    document.getElementById('game_alert').className="alert_class_hidden";
    //window.snake_speed=500;
    previous_time_difference=0;

}

function Blink_Apple(){
    if (var_AppleColor==='red'){
        var_AppleColor='gray';
        document.getElementById(window.apple_id).className="box";

    }
    else{
        var_AppleColor='red';
        document.getElementById(window.apple_id).className="apple_box";

    }

}
function Timer(){
    let now = new Date().getTime();
    time_difference=now-window.var_StartTime+previous_time_difference;
    let minutes = Math.floor((time_difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time_difference % (1000 * 60)) / 1000);
    document.getElementById("timer").innerHTML=("0" + minutes).slice(-2)+ ":" +  ("0" + seconds).slice(-2);
}

 export default BtnGameCtrl;
 export {GenerateApple};