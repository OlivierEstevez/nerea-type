import {useState, useEffect} from 'react';
import "normalize.css"
import "../styles/globals.css"
import opentype from 'opentype.js'

function MyApp({ Component, pageProps }) {

  const [font, setFont] = useState()
  useEffect(() => {
    opentype.load("/tipo.ttf", (err, font) => {
      if(err) {
        console.log(font)
      }
      else {
        setFont({
          glyphs: font.glyphs.glyphs,
          axes: font.tables.fvar.axes
        })
      }
    
    })
  }, [])

  return (<Component {...pageProps} font={font} />)
}

export default MyApp
