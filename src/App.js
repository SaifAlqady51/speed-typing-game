import './App.css';

import useContext from './useContext'

function App() {

  const  {text,inputRef,wordCount,isTimeRunning,timeRemaining,handleChange,startClock} = useContext(30)

  

  
  return (
      <div>
          <h1>How fast do you type?</h1>
          <textarea
              ref={inputRef}
              disabled={!isTimeRunning}
              onChange={handleChange}
              value={text}
          />
          <h4>Time remaining: {timeRemaining}</h4>
          <button 
              disabled={isTimeRunning} 
              onClick={startClock}
          >Start</button>
          <h1>Word count: {wordCount}</h1>
      </div>
  )
}

export default App
