import { useEffect } from "react";
import { ShowStore } from "../stores/ShowStore";
import { useParams } from "react-router-dom";

export const Show = () => {
  const store = ShowStore();
  const params = useParams();

  useEffect(() => {
    store.fetchData(params.id);
  }, []);

  return <div>Show</div>;
};
