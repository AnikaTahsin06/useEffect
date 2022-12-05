import { useState, useEffect } from "react";
function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount1((count1) => count1 + 1);
    }, 1000);
  });

  useEffect(() => {
    setTimeout(() => {
      setCount2((count2) => count2 + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    setCalculation(() => count3 * 2);
  }, [count3]);

  return (
    <div className="App">
      <h1>I've rendered {count1} times!</h1>
      <h1>I've rendered {count2} times!</h1>
      <p>Count: {count3}</p>
      <button onClick={() => setCount3((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </div>
  );
}

export default App;
