import React from 'react'
import Button from 'atoms/Button'

function onClick (target) {
  console.log(target)
}

const MultipleButtons = () => {
  return (
    <div>
      <Button
        buttonText='A button'
        onClick={onClick.bind(null, 'A button')}
      />
      <Button
        buttonText='B button'
        onClick={onClick.bind(null, 'B button')}
      />
      {/* <Button
        buttonText='newly added button'
        onClick={onClick.bind(null, 'newly added button')}
      /> */}
      <Button
        buttonText='C button'
        onClick={onClick.bind(null, 'C button')}
        // dataUnitId='C_BUTTON'
      />
    </div>
  )
}

export default MultipleButtons
