import React, {useState} from 'react'
import Form from './form'

const panel = () => {
    const [input, setInput] = useState("")

  return (
    <div>
    <div className="panel-box">
        pannel
    </div>
    <div className='form-box'>
        <Form  input={input} setInput={setInput}/>
    </div>
    </div>
  )
}

export default panel