import React from 'react';

export default function ReactComponent() {
  const [c, setC] = React.useState(0);

  return <div>
    <h1>This is React button and on click it only updates own state</h1>
    <button onClick={() => setC(c + 1)}>React {c}</button>
  </div>
}