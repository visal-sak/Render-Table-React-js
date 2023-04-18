import React from 'react'

export function Welcome(props) {
  return (
    <h1>Welcome To , {props.title}</h1>
  )
}
const Avatar = ({imageURL, size}) => {
    return(
        <img
        style = {avatar}
        src = {imageURL}
        width = {size}
        height = {size}
        />
    )
}
export default Avatar

const avatar ={
    borderRadius: '50%',
}
 
