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
              <h6><strong style={{fontSize:"20px"}}>{index + 1}: </strong>
                <strong style={{fontSize:"20px"}}>{value.statement}</strong></h6>
                <h5><input type="radio" id="textTrue"  name="text" value="True" onChange={props.updateoption} onClick={props.onradioclick}/> <label htmlFor="textTrue">True</label><br></br>
                <input type="radio" id="textFalse" name="text" value="False" onChange={props.updateoption} onClick={props.onradioclick}/> <label htmlFor="textFalse">False</label><br></br></h5>
                <button type="button"  className="btn btn-primary my-5" onClick={() => {props.savehandle(value.e,index)}} disabled={props.bol1}>Save</button>
              </div>
            );}
            else if(value.a.length !== 0){
            return (
              <div key={index + 1}><br></br>
              <h4><strong>{index + 1}: </strong>
                <strong>{value.statement}</strong></h4>
                <h5><strong>a:</strong> <input type="radio" id="textA"  name="text" value={value.a} onChange={props.updateoption} onClick={props.onradioclick}/> <label htmlFor="textA">{value.a}</label><br></br>
                <strong>b:</strong> <input type="radio" id="textB" name="text" value={value.b} onChange={props.updateoption} onClick={props.onradioclick}/> <label htmlFor="textB">{value.b}</label><br></br>
                <strong>c:</strong> <input type="radio" id="textC" name="text" value={value.c} onChange={props.updateoption} onClick={props.onradioclick}/> <label htmlFor="textC">{value.c}</label><br></br>
                <strong>d:</strong> <input type="radio" id="textD" name="text" value={value.d} onChange={props.updateoption} onClick={props.onradioclick}/> <label htmlFor="textD">{value.d}</label><br></br></h5>
                <button  type="button" className="btn btn-primary my-5" onClick={() => {props.savehandle(value.e,index)}} disabled={props.bol1}>Save</button>
              </div>
            )}
    })[props.qindex]}
          <div className="d-flex justify-content-center">
          <button type="button" className="btn btn-primary my-3" onClick={() => {props.result(props.count)}} hidden={props.scorebutton}>Show Score</button>
          </div>    
          <h1 style={{fontFamily:'fantasy' ,textAlign: 'center'}} hidden={props.scorebutton}>{props.score}/{props.inputarr.length}</h1>
          <hr></hr>
    </div>
    <div hidden={props.showans}>
    <div className="container">
    {props.data.map((obj, index) =>{
           if(obj.value.a.length === 0){
              return (
              <div key={index + 1}><br></br>
              <h5><strong>{index + 1}: </strong>
                <strong>{obj.value.statement}</strong></h5>
                 <h5><label htmlFor="textTrue">True</label><br></br>
           <label htmlFor="textFalse">False</label><br></br>
           <strong> <span>&#8594;</span> Correct: </strong> <label style={{color:"green" , fontFamily:"fantasy"}}>{obj.value.e}</label><br></br> 
                <strong> <span>&#8594;</span> Selected: </strong> <label style={{color: obj.value.e !== obj.selected.option ? "red" : "green", fontFamily:"fantasy"}}>{obj.selected.option}</label></h5>
              <hr></hr>
              </div>
              )}
            else if(obj.value.a.length !== 0){
            return (
              <div key={index + 1}><br></br>
              <h5><strong>{index + 1}: </strong>
                <strong>{obj.value.statement}</strong></h5>
                <h5><strong>a:</strong>  <label htmlFor="textA">{obj.value.a}</label><br></br>
                <strong>b:</strong> <label htmlFor="textB">{obj.value.b}</label><br></br>
                <strong>c:</strong> <label htmlFor="textC">{obj.value.c}</label><br></br>
                <strong>d:</strong> <label htmlFor="textD">{obj.value.d}</label><br></br>
                <strong> <span>&#8594;</span> Correct: </strong> <label style={{color:"green" , fontFamily:"fantasy"}}>{obj.value.e}</label><br></br> 
                <strong> <span>&#8594;</span> Selected: </strong> <label style={{color: obj.value.e !== obj.selected.option ? "red" : "green", fontFamily:"fantasy"}}>{obj.selected.option}</label></h5>
                <hr></hr>
              </div>
            )}}
          )} 
        </div>
      </div>
    </div>
    </div>
    </>
  )
}