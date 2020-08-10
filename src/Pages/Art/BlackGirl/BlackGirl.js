import React from 'react'
import '../../../App.css'
import { ThemeProvider } from "@material-ui/core/styles";
import { ParallaxBanner } from 'react-scroll-parallax';
import blackgirl1 from './blackGirl0.png'
import blackgirl2 from './blackGirl1.png'
import blackgirl3 from './blackGirl2.png'
import { useController } from 'react-scroll-parallax';

// import blackgirl2 from 'blackGirl1.png'
// import blackgirl3 from 'blackGirl2.png'
const images = [blackgirl1,blackgirl2,blackgirl3]


const count = [1,2,3]
// const size = [window.outerWidth,window.outerHeight]; 
const paralax = count.map((_,i)=>1-((i-3)**2)/9 ).reverse()
const BlackGirl = () => {
  const { parallaxController } = useController();
  window.onresize = () => {
    console.log('resize')
    parallaxController.update()
  } 
  return (
    <ThemeProvider >
      <div className="Black-girl">
        <div 
          style={{
            backgroundSize: '110%',
            flexDirection: 'column',
            height:'300vh',
            backgroundColor:'#937e6c',
            backgroundRepeat: "repeat",
            width:"100%",
            top: "-5%",
            bottom: "-5%",
            left: "-5%",
            right: "-5%",
           backgroundImage:`url(${blackgirl1})`,  filter:' blur(10px)'
          }}
        />
        <ParallaxBanner
          layers= {count.map((_,i)=>({
            image: images[i],
            amount: paralax[i],
            alt:"blackgirl",
            expanded:false
          }))}
          style={{
            position:'absolute',
            filter:' blur(0px)',
            backgroundColor: 'rgba(0,0,0, 0.4)', 
            width:'75vh',
            height: '100vh',
            top: 0
          }}
        />
        </div>  
    </ThemeProvider>
  )
}


export default BlackGirl