import './index.css'
import {GenerateApple} from './GameMode'
import  {EndGame} from './EndGame'

let move_complete_flag='completed';

function NavButtons(){
    return(
        <div className='NavContainer'>
            <button onClick={()=>move("up","manuel")} className="arrow-buttons btn btn-secondary btn-lg">↑</button>
            <br></br>
            <button  onClick={()=>move("left","manuel")} className="arrow-buttons btn btn-secondary btn-lg">←</button>
            <button  onClick={()=>move("down","manuel")} className="arrow-buttons btn btn-secondary btn-lg">↓</button>
            <button  onClick={()=>move("right","manuel")} className="arrow-buttons btn btn-secondary btn-lg">→</button>
           
        </div>

    );
}

function move(dirc,input_mode){
        if (window.pause_status!=='On'){
        //alert('hi')
        //Prevent from moving backward
        if((((window.cur_dirc==="up") && (dirc==="down")))||(((window.cur_dirc==="down") && (dirc==="up")))||(((window.cur_dirc==="left") && (dirc==="right"))) || (((window.cur_dirc==="right") && (dirc==="left")))){
        
            return false;

        }
        

        //Move the snake
        if ((((input_mode==="manuel") && (window.auto==="off"))) || (((input_mode==="auto") && (window.auto==="on")))){
            
            /////////////////////////////////////Adding Tail
            if(window.apple_eated==='yes'){
                window.apple_eated='no';
            }
            else{
                document.getElementById(window.all_act_ids[window.all_act_ids.length-1]).className="box";
                window.all_act_ids.pop();
            }
            //////////////////////////////////////
           
            if (dirc ==="up"){
                if(window.rw_pos===1){
                    window.rw_pos=window.grid_order;
                }
                else{
                    window.rw_pos-=1;
                }
            }
            if (dirc ==="down"){
                if(window.rw_pos===window.grid_order){
                    window.rw_pos=1;
                }
                else{
                    window.rw_pos+=1;
                }
            }
            if (dirc ==="left"){
                if(window.cl_pos===1){
                    window.cl_pos=window.grid_order;
                }
                else{
                    window.cl_pos-=1;
                }
            }
            if (dirc ==="right"){
                if(window.cl_pos===window.grid_order){
                    window.cl_pos=1;
                }
                else{
                    window.cl_pos+=1;
                }
            }
            

            window.cur_act_id='id'+("0" + window.rw_pos).slice(-2)+'_'+("0" +window.cl_pos).slice(-2);

            //Game Over
            if ((window.all_act_ids.includes(window.cur_act_id))||(window.obstacle_pattern.includes(window.cur_act_id))){
                document.getElementById('game_alert').innerHTML="GAME OVER";
                document.getElementById('game_alert').className="alert_class_show";
                
                EndGame();
            }
            if (window.all_act_ids.length>0){
                document.getElementById(window.all_act_ids[0]).className='tail_box';
            }

            document.getElementById(window.cur_act_id).className="active_box";
            window.all_act_ids.unshift(window.cur_act_id);
           

            
            //Update Score
            if (window.cur_act_id===window.apple_id){
                window.apple_eated='yes';
                GenerateApple();
                window.score+=1;
              
                document.getElementById("score").innerHTML=window.score.toString().padStart(3, "0")
                //Increse snake speed
                if (window.snake_speed>200){
                    AddSpeed();
                }
            }
            move_complete_flag='completed';
            
        }
        
        //Update direction. Check the previous move completed 
        if((move_complete_flag==='completed')&&(input_mode==="manuel")){ 
            window.cur_dirc=dirc;
            move_complete_flag='in_progress';
        
        }
        
    }
}
function AddSpeed(){
    window.snake_speed-=25;
    clearInterval(window.var_Auto);
    window.var_Auto =setInterval(function(){  move(window.cur_dirc,"auto") },window.snake_speed);
    
}

export default NavButtons;
export {move};