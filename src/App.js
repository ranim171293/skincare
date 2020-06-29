import React, { Suspense } from 'react';
// import logo from './logo.svg';
// import Landing from './Component/Landing';
import './App.css';
const Landing = React.lazy(() => import('./Component/Landing'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Suspense fallback={<div>Loading...</div>}>
      <Landing />
      </Suspense>
      </header>
    </div>
  );
}

export default App;
