import React, {useState} from 'react';
import Loading from '../components/Loading';
import MainGame from '../components/MainGame';

const Home = () => {
   
  const [isLoaded, setisLoaded] = useState(false); 
  const receiveLoadStatus = (status) => {
    setisLoaded(status);
  }
  
  return (
    <div className='w-screen h-screen'>
      {!isLoaded ? <Loading receiveLoadStatus={(status) =>receiveLoadStatus(status)}></Loading> : <MainGame></MainGame>}

     
    </div>
  );   
};

export default Home;
