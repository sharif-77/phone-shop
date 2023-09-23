const Login = () => {
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target.value);
    console.log();
    let obj={
      name:e.target.name.value,
      email:e.target.email.value,
      password:e.target.password.value,
    }
    console.log(obj);
    e.target.reset();
    
  }

  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className=" w-4/5 lg:w-3/5">
        <form onSubmit={handleSubmit} className="bg-black p-5 flex flex-col gap-6">
          <input
            className="py-2 px-4 rounded-md outline-none"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required
          />
          <input
            className="py-2 px-4 rounded-md outline-none"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            required
          />
          <input
            className="py-2 px-4 rounded-md outline-none"
            type="password"
            placeholder="Enter Your Password"
            name="password"
            required
          />
          <input
            type="submit"
            value="Submit"
            className="bg-green-600 py-2 px-4 rounded-md text-white text-lg font-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
