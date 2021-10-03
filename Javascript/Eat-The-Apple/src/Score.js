
import Alert from 'react-bootstrap/Alert';
import './index.css';
function ScoreBoard(){
    return(
        <Alert variant="success" id ='score_bord'>
            <h1 className='ScoreHead'>#SCORE</h1>
            <hr />
                <p id="score" className='ScoreValue'>000</p>
                <p id = "timer">00:00</p>     
        </Alert>
    );

}
export default ScoreBoard;