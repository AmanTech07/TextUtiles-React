import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

function App() {
  const[myMode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  
  const showAlert = (massage, type) =>{
    setAlert({
      msg : massage,
      typ : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const modeManager = () =>{
    if(myMode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has been Enabled!", "success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(62 62 80)';
      showAlert(" Dark Mode has been Enabled!", "success");
    }
  }

  const modeBluManager = () => {
    if(myMode==='blue'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light Mode has been Enabled!", "success");
    }
    else{
      setMode('blue');
      document.body.style.backgroundColor = '#000064';
      showAlert(" Dark Mode has been Enabled!", "success");
    }
  }
  
  return (
    <>
      <Navbar title="TextUtiles" second="About Us" mode={myMode} toggleMode={modeManager} toggleBluMode={modeBluManager}/>
      <Alert alert={alert}/>
      <div className="container my-3">
            <TextForm heading="Enter your Text here to Analize" mode={myMode} alert={showAlert} />
      </div>
    </>
  );
}

export default App;
