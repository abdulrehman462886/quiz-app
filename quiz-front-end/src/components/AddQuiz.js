import React from "react";

export default function AddQuiz(props) {
  return (
    <>
      <div
        className="card my-5 container"
        style={{
          width: "50rem",
          height: "50rem",
          backgroundColor: "#F0F8FF",
          fontFamily: "Arial",
        }}
      >
        <div className="card-body">
          <div className="container">
            <button
              type="button"
              className="btn btn-primary my-5"
              onClick={props.boolean ? props.trueFalse : props.mcq}
            >
              <strong>{props.boolean ? `T-F` : `Mcq`}</strong>
            </button>
            <div className="container my-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                <strong>Enter Problem Statment?</strong>
              </label>
              <input
                value={props.inputdata.statement}
                onChange={props.changehandle}
                autoComplete="off"
                type="text"
                name="statement"
                className="form-control"
              />
            </div>
            <div className="container my-3">
              <input type="radio" id="text" name="text" value={props.inputdata.a} onChange={props.updateoption} /> <label htmlFor="exampleFormControlInput1" className="form-label">
                <strong  hidden={props.boolean}>Option 1</strong>
              </label>
              <input
                value={props.inputdata.a}
                onChange={props.changehandle}
                type="a"
                name="a"
                autoComplete="off"
                className="form-control"
                id="exampleFormControlInput1"
                hidden={props.boolean}
              />
            </div>
            <div className="container my-3">
            <input type="radio" id="text" name="text" value={props.inputdata.b} onChange={props.updateoption}/> <label htmlFor="exampleFormControlInput1" className="form-label">
                <strong  hidden={props.boolean}>Option 2</strong>
              </label>
              <input
                value={props.inputdata.b}
                onChange={props.changehandle}
                type="text"
                autoComplete="off"
                name="b"
                className="form-control"
                id="exampleFormControlInput1"
                hidden={props.boolean}
              />
            </div>
            <div className="container my-3">
            <input type="radio"  id="text" name="text" value={props.inputdata.c} onChange={props.updateoption}/> <label htmlFor="exampleFormControlInput1" className="form-label">
                <strong  hidden={props.boolean}>Option 3</strong>
              </label>
              <input
                value={props.inputdata.c}
                onChange={props.changehandle}
                type="text"
                name="c"
                autoComplete="off"
                className="form-control"
                id="exampleFormControlInput1"
                hidden={props.boolean}
              />
            </div>
            <div className="container my-3">
            <input type="radio"  id="text" name="text" value={props.inputdata.d} onChange={props.updateoption}/> <label htmlFor="exampleFormControlInput1" className="form-label">
                <strong  hidden={props.boolean}>Option 4</strong>
              </label>
              <input
                value={props.inputdata.d}
                onChange={props.changehandle}
                type="text"
                name="d"
                autoComplete="off"
                className="form-control"
                id="exampleFormControlInput1"
                hidden={props.boolean}
              />
            </div>
            <div className="container my-3"   hidden={!props.boolean}>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                <strong>Correct Answer</strong>
              </label>
              <input
                value={props.inputdata.e}
                onChange={props.changehandle}
                type="text"
                name="e"
                autoComplete="off"
                className="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <button
              disabled={
                props.inputdata.statement.length === 0 ||
                props.inputdata.a.length === props.addQbutton ||
                props.inputdata.b.length === props.addQbutton ||
                props.inputdata.c.length === props.addQbutton ||
                props.inputdata.d.length === props.addQbutton
                // props.inputdata.e.length === 0
              }
              type="button"
              onClick={props.addrecordhandle}
              className="container btn btn-primary my-5"
            >
              Add Question
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
