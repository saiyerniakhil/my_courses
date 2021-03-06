import React from 'react';
import CourseCarousel from './components/CourseCarousel'
import './App.css';

const data = [
  {
      "Img":"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png",
     "Name":"PYTHON",
     "Percent":38,
     "SDate":"12/12/12",
     "EDate":"31/12/12"
  } ,   
  {
      "Img": "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png",
     "Name":"ANGULAR",
     "Percent":58,
     "SDate":"12/12/12",
     "EDate":"31/12/12"
  } ,      
  {
      "Img": "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png",
      "Name":"MYSQL",
     "Percent":51,
     "SDate":"12/12/12",
     "EDate":"31/12/12"
  } ,      
  {
      "Img": "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      "Name":"REACT",
      "Percent":83,
      "SDate":"12/12/12",
      "EDate":"31/12/12"
  } ,      
  {
      "Img": "https://cdn4.iconfinder.com/data/icons/logos-3/568/php-logo-512.png",
      "Name":"PHP",
      "Percent":0,
      "SDate":"12/12/12",
      "EDate":"31/12/12"
  } ,
  {
      "Img": "https://cdn4.iconfinder.com/data/icons/logos-3/456/nodejs-new-pantone-black-512.png",
      "Name":"NODE JS",
      "Percent":100,
      "SDate":"12/12/12",
      "EDate":"31/12/12"
  } ,       
  {
      "Img": "https://cdn4.iconfinder.com/data/icons/logos-3/504/node_js-512.png",
      "Name":"JAVA SCRIPT",
      "Percent":25,
     "SDate":"12/12/12",
     "EDate":"31/12/12"
  } ,       
  {
      "Img":"https://cdn4.iconfinder.com/data/icons/logos-3/504/Java-128.png",
     "Name":"JAVA",
     "Percent":63,
     "SDate":"12/12/12",
     "EDate":"31/12/12"
  }                    
]

const h2Style = {
    "text-align": "left" 
}

function App() {
  return (
    <div className="App">
        <h2 style={h2Style}>My Courses </h2>
        <CourseCarousel data={data}/>
    </div>
  );
}

export default App;
