import React from 'react'
// import React, { Component } from 'react'
import Button from 'atoms/Button'

function onClick (target) {
  console.log(target)
}

function renderButtons (buttons) {
  return buttons.map((btn, idx) => {
    return (
      <Button
        key={`btn_${idx}`}
        onClick={onClick.bind(null, `${idx + 1}_button`)}
        buttonText={`${idx + 1}_button`}
        dataUnitId={`NUMBER_${idx + 1}_BUTTON`}
      />
    )
  })
}

/* Without data-unit-id */

const MultipleButtons = () => {
  return (
    <div>
      {renderButtons([0, 0, 0, 0])}
    </div>
  )
}

export default MultipleButtons

/* With data-unit-id */

// class MultipleButtons extends Component {
//   state = {
//     clicked: null
//   }
//
//   render () {
//     return (
//       <div>
//         {renderButtons([0, 0, 0, 0])}
//       </div>
//     )
//   }
// }
//
// export default MultipleButtons
