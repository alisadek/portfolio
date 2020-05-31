import React from 'react';
import './App.css';
import PageLayout from './Components/PageLayout';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
<Router>
   <PageLayout />
</Router>
  );
}

export default App;
