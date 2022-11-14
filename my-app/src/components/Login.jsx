import { Box, Button, Image, Img, Text, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import styled from "styled-components";
// import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { loginsucess } from "../Redux/AuthReducer/action";
// import { useDispatch } from "react-redux";
// import { saveData } from "../Utils/accessLocalStorage";
const Inputs = styled.input`
  width: 98%;
  // outline:none;
  margin: 5px;
  padding: 10px;
  border: 1px solid black;
  padding-right: -15px;
  border-radius: 26px;
`;
const Login = () => {
  const [form, setform] = useState({});
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const toast = useToast();
  const Targetvalue = (e) => {
    const { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };

  const handlersubmit = (e) => {
    e.preventDefault();
    fetch("https://cronologyback.herokuapp.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.token) {
          console.log(res.token);
          // saveData("token", res.token);
          toast({
            title: "login successful",
            description: "Your Profile has been creatd on Loseit",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          navigate("https://cronometer.com/");
        } else {
          toast({
            title: "login failed",
            description: res.message,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box w={"100%"} mt="5">
      <Box
        w={"600px"}
        m="auto"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"
        p="30px"
      >
        <Box
          display={"flex"}
          alignItems="center"
          justifyContent={"center"}
          mt="10"
          mb={"5"}
        >
          <Image
            w={"328px"}
            src="https://cdn1.cronometer.com/2020/landing/cronometer-logo.png"
          />
        </Box>
        <form onSubmit={handlersubmit}>
          <Box w={"100%"} m={"auto"} py={5}>
            <Inputs
              type="email"
              onChange={Targetvalue}
              placeholder="Email Address"
              name="email"
              defaultValue={""}
            />
            <Inputs
              type="password"
              placeholder="password "
              name="password"
              onChange={Targetvalue}
              defaultValue={""}
            />
            <a href="https://cronometer.com/">....</a>
            <Input
              type={"submit"}
              w={"98%"}
              cursor="pointer"
              flex={1}
              mt={2}
              fontSize={"lg"}
              ml={1}
              bg={"#67AC5B"}
              color={"white"}
              _hover={{
                bg: "#67AC5B",
              }}
              height="50px"
              _focus={{
                bg: "#67AC5B",
              }}
            />

            <Box
              display={"flex"}
              fontSize="20px"
              justifyContent={"space-between"}
              mt="50px"
            >
              <Box>
                Not a member?{" "}
                <Text as="span" color="red">
                  Sign Up Now
                </Text>
              </Box>
              <Box>
                {" "}
                <Text as="span" color="red">
                  Forgot password?
                </Text>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
