import "./App.css";
import React from "react";

const questions = [
  {
    title: "Какая главная задача целей в области качества ?",
      variants: ["выпускать качественную конкурентноспособную продукцию", "соблюдать требования технической документации", "обеспечить постоянное увеличение плана"],
        correct: 0,  },
  {
    title: "Что такое цели в области качества ?",
      variants: ["результат, который должен быть достигнут", "показатель для измерения деятельности процесса", "общие намерения и направления деятельности"],
        correct: 0, },
  {
    title: "Что относится к этапам менеджмента риска ?",
      variants: [  "оценка риска", "идентификация риска", "анализ риска", "все варианты верны",],
        correct: 3, },
        {
          title: "Что такое бережливое производство?",
            variants: [ "дешевое производство", "производство без потерь", "аккуратное выполнение продукции", ],
              correct: 1, },
              {
                title: "Сколько классических видов потерисогласно системе бережливое производство?",
                  variants: [ "3", "5", "7", ],
                    correct: 2, },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/4471/4471272.png" alt="" />
      <img src="https://cdn-icons-png.flaticon.com/512/1355/1355092.png" alt="" />
      <img src="https://cdn-icons-png.flaticon.com/512/4471/4471272.png" alt="" />
      <h2>
        Правильных {correct} ответа из {questions.length}
      </h2>
 <a href="/">
        <button>Попробовать снова</button>
</a>
    </div>
  );
}

function Game({curentQuestions, onClickVariant, step}) {
  const percent = Math.round (step / questions.length * 100) ;

  return (
    <>
      <div className="progress">
          <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
            <h1>{curentQuestions.title}</h1>
      <ul>
       {
        curentQuestions.variants.map((el, index) => {
          return (
              <li onClick={() => onClickVariant(index)}  key  = {index}>
                {el}
          </li>
          )
        })
       }
      </ul>
    </>
  );   }   

function App() {


const [step, setStep ] = React.useState(0);

const [correct, setCorrect] = React.useState(0);

const curentQuestions = questions[step] ;

const onClickVariant = (index) => {

  if(index === curentQuestions.correct){
      setCorrect (correct + 1) ;
  }
        setStep(step + 1);

}

  return (
    <div className="App">

      { step < questions.length ? 
      
      (<Game curentQuestions = {curentQuestions} onClickVariant={onClickVariant} step = {step}/>):

      (<Result correct = {correct}/> )
      }
    </div>
  );
}

export default App;
