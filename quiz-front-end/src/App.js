import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddQuiz from "./components/AddQuiz";
import QuizHome from "./components/QuizHome";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";

const App = () => {
  const [boolean, setboolean] = useState(false);
  const [scorebutton, setScorebutton] = useState(true);
  const [bol1, setBol1] = useState(true);
  const [timerboolean, setTimerboolean] = useState(true)
  const [inputarr, setInputarr] = useState([]);
  const [option, setOption] = useState("null");
  const [count, setCount] = useState(0);
  const [score, setScore] = useState();
  const [answesave, setAnsweSave] = useState(1);
  const [addQbutton, setaddQbutton] = useState(0);
  const [qindex, setQindex] = useState(0);
  const [inputdata, setInputdata] = useState({statement: "", a: "", b: "", c: "", d: "", e: ""});
  let { statement, a, b, c, d, e } = inputdata;
  const [delay, setDelay] = useState("180");
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  const [correctans, setCorrectans] = useState()
  const [showans, setShowans] = useState(true)
  const [radiobutton, setRadiobutton] =useState(null)
  const [array,setArray] = useState([]);
  const [data,setData] = useState(inputarr)


  const updateoption = (event) => {
    setOption(event.target.value);
    setCorrectans(event.target.value)
  };

    useEffect(() => {
      setRadiobutton()
      if(boolean){
      const timer = setInterval(() => {
        setDelay(delay - 1);
      }, 1000);
      if (delay === 0) {
        clearInterval(timer);
        setScorebutton(false);
        setTimerboolean(true);
        setQindex()}
      return () => {clearInterval(timer);};
    }});

  const startQuiz = () => {
    getData();
    setboolean(true);
    setTimerboolean(false)
  };
  const trueFalse = () => {
    setboolean(false);
    setaddQbutton(0);
  };
  const mcq = () => {
    setboolean(true);
    setaddQbutton(1);
  };

  const addrecordhandle = async () => {
    setRadiobutton(false)
    alert("Question added successfully!")
    let e = correctans
    setInputarr([...inputarr, { statement, a, b, c, d, e }]);
    setInputdata({ statement: "", a: "", b: "", c: "", d: "", e: "" });
    fetch("http://localhost:5000/submit", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({statement, a, b, c, d, e}),
    }).then((res) => res.json())
  };

  const getData = async () => {
    let result = await fetch("http://localhost:5000/get");
    result = await result.json();
    let inputarr = result;
    setInputarr([...inputarr]);
  };
 
  const onradioclick = () => {
    setBol1(false);
  };
  
  const changehandle = (event) => {
    setInputdata({ ...inputdata, [event.target.name]: event.target.value });
  };
  const savehandle = (value, index) => {
    setBol1(true);
    setQindex(qindex + 1);
    setAnsweSave(answesave + 1);
    if (answesave === inputarr.length) {
      setScorebutton(false);
      setBol1(true);
      setTimerboolean(true)
    }
    setArray([...array,{option}])

    if (
      option === value
    ) {
      setCount(count + 1);
    }

  };
  const result = (count) => {
    setScore(count);
    setShowans(false)
    let data1 = []
    setData(data1)
    for( var i = 0 ; i< inputarr.length ; i++){
      data1.push({"value": inputarr[i], "selected": array[i]})
    }
  }
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            exact path="/add"
            element={
              <AddQuiz
                inputdata={inputdata}
                changehandle={changehandle}
                addrecordhandle={addrecordhandle}
                trueFalse={trueFalse}
                mcq={mcq}
                boolean={boolean}
                addQbutton={addQbutton}
                updateoption={updateoption}
                radiobutton={radiobutton}
              />
            }
          />
          <Route
            exact path="/"
            element={[<h1 key={qindex+1} style={{fontFamily:'fantasy' ,textAlign: 'center', marginTop:'50px'}} hidden={timerboolean}>{minutes}:{seconds}</h1>,
              <QuizHome
                key={qindex}
                inputarr={inputarr}  startQuiz={startQuiz} updateoption={updateoption}
                savehandle={savehandle}
                showans={showans}
                count={count}
                result={result}
                score={score}
                qindex={qindex}
                scorebutton={scorebutton}
                option={option}
                bol1={bol1}
                onradioclick={onradioclick}
                boolean={boolean}
                array={array}
                data={data}
              />
            ]}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default App;
