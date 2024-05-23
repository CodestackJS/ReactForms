import { FormEvent, useRef } from "react";

const FormUseRef = () => {
  //create a useRef
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  //object only equals and curly braces
    const person = {
        name: "",
        age: 0
    }



  //create a helper function to handle our onSubmit
  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    console.log("submitted with our handleClick function");
    if (nameRef.current != null) 
        //console.log(nameRef.current.value);
        person.name = nameRef.current.value
    if(ageRef.current != null)
        //console.log(ageRef.current.value);
        person.age = parseInt(ageRef.current.value)

    console.log(person);

  };

  return (
    <>
      <h1 className="text-center">Form using UseRef</h1>
      <form onSubmit={handleClick}>
        <div className="mb-3 myContainer">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input ref={nameRef} id="name" type="text" className="form-control" />
          <label htmlFor="" className="form-label">
            Age
          </label>
          <input ref={ageRef} id="age" type="text" className="form-control" />
          <button className="mt-3 btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FormUseRef;
