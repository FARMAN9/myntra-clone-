import { useSelector } from "react-redux";
import HomeItem from "../comp/HomeItem"


const Home=()=>{
   
  const items =useSelector((store) => store.items);
  console.log("my items",items)
 

  return (
    <>
    
    <main>
        <div className="items-container">
          {items.map((item) => 
             <HomeItem key={item.id} item={item}/>
           )}
         
         
        </div>
    </main>
   
    </>

    )
}


export  default Home ;