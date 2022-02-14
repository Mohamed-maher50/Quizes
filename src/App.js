import { useState } from 'react';
import './App.css';
import Quiz from './Quiz/Quiz';

function App() {
  let [qustion,setqustion] = useState([
    {id:1,title:"what the result 1 + 3",answar:"4",option:[4,9,7,6],val:0,},
    {id:2,title:"what the result 2 * 3",answar:"6",option:[4,9,8,6],val:0},
    {id:3,title:"what the ruslt 30 / 3",answar:"10",option:[5,9,7,6],val:0},
    {id:4,title:"what the result 60 * 3",answar:"180",option:[160,180,190,280],val:0},
    {id:5,title:"what the result 3^2 ",answar:"9",option:[5,9,7,6],val:0},
  ]);

  let [counter,setCounter] = useState(0);
  let change =(obj)=>{
    let q = qustion;
    q[counter] = obj;
    setqustion(q);
    // console.log(qustion)

  }
  let next= () =>{
    if(counter < qustion.length-1){setCounter(counter + 1)}else{
      setCounter(counter);
      
    };
  }
  let Prev =()=>{
    if(counter > 0){setCounter(counter - 1)};
    setqustion(qustion);
   
  } 
  return (
    <div className="App">
      <Quiz changeing={change} qustions={qustion[counter]} Next={next} Prev={Prev} count={counter} dataLen={qustion.length} />
    </div>
  );
}

export default App;
