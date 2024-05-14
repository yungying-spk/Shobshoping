import { useState, useEffect } from "react";

function Register() {
  const [error, setError] = useState({});
  const [values, setValues] = useState({
    username: "",
    lastname: "",
    email: "",
    phone: "",
    complaint: "",
  });

  return (
    <>
      <section className=" flex  h-screen">
        <div className=" bg-yellow-100  w-1/3"></div>
        <div className=" bg-pink-100 w-2/3">
          <div className=" bg-white  m-40 w-1/2 flex flex-col  items-center text-center rounded-lg shadow-md  ">
            <h1 className=" text-5xl pb-10 pt-10">Register</h1>
            <form className=" flex  flex-col gap-5">
            <div className=" text-2xl ">
            <label htmlFor="phone" className=" flex gap-1">
              <p>Username</p> <p className=" text-red-500">*</p>{" "}
            </label>
            <input
            className=" bg-slate-50 rounded-lg  border-2 w-[500px] h-10 "
              type="tel"
              id="phone"
              name="phone"
              maxLength={10}
            />
            </div>
            <div className="text-2xl ">
            <label htmlFor="phone" className=" flex gap-1">
              <p>Email</p> <p className=" text-red-500">*</p>{" "}
            </label>
            <input
            className=" bg-slate-50 rounded-lg  border-2 w-[500px] h-10 "
              type="tel"
              id="phone"
              name="phone"
            
              maxLength={10}
            />
            </div>
            <div className="text-2xl ">
            <label htmlFor="phone" className=" flex gap-1">
              <p>Phone Number</p> <p className=" text-red-500">*</p>{" "}
            </label>
            <input
            className=" bg-slate-50 rounded-lg  border-2 w-[500px] h-10 "
              type="tel"
              id="phone"
              name="phone"
             
              maxLength={10}
            />
            </div>
            <div className="text-2xl ">
            <label htmlFor="phone" className=" flex gap-1">
              <p>Password</p> <p className=" text-red-500">*</p>{" "}
            </label>
            <input
            className=" bg-slate-50 rounded-lg  border-2  w-[500px] h-10 "
              type="tel"
              id="phone"
              name="phone"
           
              maxLength={10}
            />
            </div>
            <div className=" flex justify-center pb-10">
            <button
              className="p-4 pl-10 pr-10 border-none rounded-xl text-xl bg-green-500 disabled:bg-slate-200"
              type="submit"
              
            >
              Submit
            </button>
          </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
