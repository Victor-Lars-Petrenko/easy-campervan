import { useDispatch } from "react-redux";
import { useEffect } from "react";

import AppRoutes from "./AppRoutes";

import { fetchCampers } from "../redux/campers/campers-operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers({ page: 1 }));
  }, [dispatch]);

  return <AppRoutes />;
};

export default App;
