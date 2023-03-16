import React from 'react'

const Button = ({Children,className}) => {
  return (
    <div>
      <button className={className}>
         {Children}
        </button>
    </div>
  )
}

export default Button
