import React, { Fragment, useState, useRef, useEffect} from 'react'
import {gsap} from 'gsap';
import CloudLeft from '../assets/cloud-left.svg'
import CloudRight from '../assets/cloud-right.svg'
import RedIsland from '../assets/red-island.png'
import BlueIsland from '../assets/blue-island.png'
import YellowIsland from '../assets/yellow-island.png'
import RedResult from '../assets/result-red.png'
import BlueResult from '../assets/result-blue.png'
import YellowResult from '../assets/result-yellow.png'

import Button from "@material-tailwind/react/Button";
import { Dialog, Transition } from "@headlessui/react";
import Peter from '../assets/peterpan-flying.png';
const MainGame = () => {
    let cloudLeft = useRef(null);
    let cloudRight = useRef(null);
    let mainGameBg= useRef(null);
    
     let peterFly1 = useRef(null);
     let peterFly2 = useRef(null);
     let peterFly3 = useRef(null);
   
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    
    const [flyAnimation1, setFlyAnimation1]= useState(null);
    const [flyAnimation2, setFlyAnimation2]= useState(null);
    const [flyAnimation3, setFlyAnimation3]= useState(null);

    const cancelButtonRef = useRef();
    

  useEffect(() => {
       let yPercentVal= -((375*800/(window.innerWidth)) + 150);
        setFlyAnimation1((flyAnimation) => {

           
           flyAnimation = gsap.to(peterFly1, {keyframes: [
  {left: '300px', yPercent: -25 , opacity: 1, duration: 0.3},
   
   {left: '50%', yPercent: yPercentVal, scale: 2 ,duration: 0.7}
], ease: "power3.inOut", onComplete: () => {setOpen1(true)}})
      

flyAnimation.pause();

        
        return flyAnimation;
    })

        setFlyAnimation2((flyAnimation) => {
           flyAnimation = gsap.to(peterFly2, {keyframes: [
  {yPercent: -25 , opacity: 1, duration: 0.3},
   
   { yPercent: yPercentVal, scale: 2 ,duration: 0.7}
], ease: "power3.inOut", onComplete: () => {setOpen2(true)}})
        flyAnimation.pause();
        return flyAnimation;
    }
 )

        setFlyAnimation3((flyAnimation) => {
           flyAnimation = gsap.to(peterFly3, {keyframes: [
  {yPercent: -25 , opacity: 1, duration: 0.3},
   
   {right: '50%', xPercent: 100, yPercent: yPercentVal , scale: 2 ,duration: 0.7}
], ease: "power3.inOut", onComplete: () => {setOpen3(true)}})
        flyAnimation.pause();
        return flyAnimation;
    }
            
    
        )


    }, []);


    
    useEffect(() => {
        let beginTl = gsap.timeline({defaults: {duration: 2, ease: "power1.out"}});
        beginTl.to(cloudLeft, {xPercent: -100})
                .to(cloudRight, {xPercent: 100, },  "-=1.7")
                .to(mainGameBg, {backgroundSize: '100% 100%', autoRound:false, duration: 1.2}, '-=1')
                .to('#selection', {opacity: 1, yPercent: -35, stagger: 0.2, duration: 1,ease:'elastic'});

    }, [])

    
    return (
        <div ref={el => {mainGameBg = el}} className='relative grid w-full h-full overflow-x-hidden place-items-center main-game-container'>
            {/*----------------------------Begin Animation --------------------------------*/}

            <img ref={el => {cloudLeft = el}} className="absolute bottom-0 left-0 z-20 w-[800px] 2xl:w-[1100px]" src={CloudLeft} alt=""/>
            <img  ref={el => {cloudRight = el}} className="absolute bottom-0 right-0 z-20 w-[1000px] 2xl:w-[1300px]" src={CloudRight} alt=""/>

            {/* <img ref={el => {peterFly = el}} className="absolute top-0 z-30 right-full" src={PeterPanFly} alt=""/> */}
            

            {/* ----------------------------Main Selections --------------------------------*/}
            <div className='relative flex sm:flex-row items-center lg:w-[90%] 2xl:w-9/12 z-80 sm:justify-between selections-container'>
               
                {/* One Selection Container */}
                <div className='z-10 flex flex-col items-center opacity-0' style={{transform: 'translateY(35%)'}} id='selection'>
                       
                    <div className='relative w-[300px] pb-full' >
                        <img className='absolute object-cover w-full h-full' src={RedIsland} alt=""/>
                   
                    </div>

                    <Button
                        color="lightGreen"
                        ripple="light"
                        
                        size="lg"
                        onClick={() => {flyAnimation1.restart()}}
                    >
                        The Red Island 👆
                    </Button>

                    <Transition show={open1} as={Fragment}>
                        <Dialog
                        as="div"
                        className="fixed inset-0 z-20 overflow-y-aut"
                        style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
                        initialFocus={cancelButtonRef}
                        static
                        open={open1}
                        onClose={close}
                        >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            >
                            <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                            >
                            &#8203;
                            </span>
                            <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                            >
                            

                            <div className="inline-block w-full max-w-[700px] lg:mt-12 2xl:mt-24 overflow-hidden text-left align-middle transition-all transform">
                                <img className src={RedResult} alt="" />
                                <div className="flex justify-center mb-4">
                                <button 
                                    type="button"
                                    className="inline-flex justify-center px-8 py-2 font-medium text-red-900 border border-transparent rounded-md bg-red-50 lg:text-sm 2xl:text-base hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 card-btn"
                                    onClick={() => {flyAnimation1.pause(0); setOpen1(false); }}
                                >
                                    Got it, thanks!
                                </button>
                                </div>
                            </div>
                            </Transition.Child>
                        </div>
                        </Dialog>
                    </Transition>
                    
                </div>

                    
                 <img ref={el => {peterFly1 = el}} src={Peter} className='absolute opacity-0 w-[50px] h-[50px] top-1/4 left-[150px] z-30 peter1' alt=''/>














                <div className='relative z-10 flex flex-col items-center opacity-0' style={{transform: 'translateY(35%)'}} id='selection'>
                    <div className='relative w-[300px] pb-full '>
                        <img className='absolute object-cover w-full h-full' src={BlueIsland} alt=""/>
                    </div>
                    <Button
                        color="lightGreen"
                        ripple="light"
                        onClick={() => {flyAnimation2.restart()}}
                        size="lg"
                        >
                        The Blue Island 👆
                    </Button>

                    <Transition show={open2} as={Fragment}>
                        <Dialog
                        as="div"
                        className="fixed inset-0 z-20 overflow-y-aut"
                        style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
                        initialFocus={cancelButtonRef}
                        static
                        open={open2}
                        onClose={close}
                        >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            >
                            <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                            >
                            &#8203;
                            </span>
                            <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                            >
                        

                            <div className="inline-block w-full max-w-[700px] lg:mt-12 2xl:mt-24 overflow-hidden text-left align-middle transition-all transform">
                                <img src={BlueResult} alt="" />
                                <div className="flex justify-center mb-4">
                                <button 
                                    type="button"
                                    className="inline-flex justify-center px-8 py-2 font-medium text-red-900 border border-transparent rounded-md bg-blue-50 lg:text-sm 2xl:text-base hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 card-btn"
                                    onClick={() => {flyAnimation2.pause(0); setOpen2(false); }}
                                >
                                    Got it, thanks!
                                </button>
                                </div>
                            </div>
                            </Transition.Child>
                        </div>
                        </Dialog>
                    </Transition>
                </div>

                   <img ref={el => {peterFly2 = el}} src={Peter} className='absolute opacity-0 w-[50px] h-[50px] sm:top-1/4 left-1/2 z-30 peter2' alt=''/>






                <div className='relative z-10 flex flex-col items-center opacity-0' id='selection' style={{transform: 'translateY(35%)'}}>
                    <div className='relative w-[300px] pb-full '>
                        <img className='absolute object-cover w-full h-full' src={YellowIsland} alt=""/>
                    </div>
                    
                    <Button
                        color="lightGreen"
                        ripple="light"
                       onClick={() => {flyAnimation3.restart()}}
                        size="lg"
                        >
                        The Yellow Island 👆
                    </Button>

                    <Transition show={open3} as={Fragment}>
                        <Dialog
                        as="div"
                        className="fixed inset-0 z-20 overflow-y-aut"
                        style={{backgroundColor: 'rgba(0,0,0,0.3)'}}
                        initialFocus={cancelButtonRef}
                        static
                        open={open3}
                        onClose={close}
                        >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            >
                            <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>

                            {/* This element is to trick the browser into centering the modal contents. */}
                            <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                            >
                            &#8203;
                            </span>
                            <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                            >
                            {/* <div className="inline-block w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl lg:my-8 2xl:mt-24 rounded-2xl">
                                <Dialog.Title
                                as="h3"
                                className="text-2xl font-bold leading-6 text-[#dc3932]"
                                >
                                The Yellow Island 🔥
                                </Dialog.Title>
                                <div className="mt-2">
                                <p className="leading-normal text-gray-500 lg:text-base 2xl:text-lg card-des">
                                   You have the personality of people who are driven by unstoppable passions, a passionate energy and characteristic extrovert personality.
This is your quarter-explained about your personality (This is not the end yet). If you want to know more (about your career), come to our booth, there is a lot of interesting information waiting for you!!!

                                </p>
                                </div>

                                <div className="mt-4">
                                <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 font-medium text-red-900 bg-red-100 border border-transparent rounded-md lg:text-sm 2xl:text-base hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 card-btn"
                                    onClick={() => {flyAnimation3.pause(0); setOpen3(false); }}
                                >
                                    Got it, thanks!
                                </button>
                                </div>
                            </div> */}

                            <div className="inline-block w-full max-w-[700px] overflow-hidden text-left align-middle transition-all transform lg:mt-12 2xl:mt-24">
                                <img src={YellowResult} alt="" />
                                <div className="flex justify-center mb-4">
                                <button 
                                    type="button"
                                    className="inline-flex justify-center px-8 py-2 font-medium text-red-900 border border-transparent rounded-md bg-yellow-50 lg:text-sm 2xl:text-base hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 card-btn"
                                    onClick={() => {flyAnimation3.pause(0); setOpen3(false); }}
                                >
                                    Got it, thanks!
                                </button>
                                </div>
                            </div>
                            </Transition.Child>
                        </div>
                        </Dialog>
                    </Transition>
                </div>

                 <img ref={el => {peterFly3 = el}} src={Peter} className='absolute opacity-0 w-[50px] h-[50px] sm:top-1/4 right-[150px] z-30 peter3' alt=''/>
                
            </div>

        
        </div>
    )
}

export default MainGame
