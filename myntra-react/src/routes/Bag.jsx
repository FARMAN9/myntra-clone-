import Bagsummary from "../comp/Bagsummary.jsx";
import BagItem from "../comp/BagItem.jsx";
import { useSelector } from "react-redux";


const Bag=()=>
    {

      const Bagitems= useSelector(state => state.bag)
      const items =useSelector(state => state.items)

      const itemsInbag= items.filter(item => {
        const itemIndex=Bagitems.indexOf(item.id);
        return itemIndex >=0
      })

        return(
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {
            itemsInbag.map((item) => 
              <BagItem item={item}/>
            )
          }
        
        </div>
        <Bagsummary/>
      </div>
    </main>
   
   
            
        )

    }

 export default Bag;   