import React from 'react'
import { MdClose } from 'react-icons/md'

const FormTable = ({handleSubmit,handleOnchange,handleClose,
   rest }) => {
  return (
    <div className='addcontainer'>
            <form className='addcontainer-form' onSubmit={handleSubmit} >
                  <div className='close-btn' onClick={handleClose}><MdClose/></div>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' onChange={handleOnchange} value={rest.name}></input>
<br/>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' onChange={handleOnchange} value={rest.email}></input>

<br/>

                <label htmlFor='mobile'>Mobile:</label>
                <input type='number' id='mobile' name='mobile' onChange={handleOnchange} value={rest.mobile}></input>
                <br/>
                <button className='btn-sub' >Submit</button>
            </form>
        </div>
  )
}

export default FormTable