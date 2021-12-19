import './App.css';
import CountDownTimer from './CountDownTimer';

function App() {
  const hoursMinSecs = {hours:2112, minutes: 17, seconds: 10}
  return (
    <div className='container'>
   <div className='timer'>
      <CountDownTimer hoursMinSecs={hoursMinSecs}/>
    </div>
    </div>
 
  );
}

export default App;
