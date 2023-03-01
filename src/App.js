import { useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Quizz from './components/Quizz';

import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PropagateLoader from "react-spinners/PropagateLoader";



import './index.css';
import Home from './components/Home';

function App() {
  const [questionArr, setQuestionArr] = useState([])


  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 4000)
    
  // }, [])


  function getData() {
    axios
    .get(`https://jservice.io/api/categories?count=9`)
    .then((res) => {
      console.log(res.data)
      setQuestionArr(res.data)
    })

  }
  return (
<>

{/* <div className='loading'>
{ loading ? (
 <PropagateLoader color={'#000000'} loading={loading} size={15} />
) : (

<DisplayQuestions questionArr={questionArr} getData={getData} setQuestionArr={setQuestionArr} />  
 )}
</div> */}

<main>
<Routes>
<Route path='/' element={<Home questionArr={questionArr} getData={getData} setQuestionArr={setQuestionArr}/>}/>
<Route path='/quizz/:id' element={<Quizz/>}></Route>
</Routes>
</main>




</>
  );
}



export default App;
