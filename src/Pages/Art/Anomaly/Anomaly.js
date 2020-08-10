import React, {useLayoutEffect} from 'react'
import '../../../App.css'

import anomaly2 from './anomaly2.png'
import anomaly3 from './anomaly3.png'
import anomaly4 from './anomaly4.png'
import {useController, Parallax  } from 'react-scroll-parallax';

const wrap = {
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
  backgroundColor:' #000a13',
  overflowY: 'scroll',
}

const Anomaly = () => {
  const { parallaxController } = useController();
  window.onresize = () => {
    parallaxController.update()
  } 
  
  const handler = () => parallaxController.update();
  useLayoutEffect(() => {
    window.addEventListener('load', () => parallaxController.update());
    return () => window.removeEventListener('load', () => parallaxController.update());
}, [parallaxController,]);

  const top = 85
  

  return (
    <div className="Anomaly">
      <div className="Anomaly" style={{...wrap, display: 'flex'}}>
        <Parallax  styleOuter={{position:'absolute' , top:`${top+3}vh`,overflow:'hidden'}}   >
          <svg viewBox=' 0 0 100 100' style={{ height:'100vh', width:'90vh' }}>
            <circle cx="50%" cy="50%" r="45%" fill="#002132" />
          </svg>
        </Parallax>
        <Parallax   y={[20, -20]}   styleOuter={{position:'absolute' ,top:`${top}vh`,overflow:'hidden'}}   >
          <svg viewBox=' 0 0 100 100' style={{position:'absoulte' ,  op: 0,height:'100vh', width:'100vh' }}>
            <circle cx="50%" cy="50%" r="35%" fill="#022d46" />
          </svg>
        </Parallax>
        <Parallax  y={[5, -5]} styleOuter={{position:'absolute' ,top:`${top}vh`,overflow:'hidden'}}   >
          <img src={anomaly2} style={{height:'118vh'}} alt='text' onLoad={handler}/>
        </Parallax>
        <Parallax   y={[30  , -30]} x={[-5,5]} styleOuter={{position:'absolute' ,top:`${top}vh`,overflow:'hidden'}}   >
          <img src={anomaly3} style={{height:'115vh'}} alt='window' onLoad={handler}/>
        </Parallax>
        <Parallax   y={[35, -35]} x={[10,-10]} styleOuter={{position:'absolute' ,top:`${top}vh`, overflow:'hidden'}}   >
          <img src={anomaly4} style={{height:'120vh'}} alt='person' onLoad={handler} />
        </Parallax>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
        style={{position:'absolute', top:'30vh', height:'5vh', width:"5vh"}} 
        viewBox='0 0 24 24'
        alt='arrow'
      >
        <path stroke='gray' d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/>
      </svg>
    </div>  
  )
}


export default Anomaly