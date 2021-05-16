// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// ✔️ Exercice 1️
// const smallBox = <div className={`box box--small bg--lightblue`}>small lightblue box</div>
// const mediumBox = <div className={`box box--medium bg--pink`}>medium pink box</div>
// const largeBox = <div className={`box box--large bg--orange`}>large orange box</div>

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// 💯EXTRA CREDIT 1
// function Box({style, className, children}) {
//   return (
//     <div className={`box ${className ? className : ''}`} style={style ? style : null}>
//       {children}
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Box style={{backgroundColor: 'lightblue'}} className="box--small">
//         small lightblue box
//       </Box>
//       <Box style={{backgroundColor: 'pink'}} className="box--medium">
//         medium pink box
//       </Box>
//       <Box style={{backgroundColor: 'orange'}} className="box--large">
//         large orange cox
//       </Box>
//     </div>
//   )
// }

// 💯EXTRA CREDIT 2
function Box({style, size, children}) {
  return (
    <div className={`box ${size ? `box--${size}` : ''}`} style={style ? style : null}>
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box style={{backgroundColor: 'lightblue'}} size="small">
        small lightblue box
      </Box>
      <Box style={{backgroundColor: 'pink'}} size="medium">
        medium pink box
      </Box>
      <Box style={{backgroundColor: 'orange'}} size="large">
        large orange cox
      </Box>
    </div>
  )
}

export default App;
