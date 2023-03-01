import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Quizz = () => {

  const [quizz, setQuizz] = useState()
  const { id } = useParams()


  function getQuizz() {
    axios
      .get(`https://jservice.io/api/category?id=${id}`)
      .then((res) => {
        console.log(res.data.clues)
        setQuizz(res.data.clues)
      })
  }

  useEffect(() => {
    getQuizz()
  }, [])

  if (!quizz) {
    return <p>Loading Information ...</p>
  }

  const max = quizz.length
  console.log(max)

  return (
    <>
      <div>
        {quizz.map((quizz1) => {
          return (
            <div key={quizz1.id}>
              <h3>{quizz1.question}</h3>


            <div>
            <div>
                <input type='radio' id='html' name='fav_language' value='html'></input>
                <label for="html">{quizz1.answer}</label>
              </div>

              <div>
                <input type='radio' id='html' name='fav_language' value='html'></input>
                <label for="html">{quizz[Math.floor(Math.random() * max)].answer}</label>
              </div>

              <div>
                <input type='radio' id='html' name='fav_language' value='html'></input>
                <label for="html">{quizz[Math.floor(Math.random() * max)].answer}</label>
              </div>
            </div>
          

            </div>
          )
        })}
      </div>


      {/* <div>
{(() => {
  for (let i = 0; i <= quizz.length - 1; i ++) {
     return (
      <>
      <h1>{quizz.question}</h1>
      </>
     )
  }
})}
</div> */}


    </>
  )
}


export default Quizz;