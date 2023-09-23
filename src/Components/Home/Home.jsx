import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Phone from "../Phone/Phone";

const Home = () => {
    const phones=useLoaderData()
    return (
        <div>
            <Banner/>
            <div className="my-10 ">
                <h1 className="text-center">Our Phone Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    phones.map(phone=><Phone key={phone.id} phone={phone}/>)

                }
            </div>
            </div>
            
        </div>
    );
};

export default Home;