import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
    const FetchStatus = useSelector((store) => store.fetchStatus);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (FetchStatus.fetchDone) return;
  
      const controller = new AbortController();
      const signal = controller.signal;
  
      dispatch(fetchStatusActions.markFetchingStarted());
      fetch("http://localhost:8080/items", { signal })
        .then((res) => res.json())
        .then(({ items }) => {
          
          dispatch(fetchStatusActions.markFetchDone());
          dispatch(fetchStatusActions.markFetchingFinished());
          dispatch(itemsActions.addInitialItems(items[0]));
        });
  
      return () => {
        controller.abort();
      };
    }, [FetchStatus]);

  return 
  <>
  hello
  </>;
};

export default FetchItems;
