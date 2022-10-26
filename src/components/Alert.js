import React from 'react'

export default function Alert(props) {
    const capitalize = (str)=>{
        str = str.toLowerCase()
        return (str.charAt(0).toUpperCase() + str.slice(1))
    }
  return (
    props.alert && <div className='flex justify-center items-center'>
     <div className='w-[99%] bg-green-300 p-2 fixed top-16 text-black  rounded-lg'>
        <p><strong>{capitalize(props.alert.type)}</strong>! {props.alert.msg}</p>
    </div>
    </div>
  )
}
