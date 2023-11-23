import logo from './logo.svg';
import './App.css';
import Start from './components/Start';
import Question from './components/Question';
import { useState } from 'react';
import data from './data/quiz.json';

const arrayRandom = ([...arr]) => {

  let x = arr.length;
  while(x > 0){
    const i = Math.floor(Math.random() * x--);
    [arr[x] , arr[i]] = [arr[i] , arr[x]]; 
  }
  return arr;
}

const resultArray = arrayRandom(data.data)

function App() {
  const [step , setStep] = useState(1);
  const [activeQuestion , setActiveQuestion] = useState(0)

  const quizStartHandle = () => {

    setStep(2);
  }

  return (
    <div className="App">
     {console.log(resultArray[1])}
     {step === 1 && <Start onQuizStart={quizStartHandle}/>}
     {step === 2 && <Question data={resultArray[activeQuestion]}
                              activeQuestion={activeQuestion}
                              onSetActiveQuestion={setActiveQuestion}/>}
    </div>
  );
}

export default App;
