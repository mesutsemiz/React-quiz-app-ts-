import * as React from 'react';
import './style.css';
import QuestionCard from "./components/QuestionCard"

export default function App() {

  const startTrivia =async ()=>{
    
  }
  const checkAnswer =(e:React.MouseEvent<HTMLButtonElement>)=>{

  }
  const nextQuestion =(e)=>{

  }
  return (
    <div className="App">
     <h1>REACT QUIZ</h1>
     <button className="start" onClick={startTrivia}>Start</button>
     <p className="score">Score:</p>
     <p className="k">LoadingQuestions...</p>

     <QuestionCard/>
    </div>
  );
}
