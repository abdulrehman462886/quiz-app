
export default function QuizHome(props) {
  return (
    <>
    <div className="card my-5 container" style={{backgroundColor:'#F0F8FF' , fontFamily:"Arial"}}>
    <div className="card-body">
    <div  className="container">
    <div className="d-flex justify-content-center">
    <button type="button" className="btn btn-primary my-3"  onClick={() => {props.startQuiz()}} hidden={props.boolean}>Start Quiz</button>
    </div>
    {props.inputarr.map((value, index) => {
             if(value.a.length === 0){
              return (
              <div key={index + 1}><br></br>
              <h3><strong>{index + 1}: </strong>
                <strong>{value.statement}</strong></h3>
                <h5><input type="radio" id="text"  name="text" value="True" onChange={props.updateoption} onClick={props.onradioclick}/> True<br></br>
                <input type="radio" id="text" name="text" value="False" onChange={props.updateoption} onClick={props.onradioclick}/> False<br></br></h5>
                <button type="button"  className="btn btn-primary my-5" onClick={() => {props.savehandle(value.e,index)}} disabled={props.bol1}>Save</button>
              </div>
            );}
            else if(value.a.length !== 0){
            return (
              <div key={index + 1}><br></br>
              <h3><strong>{index + 1}: </strong>
                <strong>{value.statement}</strong></h3>
                <h5><strong>A</strong> <input type="radio" id="text"  name="text" value={value.a} onChange={props.updateoption} onClick={props.onradioclick}/> {value.a}<br></br>
                <strong>B</strong> <input type="radio" id="text" name="text" value={value.b} onChange={props.updateoption} onClick={props.onradioclick}/> {value.b}<br></br>
                <strong>C</strong> <input type="radio" id="text" name="text" value={value.c} onChange={props.updateoption} onClick={props.onradioclick}/> {value.c}<br></br>
                <strong>D</strong> <input type="radio" id="text" name="text" value={value.d} onChange={props.updateoption} onClick={props.onradioclick}/> {value.d}<br></br></h5>
                <button  type="button" className="btn btn-primary my-5" onClick={() => {props.savehandle(value.e,index)}} disabled={props.bol1}>Save</button>
              </div>
            )}
    })[props.qindex]}
          <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-primary my-3" onClick={() => {props.result(props.count)}} hidden={props.scorebutton}>Show Score</button>
          </div>    
          <h1 style={{fontFamily:'fantasy' ,textAlign: 'center'}} hidden={props.scorebutton}>{props.score}/10</h1>
    </div>
    </div>
    </div>
    </>
  )
}
