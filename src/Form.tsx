import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { register , handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="mr-2">
          Name
        </label>
        <input
          {...register('name')}
         
          id="name"
          type="text"
          className="w-32 border-2"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="mr-2">
          Age
        </label>
        <input
         {...register('age')}
        
          id="age"
          type="number"
          className="w-32 border-2"
        />
      </div>

      <button className="px-5 py-1 bg-blue-500 rounded-lg" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
