import { useEffect, useState } from "react";
import { getDataFromLS } from "../LocalStorage/LocalStorage";
import { useLoaderData } from "react-router-dom";
import SingleFvrtPhone from "./SingleFvrtPhone";

const Favorite = () => {
    const allDatas=useLoaderData()
    const [phones,setPhones]=useState([])
    console.log(phones);
    
    useEffect(()=>{
       const LocalStorageData=getDataFromLS()
    
    let filteredData=allDatas.filter(singleData=>LocalStorageData.includes(singleData.id))
    setPhones(filteredData)
   },[allDatas])


    return (
        <div className="m-auto w-full">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center ">
             {phones.map(phone=><SingleFvrtPhone key={phone.id} phone={phone}/>)}

            </div>
        
            
        </div>
    );
};

export default Favorite;