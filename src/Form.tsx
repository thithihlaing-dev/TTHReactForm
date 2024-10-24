import React, { FormEvent, useRef } from 'react'

const Form = () => {

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);

    const person = {name:'', age:0};


    const handleSubmit = (event: FormEvent) =>{
        event.preventDefault();
        if(nameRef.current != null)
            person.name = nameRef.current.value;
        if(ageRef.current != null){
            person.age = parseInt(ageRef.current.value);
        }
        console.log(person);
}
  return (
    <form onSubmit={handleSubmit}>
        <div className='mb-3'>
        <label htmlFor="name" className='mr-2'>Name</label>
        <input ref={nameRef} id='name' type="text" className='w-32 border-2' />
        </div>

        <div className='mb-3'>
        <label htmlFor="age" className='mr-2'>Age</label>
        <input ref={ageRef} id='age' type="number" className='w-32 border-2' />
        </div>

        <button className='px-5 py-1 bg-blue-500 rounded-lg' type='submit'>Submit</button>
       
    </form>
  )
}

export default Form