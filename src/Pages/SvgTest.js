import React from 'react'
import '../App.css'
import { ThemeProvider } from "@material-ui/core/styles";
import { Parallax } from 'react-scroll-parallax';



const SvgTest = () => {
  // const classes = useStyles();
  return (
    <ThemeProvider>
      <div className="Svg-app">
      <Parallax className="custom-class" y={[50, -50]} x={[50, -50]} tagOuter="figure">
          <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
        </Parallax>
      </div>
    </ThemeProvider>
  )
}


export default SvgTest