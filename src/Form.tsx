import React, { FormEvent, useRef, useState } from 'react'

const Form = () => {

   const[person,setPerson] = useState({
    name:'',
    age:0
   });


    const handleSubmit = (event: FormEvent) =>{
        event.preventDefault();
       
        console.log(person);
}
  return (
    <form onSubmit={handleSubmit}>
        <div className='mb-3'>
        <label htmlFor="name" className='mr-2'>Name</label>
        <input onChange={(event) => setPerson({ ...person, name:event.target.value})} id='name' type="text" className='w-32 border-2' />
        </div>

        <div className='mb-3'>
        <label htmlFor="age" className='mr-2'>Age</label>
        <input onChange={(event) => setPerson({ ...person, age: parseInt(  event.target.value)})} id='age' type="number" className='w-32 border-2' />
        </div>

        <button className='px-5 py-1 bg-blue-500 rounded-lg' type='submit'>Submit</button>
       
    </form>
  )
}

export default Form