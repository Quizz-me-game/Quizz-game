import React from "react";
import { useEffect } from "react";
import CarouselCategory from "./CarouselCategory";


const Home = ({questionArr, setQuestionArr, getData}) => {

    useEffect(() => {
        getData()
    },[])

    if(!questionArr) {
        return <p>Loading Information ...</p>
    }

return (
    <>
    <div  className="home-text">
    <div>
    <h1>Test Your Knowledge with this quizz game</h1>
    <p className="home-parag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
           the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
           type and scrambled it to make a type specimen book. It has survived not only five centuries, but 
           also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
           1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    </div>

    <CarouselCategory questionArr={questionArr}/>  
      
    </>
)
}

export default Home;