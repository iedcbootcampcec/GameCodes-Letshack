import { GoManuel } from "./Auto";

function BtnStop(){
    return(
        <span>
        <button type="button" class="btn btn-outline-danger"  id="btn_Stop" onClick={()=> EndGame()} >■</button>
        </span>
    )
}
function EndGame(){
    let el=document.getElementById("btn_Auto");
    document.getElementById("btn_game").innerHTML="New Game";

        //Remove apple
        clearInterval(window.var_Blink);
        if (document.getElementById(window.apple_id).className!=="active_box"){
        document.getElementById(window.apple_id).className="box";
        window.apple_id="";
        }

        // Stop Timer
        clearInterval(window.var_Timer);

        GoManuel(el);
        document.getElementById("Ob_pattern").disabled = false;
        document.getElementById("selectedDifficulty").disabled = false;
        document.getElementById("btn_Auto").disabled = true;
        document.getElementById("btn_Stop").disabled = true;
        if (window.pause_status==='On'){
        document.getElementById('game_alert').innerHTML="";
        document.getElementById('game_alert').className="alert_class_hidden";}
        window.pause_status='On'
        
}
export default BtnStop;
export {EndGame}