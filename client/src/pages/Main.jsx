import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState, Suspense } from "react";
import SuspenseLoader from "../components/common/SuspenseLoader";
import { Box } from "@mui/material";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Box>
        <Sidebar openDrawer={openDrawer} />
        <Suspense fallback={<SuspenseLoader />}>
          <Outlet context={{ openDrawer }} />
        </Suspense>
      </Box>
    </>
  );
};

export default Main;
