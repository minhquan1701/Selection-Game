import React, {useState} from 'react';
import Login from './views/Login';
import Home from './views/Home';
import LogoTrans from './assets/logo-career-mentoring.png';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const retreiveLoginStatus = (loginStatus) => {
    setIsLogin(loginStatus);
  }
  return (
    <>
    <div className="fixed z-20 flex items-center top-4 left-4">
      <img  className="w-24" src={LogoTrans} alt="" />
      <span className="font-sans font-bold text-green-500">Who Am I Truly?</span>
    </div>
    
    {isLogin ? <Home></Home> : <Login setIsLogin={(status) =>retreiveLoginStatus(status)}></Login>}
    </>
    

  )
  
};

export default App;
