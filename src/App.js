import './App.css';
import burger from './logos/img/burger.png';


function App() {
  return (
    <center>
    <div >
     <header>
       <img src= {burger}alt=""/>
      
        <div className="button">
      <button type="button" onClick>REALIZA TU PEDIDO</button>
        </div>
      </header>
    </div>
    </center>
  );
}

export default App;
