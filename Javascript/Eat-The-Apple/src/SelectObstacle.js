import './index.css'
const obstacle_pattern1=["id10_09","id10_10","id10_11","id10_12","id11_09","id11_10","id11_11","id11_12","id01_01","id01_02","id01_03","id02_01","id03_01","id18_01","id19_01","id20_01","id20_02","id20_03","id20_18","id20_19","id20_20","id19_20","id18_20","id03_20","id02_20","id01_20","id01_18","id01_19"];
const obstacle_pattern2=["id10_10","id10_11","id11_10","id11_11","id01_10","id01_11","id01_04","id01_05","id01_16","id01_17","id20_10","id20_11","id20_04","id20_05","id20_16","id20_17","id04_01","id05_01","id10_01","id11_01","id16_01","id17_01","id04_20","id05_20","id10_20","id11_20","id16_20","id17_20"];
const obstacle_pattern3=["id10_10","id10_11","id11_10","id11_11","id10_03","id10_04","id10_05","id10_06","id10_07","id11_03","id11_04","id11_05","id11_06","id11_07","id10_14","id10_15","id10_16","id10_17","id10_18","id11_14","id11_15","id11_16","id11_17","id11_18","id03_10","id04_10","id05_10","id06_10","id07_10","id03_11","id04_11","id05_11","id06_11","id07_11","id14_10","id15_10","id16_10","id17_10","id18_10","id14_11","id15_11","id16_11","id17_11","id18_11","id03_03","id03_04","id04_03","id04_04","id03_17","id03_18","id04_17","id04_18","id17_03","id17_04","id18_03","id18_04","id17_17","id17_18","id18_17","id18_18"];
const obstacle_pattern4=["id01_01","id01_02","id01_03","id01_04","id01_05","id01_06","id01_07","id01_08","id01_09","id01_10","id01_11","id01_12","id01_13","id01_14","id01_15","id01_16","id01_17","id01_18","id01_19","id01_20"
,"id20_01","id20_02","id20_03","id20_04","id20_05","id20_06","id20_07","id20_08","id20_09","id20_10","id20_11","id20_12","id20_13","id20_14","id20_15","id20_16","id20_17","id20_18","id20_19","id20_20"
,"id02_01","id03_01","id04_01","id05_01","id06_01","id07_01","id08_01","id09_01","id10_01","id11_01","id12_01","id13_01","id14_01","id15_01","id16_01","id17_01","id18_01","id19_01"
,"id02_20","id03_20","id04_20","id05_20","id06_20","id07_20","id08_20","id09_20","id10_20","id11_20","id12_20","id13_20","id14_20","id15_20","id16_20","id17_20","id18_20","id19_20"]
const obstacle_pattern5=["id01_01","id01_02","id01_03","id01_04","id01_05","id01_06","id01_07","id01_08","id01_09","id01_10","id01_11","id01_12","id01_13","id01_14","id01_15","id01_16","id01_17","id01_18","id01_19","id01_20"
,"id20_01","id20_02","id20_03","id20_04","id20_05","id20_06","id20_07","id20_08","id20_09","id20_10","id20_11","id20_12","id20_13","id20_14","id20_15","id20_16","id20_17","id20_18","id20_19","id20_20"]


function Obstacle(){
    return (
        <div>
            <br></br>
            <label for="Ob_pattern" className="Obstacle_lbl">Choose an Obstacle Pattern</label>
            <select id="Ob_pattern" className="btn btn-outline-info btn-rounded waves-effect" onChange={()=>ChangeObstacle(document.getElementById("Ob_pattern").value)}>
                <option className="btn btn-outline-secondary btn-rounded waves-effect" value="None">--None--</option>
                <option className="btn-outline-secondary" value="Pattern1">Pattern 1</option>
                <option className="btn-outline-secondary" value="Pattern2">Pattern 2</option>
                <option className="btn-outline-secondary" value="Pattern3">Pattern 3</option>
                <option className="btn-outline-secondary" value="Pattern4">Pattern 4</option>
                <option className="btn-outline-secondary" value="Pattern5">Pattern 5</option>
            </select>
            <label for="difficulty" className="Obstacle_lbl text-warning">Choose a difficulty level</label>
            <select id="selectedDifficulty" className="btn btn-outline-warning btn-rounded waves-effect" onChange={()=>changeDifficulty(document.getElementById("selectedDifficulty").value)}>
                <option className="btn btn-outline-secondary btn-rounded waves-effect" value="None">--None--</option>
                <option className="btn-outline-secondary" value="Easy">Easy</option>
                <option className="btn-outline-secondary" value="Medium">Medium</option>
                <option className="btn-outline-secondary" value="Hard">Hard</option>
                
            </select>
         </div>
    );
}
function ChangeObstacle(pattern){
    ///////////Reset Display///////////
    document.getElementById('game_alert').innerHTML="";
    document.getElementById('game_alert').className="alert_class_hidden";
    document.getElementById("score").innerHTML="000";
    document.getElementById("timer").innerHTML=("00:00");
    for (let id of window.all_act_ids){
        document.getElementById(id).className="box";
    }
    for (let id of window.obstacle_pattern){
        document.getElementById(id).className="box";
    }

    ///////////////////////////////////
 
    switch (pattern) {
        case 'Pattern1':
            window.obstacle_pattern=obstacle_pattern1;
            break;
        case 'Pattern2':
            window.obstacle_pattern=obstacle_pattern2;
            break;
        case 'Pattern3':
            window.obstacle_pattern=obstacle_pattern3;
            break;
        case 'Pattern4':
            window.obstacle_pattern=obstacle_pattern4;
            break;
        case 'Pattern5':
            window.obstacle_pattern=obstacle_pattern5;
            break;
        default:
            window.obstacle_pattern=[];
    }
    
    for (let id of window.obstacle_pattern){
        document.getElementById(id).className="obstacle_box";
    }
}

function changeDifficulty(difficulty){
    ///////////Reset Display///////////
    document.getElementById('game_alert').innerHTML="";
    document.getElementById('game_alert').className="alert_class_hidden";
    document.getElementById("score").innerHTML="000";
    document.getElementById("timer").innerHTML=("00:00");
    for (let id of window.all_act_ids){
        document.getElementById(id).className="box";
    }
    

    switch (difficulty) {
        case 'Easy':
            window.snake_speed=500;
            break;
        case 'Medium':
            window.snake_speed=250;
            break;
        case 'Hard':
            window.snake_speed=150;
            break;
        default:
            window.snake_speed=500;
    }
    
}


export default Obstacle;