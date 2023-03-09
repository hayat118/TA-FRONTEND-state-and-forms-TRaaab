import React from 'react';
// import questions from '../data';
import data from "../data";

import '../styles/index.css'

class Questions extends React.Component{
  constructor(props){
    super(props);
    this.state={
      answer:""
    }
  }

 answer=(q,i)=>{
   this.setState({
     answer:this.state.answer===i ? "" : i,
   })
 }






  render(){
    return(
      <>
      {
        data.map((q,i)=>{
          return (
            <>
              <div className="question">
                <div
                  key={q.toString()}
                  onClick={() => {
                    this.answer(q, i);
                  }}
                  className={i === this.state.answer ? "green " : ""}
                >
                  {q.Q}
                </div>
              </div>
              <h4 className="answer">
                {i === this.state.answer ? <p>{q.A} </p> : ""}
              </h4>
            </>
          );
        })
      }
      </>
    )
  }
}
export default Questions;

