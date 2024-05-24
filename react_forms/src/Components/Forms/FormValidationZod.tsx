
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";


const schema = z.object({
    name: z.string().min(3,{message:"Name must be at least 3 characters bruh!"}),
    age: z.number({invalid_type_error:"Age field is required"}).min(21)
})

type FormData = z.infer<typeof schema>


// interface FormData{
//     name: string,
//     age: number
// }


const FormValidationZod = () => {
    const {register,handleSubmit, formState:{errors,isValid}} = useForm<FormData> ({resolver:zodResolver(schema)})

    //  console.log(register('name'));
     console.log(errors);
    
    const onHelpSubmit = (data:FieldValues) => {
        console.log(data);
    }
    
    
      return (
        <>
          <h1 className="text-center">Form using React Hook Forms</h1>
          <form onSubmit ={handleSubmit(onHelpSubmit)}>
            {/* code below is another way to code */}
          {/* <form onSubmit={handleSubmit(data => console.log(data))}> */}
            <div className="mb-3 myContainer">
              <label htmlFor="" className="form-label">
                Name
              </label>
    
              <input {...register('name',)} id="name" type="text" className="form-control" />
              {errors.name && <p className="text-danger">{errors.name.message}</p>}
              {/* {errors.name?.type === 'required' && <p className="text-danger">The name field is required</p>} */}
              {/* {errors.name?.type === 'minLength'? <p className="text-danger">The name must be at least 3 characters long is required</p>:null} */}
    
              <label htmlFor="" className="form-label">
                Age
              </label>
              <input {...register('age', {valueAsNumber: true})} id="age" type="number" className="form-control" />
              {errors.age ? <p className="text-danger">{errors.age.message}</p>:null}

              {/* {errors.age?.type ==='required'?<p className="text-danger">The age field 
              is required</p>:null} */}
              <button disabled={!isValid} className="mt-3 btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </>
      );
}

export default FormValidationZod