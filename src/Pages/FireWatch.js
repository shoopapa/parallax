import React from 'react'
import '../App.css'
import { ThemeProvider } from "@material-ui/core/styles";
import { ParallaxBanner } from 'react-scroll-parallax';


// const useStyles = makeStyles(theme => ({
//   img:{
//     background: "transparent",
//     padding: 20,
//     position: "absolute",
//     top: "50%",
//     left: "50%",

//   }
// }));


const FireWatchImages = [1,2,3,4,5,6,7,8,9]
const paralax = FireWatchImages.map((_,i)=>1-((i-8)**2)/64).reverse()

const FireWatch = () => {
  // const classes = useStyles();
  return (
    <ThemeProvider>
      <div className="App">
        <ParallaxBanner
          layers= {FireWatchImages.map((_,i)=>({
            image: `http://www.firewatchgame.com/images/parallax/parallax${i}@2x.png`,
            amount: paralax[i],
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
            backgroundColor:"#220002",
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


export default FireWatch