const Banner = () => {
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target.search.value);
    e.target.reset()
  }
  return (
    <div>
      <div className="bg-[url('/src/assets/images/banner.avif')] h-[80vh] object-center object-cover  flex justify-center items-center  rounded-md">
        <form onSubmit={handleSubmit} className="flex flex-col w-4/5 relative">
          <input type="search" name="search" id="" className="p-3 rounded" placeholder="Search Your Favorite Phone"/>
          <input type="submit" value="Search" className="bg-green-500 w-24 text-white font-bold  py-2 px-5 rounded-md absolute right-[5px] top-1" />
        </form>
        
      </div>
    </div>
  );
};

export default Banner;
