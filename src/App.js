import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import Alert from './components/Alert';

function App() {
  const [darkMode , setDarkMode] = useState(false)
  const [alert , setAlert] = useState(null)

  const showAlert = (type,message)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleTheme = (color)=>{
    document.getElementsByTagName('body')[0].style.backgroundColor=color
  }

  const toggleMode = ()=>{
    if(darkMode===true){
      setDarkMode(false)
      document.getElementsByTagName('body')[0].style.backgroundColor='azure'
      document.getElementsByTagName('body')[0].style.color='black'
      showAlert('success','Light mode is enabled')
    }else{
      setDarkMode(true)
      document.getElementsByTagName('body')[0].style.backgroundColor='#3b3b3b'
      document.getElementsByTagName('body')[0].style.color='white'
      showAlert('success','Dark mode is enabled')
    }
  }
  return (
    <>
    <Navbar title="TextUtils" about="About" mode={darkMode} changeTheme={toggleMode} changeCustomTheme={toggleTheme} />
    <Alert alert={alert}/>
    <TextForm heading="Enter the text here" mode={darkMode} showAlert={showAlert} />
    </>
  );
}

export default App;
