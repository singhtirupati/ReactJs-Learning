import { useState } from 'react';
import './App.css';

function App() {
  // let [counter, setCounter] = useState(0);
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    if (counter < 20) {
    // setCounter(counter + 1);
    //counter = counter + 1

    // This will increase counter by 1 only as all these will be processed in batch as per Fiber concept in React.
    // Multiple state updates inside the same event loop are batched together and the same value of counter is used in all four calls..
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);


    // To increase the value 4 time, use the functional form of setState, which always uses the latest state.
    // Here, the preCounter will get the most recent value of counter.
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
  }
    else {
      console.log('Max counter value is 20');
    }
  }

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    else {
      console.log('Min counter value is 0');
    }
  }

  return (
    <>
      <h1>React hooks</h1>
      <p>Counter value: {counter}</p>
      <button onClick={increaseCounter}>Increase counter</button><br></br>
      <button onClick={decreaseCounter}>Decrease counter</button>
    </>
  );
}

export default App;