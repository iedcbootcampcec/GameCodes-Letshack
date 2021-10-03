
function Row(props){
    var row_comp=[];
    for (var j=1; j<=window.grid_order; j++){
        let box_id='id'+("0" + props.row_count).slice(-2)+'_'+("0" +(j)).slice(-2);
        row_comp.push(<div className="box" id={box_id}></div>);
    }
   
    return (   
        <div> {row_comp}</div> 
    );
    
}

export default  Row;