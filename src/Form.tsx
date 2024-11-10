import { FieldValues, useForm } from "react-hook-form";
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  name: z.string().min(3,{ message: 'Name must be at least 3 characters'}),
  age: z.number({invalid_type_error: 'Age field is required.'}).min(18, {message:'Age must be at least 18'})
})


type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema)});
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="mr-2">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="w-32 border-2"
        />
        {errors.name && (
            <p className="text-red-500">
              {errors.name.message}
            </p>
        )}
        
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="mr-2">
          Age
        </label>
        <input
          {...register("age" , {valueAsNumber : true})}
          id="age"
          type="number"
          className="w-32 border-2"
        />
        {errors.age && (
            <p className="text-red-500">
              {errors.age.message}
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
