import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
const Home = () => {
  const userSignedIn = useSelector(state=>state.userReducer.userSignedIn)
  console.log(userSignedIn)
  return <h1>
   
  </h1>;
};

export default Home;
