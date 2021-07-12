import './App.css';
import React, { useState } from 'react'
import HookForm from './components/HookForm'
import FormData from './components/FormData'


function App() { 
  const [state, setState] = useState({
    firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
  })
  return (
    <div className="App">
    <HookForm values={state} setValues = {setState}/>
    <FormData  data={state}/>
    </div>
  );
}

export default App;
