import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../NavBar";
import Loader from "../Loader";

const SharedLayout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
