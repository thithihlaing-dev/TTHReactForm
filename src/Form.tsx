import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="mr-2">
          Name
        </label>
        <input
          {...register("name" ,{ required: true, minLength: 3})}
          id="name"
          type="text"
          className="w-32 border-2"
        />
        {errors.name?.type === "required" && (
            <p className="text-red-500">
              The name field is required.
            </p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-red-500">
            The name must be at least 3 character.
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="mr-2">
          Age
        </label>
        <input
          {...register("age" ,{required:true})}
          id="age"
          type="number"
          className="w-32 border-2"
        />
        {errors.name?.type === "required" && (
            <p className="text-red-500">
              The name field is required.
            </p>
        )}
        
      </div>

      <button className="px-5 py-1 bg-blue-500 rounded-lg" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
