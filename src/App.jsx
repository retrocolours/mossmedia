// import './App.scss';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// // src/App.jsx
// import React from 'react';
// import Header from "./components/Header/Header";

// function App() {
//   return (
//     <div>
//       <Header />
//       <main>
//         <h2>This is the main content section</h2>
//         <p>Start building the rest of your page here!</p>
//       </main>
//     </div>
//   );
// }

// export default App;


import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

