import Row from './Row'


function Grid(){
    var grid_comp=[];
    for (var i=1; i<=window.grid_order; i++){        
        grid_comp.push(<Row row_count={i} />);
    }
    return(
        
        <div id='grid_el'> {grid_comp} </div>
    
    );
}
export default  Grid;