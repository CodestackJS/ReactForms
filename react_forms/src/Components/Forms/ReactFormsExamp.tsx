import { FieldValues, useForm } from "react-hook-form";





const ReactFormsExamp = () => {

 const {register,handleSubmit} = useForm ()
 console.log(register('name'));

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
          <input {...register('name')} id="name" type="text" className="form-control" />
          <label htmlFor="" className="form-label">
            Age
          </label>
          <input {...register('age')} id="age" type="text" className="form-control" />
          <button className="mt-3 btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ReactFormsExamp;
