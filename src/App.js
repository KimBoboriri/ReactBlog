import { useState } from 'react';
import './App.css';

function App() {
  let [titleTxt, setTitleTxt]= useState(['기요미 낫또','이쁜 콜라','배그는 재미떠'])
  let [title, setTitle] = useState(0);
  let [inputTxt, setInputTxt] = useState('')
  let [ddabong, setDdabong] = useState(0)

  return (

    <div>
        <div className="App">
            <div className="black-nav">
              <div>블로그</div>
            </div>
            {
              titleTxt.map(function(a,i){
                return(
              <div className='list' key = {i}>
                <h4 onClick={()=>{setDdabong(ddabong + 1); setTitle(i)}}>{titleTxt[i]}<span>👍</span>{ddabong}</h4>
                <button onClick={()=>{
                  let copy = [...titleTxt];
                  copy.splice(i,1);
                  setTitleTxt(copy)

                }}>삭제</button>    
              </div>)  
                })
             }

               <Modal titleTxt = {titleTxt} title = {title} ></Modal>
              
                
        </div>
        <input onChange={(e)=>{setInputTxt(e.target.value)}}/>
        <button onClick={()=>{
          let copy = [...titleTxt];
          copy.unshift(inputTxt);
          setTitleTxt(copy)
        }}>글발행</button>
    </div>
  )
}

function Modal(props){
  return (
    <div className='modal'>
      <h4>{props.titleTxt[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )

}
export default App;
