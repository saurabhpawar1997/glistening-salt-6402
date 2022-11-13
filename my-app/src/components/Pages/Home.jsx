import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import HomePageData from "./HomePageData";
const Home = () => {
  return (
    <Box>
      <Navbar />
      <HomePageData/>
      <Footer />
    </Box>
  );
};

export default Home;