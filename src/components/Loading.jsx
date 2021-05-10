import React, {useState,  useRef,useEffect} from 'react'
import Progress from "@material-tailwind/react/Progress";
import Tinker from '../assets/thuyen.png';
import CloudLeft from '../assets/cloud-left.svg'
import CloudRight from '../assets/cloud-right.svg'
import {gsap} from 'gsap';
const Loading = ({receiveLoadStatus}) => {
    
    // const [endAnimation, setAnimation] = useState(null)
    const [loadValue, setLoadValue] = useState(20);
    //  useEffect(() => {
    // setAnimation((endAnimation) =>{
    //     endAnimation= gsap.timeline({onComplete: () => receiveLoadStatus(true) ,defaults: {duration: 2, ease: "power1.out"}});
    // endAnimation.to(cloudRight, {right: 0}, '-=1.7')
    //             .to(cloudLeft, {left: 0});

    //     endAnimation.pause();
    // })
    
    
    
        // endAnimation.current = gsap.timeline({onComplete: () => receiveLoadStatus(true) ,defaults: {duration: 2, ease: "power1.out"}});
    // endAnimation.to(cloudRight, {xPercent: 0})
    //             .to(cloudLeft, {xPercent: 0});

   // endAnimation.pause();
    
//   }, []);
      let cloudLeft = useRef(null);
    let cloudRight = useRef(null);
    useEffect(() =>{
        let loadCount = setInterval(() => setLoadValue(previousLoad => previousLoad + 20 ), 1500);

        if (loadValue === 100) {
            clearInterval(loadCount); 
                
            let endAnimation = gsap.timeline({onComplete: () => receiveLoadStatus(true) ,defaults: {ease: "power1.out"}, delay: 1.5});
    endAnimation.to(cloudRight, {right: 0, left: 'unset', duration: 1})
                .to(cloudLeft, {left: 0, duration: 1}, "-=0.5");

            
        }

        return () => {clearInterval(loadCount)};
    })
   


   
    return (
     <div className='relative grid w-full h-screen overflow-x-hidden font-sans place-items-center loading-container'>
          <div className="flex flex-col items-center w-9/12 lg:gap-24 lg:mb-16 loading-content">
            <h1 className="font-bold text-white lg:text-5xl loading-title">Hang on! We’re almost there...</h1>
            <div className='relative w-full'>
                <img className='absolute w-20 tinker' style={{left: `${loadValue.toString()}%`, transition: 'left 1.2s ease'}} src={Tinker} alt=""/>
                <Progress color="lightBlue" value={loadValue.toString()} percentage={true} />
            </div>
            
        </div>
     
        

         <div className="absolute bottom-0 left-0 right-0 w-screen h-[300px] front-wave"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[250px] middle-wave"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] back-wave"></div>

        <img ref={el => {cloudLeft = el}} className="absolute bottom-0 right-full  z-20 w-[800px] 2xl:w-[1100px] " src={CloudLeft} alt=""/>
        <img  ref={el => {cloudRight = el}} className="absolute bottom-0 left-full z-20 w-[1000px] 2xl:w-[1300px]" src={CloudRight} alt=""/>
     </div>
       

        
    
    )
}

export default Loading
