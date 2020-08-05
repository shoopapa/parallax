import React from 'react'
import '../../../App.css'
import { ThemeProvider } from "@material-ui/core/styles";
import { ParallaxBanner } from 'react-scroll-parallax';
import blackgirl1 from 'src/Pages/Art/BlackGirl/blackGirl0.png'
import blackgirl2 from 'src/Pages/Art/BlackGirl/blackGirl1.png'
import blackgirl3 from 'src/Pages/Art/BlackGirl/blackGirl2.png'
const images = [blackgirl1,blackgirl2,blackgirl3]

const count = [1,2,3]
const paralax = count.map((_,i)=>1-((i-3)**2)/9 ).reverse()
const BlackGirl = () => {
  // const classes = useStyles();
  return (
    <ThemeProvider>
      <div className="App">
        <ParallaxBanner
          layers= {count.map((_,i)=>({
            image: images[i],
            amount: paralax[i],
            alt:"blackgirl",
            expanded:false
          }))}
          style={{
              width:'100%',
              height: '100%',
              position:'absolute',
              top:'0px'
          }}
        >
        </ParallaxBanner>
        <div 
        style={{
            backgroundColor:"rgb(105,90,85)",
            width:'100%',
            height: '101vh',
            position:'absolute',
            top:'99vh'
          }}
          ></div>
      </div>
    </ThemeProvider>
  )
}


export default BlackGirl