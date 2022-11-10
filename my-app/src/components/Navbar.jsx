import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/cronometer-logo.png";
import mainlogo from "../Assets/crono-icon-main-nav.png";
import prologo from "../Assets/pro-icon-main-nav.png";
const Navbar = () => {
  const [arrow, setArrow] = useState(false);

  const handleArrow = () => {
    let status = !arrow;
    setArrow(status);
  };
  return (
    <Box w="80%" m="auto" p="2.5%" size={["xs", "sm", "md", "lg"]}>
      <Flex justifyContent="space-between" alignItems="center">
        <Box w={["70%", "70%", "40%"]}>
          <Box w={["90%", "90%", "50%"]} textAlign="center">
            <Image src={logo} alt="logo" w="100%" />
          </Box>
        </Box>
        <Flex
          w="60%"
          justifyContent="space-between"
          display={["none", "none", "block"]}
        >
          <HStack justifyContent="space-evenly" w="100%">
            <Popover>
              <PopoverTrigger>
                <Button
                  fontSize="xl"
                  fontWeight="400"
                  onClick={handleArrow}
                  variant="ghost"
                  _hover={{ color: "#FF763F" }}
                >
                  Products {arrow ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                  <Flex>
                    <Box w="10%" mr="20px">
                      <Image src={mainlogo} w="100%" />
                    </Box>
                    <Box textAlign="left">
                      <Heading size="sm">Coronometer</Heading>
                      <Text>For Individuals</Text>
                    </Box>
                  </Flex>
                  <Flex mt="20px">
                    <Box w="10%" mr="20px">
                      <Image src={prologo} w="100%" />
                    </Box>
                    <Box textAlign="left">
                      <Heading size="sm">Coronometer Pro</Heading>
                      <Text>For Healthcare Professionals</Text>
                    </Box>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="400"
                _hover={{ color: "#FF763F" }}
              >
                <Link to="/support">Support</Link>
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="400"
                _hover={{ color: "#FF763F" }}
              >
                <Link to="/blog">Blog</Link>
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="400"
                _hover={{ color: "#FF763F" }}
              >
                <Link>Forums</Link>
              </Text>
            </Box>
            <Box>
              <Text
                fontSize="xl"
                fontWeight="400"
                _hover={{ color: "#FF763F" }}
              >
                <Link to="/about">About</Link>
              </Text>
            </Box>
            <Box>
              <Button
                w="8rem"
                border="2px solid #FF763F"
                color="#FF763F"
                bgColor="white"
                fontWeight="600"
                fontSize="lg"
              >
                <Link to="/login">Login</Link>
              </Button>
            </Box>
          </HStack>
        </Flex>
        <Box display={["block", "block", "none"]} mt="2px">
          <Button
            w="5rem"
            border="2px solid #FF763F"
            color="#FF763F"
            bgColor="white"
            fontWeight="500"
            fontSize="md"
          >
            <Link to="/login">Login</Link>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;