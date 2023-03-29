import React from 'react'

export const Input = ({contnet,style}) => {
  return (
    <input type="text"  className={style} placeholder={contnet}/>
  )
}
