import React from 'react'

function Input({type,name,placeholder,value,onChange}) {
    return (
        <input type={type} name={name} placeholder={placeholder} required  className="w-full border px-3 py-2 rounded"  value={value} onChange={onChange}/>
    )
}

export default Input
