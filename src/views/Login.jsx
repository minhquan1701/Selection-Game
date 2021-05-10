import React, {useState} from 'react'
import Button from "@material-tailwind/react/Button";
import InputIcon from "@material-tailwind/react/InputIcon";
import Dropdown from '../components/Dropdown';
import Icon from "@material-tailwind/react/Icon";
import axios from 'axios'
import peterpan from '../assets/peter-pan.png';
import Alert from "@material-tailwind/react/Alert";


const Login = ({setIsLogin}) => {
    const [userName, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [campus, setCampus] = useState("Select Your Campus");
    const [error, setError] = useState(null);
  
    const onSelectHandler = (e) => {
    e.preventDefault();
      

    if (e.target.nodeName === 'A') {
      setCampus(e.target.innerText)
    }else{
      setError("Please choose your campus");
    };
  
    };
  


    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;
        setError(null);
        if (name === 'userName') {
          setUsername(value);
          
        }
        else if (name === 'email') {
          setEmail(value);
          
        }


      };

    const isEmtpy = (email, userName, campus) =>{
        if (!email || !userName || campus ==="Select Your Campus") {
          setError("No field is empty");
          return true;
        }else{
          setError(null);
          return false;
        }
    }

    
    const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(campus);
    console.log(userName);
    console.log(email);
    let checkEmpty = await isEmtpy(email, userName, campus);
    if (!checkEmpty) {
      try {
      const res= await axios.post('./.netlify/functions/addUser', {
        userName, email, campus
      })
    if (res.status === 200){
      setIsLogin(true);
    }else{
      setError("Sorry! Something went wrong with the server")
    }
    }
    catch (err) {
      console.error(err);
    }
    }

    
  };

    return (
    <div className='relative grid w-full h-screen overflow-x-hidden font-sans place-items-center'>
       <div className='relative z-10 flex flex-col items-center mb-24 '>
          <img className='relative block object-cover w-72 img-hero' src={peterpan} alt=""/>
          
           <h1 className= 'relative hero-title my-8  font-bold text-[#303B16] sm:text-5xl'> 
          Who Am I Truly?
        </h1>
        {error && <Alert style={{width: '100%'}} color="red">{error}</Alert>}
          <form onSubmit={(e) => handleSubmit(e )} className={'w-full max-w-[400px]'}>
          <div className='mb-6 '> 
               <InputIcon
      type="text"
      color="lightGreen"
      size="regular"
      name='userName'
      outline={true}
      placeholder="Your Name"
      iconFamily="material-icons"
      iconName="person"
      onChange = {e => onChangeHandler(e)}
    />
          </div>
          <div className='mb-6 '> 
               <InputIcon
      type="text"
      color="lightGreen"
      size="regular"
      outline={true}
      name='email'
      type='email'
      placeholder="Your Email"
      iconFamily="material-icons"
      iconName="email"
      onChange = {e => onChangeHandler(e)}
    />
          </div>
          <div className='mb-8' onClick={(e) => onSelectHandler(e)}>
            <Dropdown buttonText={campus}></Dropdown>
          </div>
          
          <Button
      color="lightGreen"
      ripple="light"
     id="hero-btn"
      size="lg"
    >
      Let Find Out <Icon name="favorite" color="red" size="sm" />
    </Button>
        </form>
        </div> 
          

          <div className="absolute bottom-0 left-0 right-0 w-screen h-[300px] front-wave"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[250px] middle-wave"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] back-wave"></div>
    </div>
       
       
       
        
        
        
      
        
    )
}

export default Login
