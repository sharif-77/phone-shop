import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa6';
import { setDataToLS } from "../LocalStorage/LocalStorage";

const PhoneDetails = () => {
  const phones = useLoaderData();
  const { id } = useParams();
  const [phone, setPhone] = useState({});
//   console.log(phone.id);

  useEffect(() => {
    let getPhoneById = phones.find((phone) => phone.id === id);
    if (getPhoneById) {
      setPhone(getPhoneById);
    }
  }, [id, setPhone, phones]);
  return (
    <div className="flex items-center justify-center mt-auto h-[80vh]">
      <div className=" flex w-[800px]  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className=" m-0 w-2/5  overflow-hidden rounded-xl  bg-white bg-clip-border text-gray-700">
          <img
            src={phone.image}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 mt-10">
          <h6 className="  font-semibold uppercase  text-pink-500 antialiased">
            {phone.brand_name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl ">{phone.phone_name}</h4>
          <h4 className="mb-2 block font-sans text-2xl ">${phone.price}</h4>

          <button
          onClick={()=>setDataToLS(phone.id)}
            className="flex items-center gap-2  rounded-lg py-3 px-3 text-center   text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 "
            type="button"
          >
            Add To Favorite
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
