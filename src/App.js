import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './components/CardComponent/Card';
import Cat1 from './components/assets/img/cat1.jpg';
import Cat2 from './components/assets/img/cat2.jpg'
import Cat3 from './components/assets/img/cat3.jpg'
import Cat4 from './components/assets/img/cat4.jpg'

function App() {
  return (
    <div className="App">
      <h1>Cat Stor</h1>
    <div className="row justify-content-center">
    <div className="col">
    <Card name="Tome" age="1" imgSrc={Cat1} imgAlt="Cat 1 image"/>
    </div>
    <div className="col">
    <Card name="Hary" age="2" imgSrc={Cat2} imgAlt="Cat 2 image"/>
    </div>
    <div className="w-100"></div>
    <div className="col">
    <Card name="Bsbs" age="3" imgSrc={Cat3} imgAlt="Cat 3 image"/>
    </div>
    <div className="col">
    <Card name="May" age="4" imgSrc={Cat4} imgAlt="Cat 4 image" />
    </div>
  </div>
    </div>
  
  );
}
/* 
    
      
      
     
*/

export default App;
