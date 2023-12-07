
import './App.css';
import Start from './components/Start';
import Question from './components/Question';
import { useState } from 'react';
import data from './data/quiz.json';
import End from './components/End';

const arrayRandom = ([...arr]) => {

  let x = arr.length;
  while(x > 0){
    const i = Math.floor(Math.random() * x--);
    [arr[x] , arr[i]] = [arr[i] , arr[x]]; 
  }
  return arr;
}

const resultArray = arrayRandom(data.data).slice(0,5);

let interval;
function App() {
  const [step , setStep] = useState(1);
  const [activeQuestion , setActiveQuestion] = useState(0);
  const [answer , setAnswer] = useState([]);
  const [time , setTime] = useState(0);

  const quizStartHandle = () => {

    setStep(2);
    interval = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    },1000)
  }

// console.log(time)

  return (
    <div className="App">
     {step === 1 && <Start onQuizStart={quizStartHandle}/>}
     {step === 2 && <Question data={resultArray[activeQuestion]}
                              onAnswerUpdate={setAnswer}
                              activeQuestion={activeQuestion}
                              numberOfQuestion={resultArray.length}
                              onSetActiveQuestion={setActiveQuestion}
                              time={time}
                              />}
      {step === 3 && <End/>}
    </div>
  );
}

export default App;
