import { Avatar, Box, Button, Checkbox, FormControl, Heading, Image, Input, Radio, RadioGroup, Select, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import {useNavigate} from "react-router-dom"

const Inputs = styled.input`
width:98%;
// outline:none;
margin:5px;
padding:10px;
border :1px solid black;
padding-right:-15px;

`

const Signin = () => {
    const [checkedItems, setCheckedItems] = React.useState([false, false, false])
    const [isDisableds, setDisables] = useState(false)
    const [form, setform] = useState({});
    const toast = useToast()
    const navigate= useNavigate()

    const allChecked = checkedItems.every(Boolean)


    const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
    const Targetvalue = (e) => {
        const { name, value } = e.target;
        setform({
            ...form,
            [name]: value
        })
    }

    const handlersubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("https://reqres.in/api/register", form)
        const data = res.data;
        const flag = 1;
        if (data.status === "error" || data.password !== data.confirmpass) {
            toast({
                title: "signup failed",
                description: res.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            flag = 0;
        }
        if (flag) {
            toast({
                title: "signup successful",
                description: "Your Profile has been creatd on Loseit",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            navigate("/login");
        }

    }
    // console.log(form)
    useEffect(() => {

        if (allChecked) {
            setDisables(!isDisableds)
        }
    }, [allChecked])
    return (
        <Box >
            <Box w="100%" display="flex" alignContent={"center"} justifyContent="center" p={3} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>

                <Image w={"328px"} src='https://cdn1.cronometer.com/2020/landing/cronometer-logo.png' />
            </Box>
            <Box bgColor={"#FBFBFA"}>



                <Box bgColor={"white"} w="50%" m={"auto"}>

                    <Box w="100%" display="flex" fontFamily="normal normal bold 28px/42px Open Sans" justifyContent="center" m={"50px"}>
                        <Heading size={"xl"} fontWeight="700" textAlign={"center"} >Create Your Free Account</Heading>
                    </Box>
                    <form onSubmit={handlersubmit}>
                        <Box display="flex" alignContent={"center"} justifyContent="center" p={5} w={"100%"} m="auto" flexDirection={"column"} boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" >

                            <Box w={"100%"} m={"auto"} py={5} >



                                <Inputs type='email' onChange={Targetvalue} placeholder='Email Address' name='email' />
                                <Inputs type='password' placeholder='password ' name='password' onChange={Targetvalue} />
                                <Inputs type='password' placeholder=' Confirm password ' name='confirmpassword' onChange={Targetvalue} />


                            </Box>

                            <Box w={"100%"} display="flex" alignItems={"center"} flexDirection={"column"} my={5} fontSize="16px" fontWeight={"medium"} boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"  >

                                <Heading fontSize={"25px"} my={5} >
                                    Your Body Type
                                </Heading>

                                <Box display={"flex"} alignItems="center" textAlign="center" flexDirection={"column"} mb={5}   >

                                    <Stack spacing={7} direction='row' my={2}>
                                        <Text>sex:</Text>
                                        <RadioGroup>
                                            <Radio size='lg' name='sex' colorScheme='red' type={"radio"} onChange={Targetvalue} value="male" mr={4} >
                                                Male
                                            </Radio>
                                            <Radio size='lg' name='sex' type={"radio"} value="female" colorScheme='red' onChange={Targetvalue} >
                                                Female
                                            </Radio>
                                        </RadioGroup>

                                    </Stack>
                                    <Stack display={"flex"} direction='row' my={2} >
                                        <Text>Born:</Text>
                                        <Box>  <Input type={"date"} onChange={Targetvalue} name="date" /></Box>

                                    </Stack>

                                    <Stack display={"flex"} direction='row' my={2} >
                                        <Text>Height:</Text>

                                        <Select border="1px solid black" size={"sm"} onChange={Targetvalue}  >
                                            <option value='1'>1</option>
                                            <option value='2'> 2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'> 5</option>
                                            <option value='6'>6</option>
                                        </Select>
                                        <Text>'</Text>
                                        <Select size={"sm"} onChange={Targetvalue} >
                                            <option value='1'>1</option>
                                            <option value='2'> 2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'> 5</option>
                                            <option value='6'>6</option>
                                        </Select>
                                        <Text>"/</Text>
                                        <Input type={"number"} onChange={Targetvalue} size={"sm"} name="Height" />
                                        <Text>cm</Text>

                                    </Stack>
                                    <Stack display={"flex"} direction='row' >
                                        <Text>Weights:</Text>
                                        <Input type={"number"} w="50px" size={"sm"} name="weight" onChange={Targetvalue} />
                                        <Select size={"sm"} placeContent="select" w="100px" onChange={Targetvalue} name="weight">

                                            <option value='kg'> kg</option>
                                            <option value='Pounds'>Pounds</option>

                                        </Select>
                                    </Stack>
                                </Box>
                            </Box>

                            <Box m="auto" my={3} px="5" py={"8"} boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" >
                                <Text textAlign={"center"} fontSize="25px" fontWeight={"medium"}> Terms of Service & Privacy Settings</Text>
                                <Box px={5} py={2}>
                                    <Checkbox isChecked={allChecked}
                                        isIndeterminate={isIndeterminate}
                                        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}> Check All</Checkbox>
                                    <Text fontWeight={"medium"}>
                                        By checking the box below you are indicating you have read and agree to our <Text as={"span"} color={"red"}> Terms of Service</Text> and  <Text as={"span"} color={"red"}>Privacy Policy.</Text>
                                    </Text>
                                </Box>

                                <Box px={5} py={2}>
                                    <Checkbox isChecked={checkedItems[0]}
                                        onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}>  I agree to the cronometer.com <Text as={"span"} color={"red"}>Terms of Service</Text></Checkbox>
                                    <Text fontWeight={"medium"}>
                                        In order to give you the best experience using Cronometer, we need certain data permissions. (These are optional and can be updated in your settings any time.)
                                    </Text>
                                </Box>

                                <Box px={5} >
                                    <Checkbox isChecked={checkedItems[1]}
                                        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])} >I agree to receive newsletters and promotional materials.</Checkbox>

                                </Box>
                                <Box px={5}>
                                    <Checkbox isChecked={checkedItems[1]}
                                        onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}  >  I agree to receive personalized in-app ads. (You will receive less relevant, non-personalized ads if you opt out)</Checkbox>
                                </Box>
                            </Box>
                        </Box>

                        {!isDisableds ? <Input type={"submit"} w={"95%"} cursor="pointer"
                            flex={1}
                            fontSize={"lg"}
                            ml={4}
                            bg={"#67AC5B"}
                            color={"white"}
                            _hover={{
                                bg: "#67AC5B;",
                            }}
                            _focus={{
                                bg: "#67AC5B;",
                            }} opacity={"0.5"} mt={"100px"} /> : <Input type={"submit"} w={"95%"} cursor="pointer"
                                flex={1}
                                mt={"100px"}
                                fontSize={"lg"}
                                ml={4}
                                bg={"#67AC5B"}
                                color={"white"}
                                _hover={{
                                    bg: "#67AC5B",
                                }}
                                _focus={{
                                    bg: "#67AC5B",
                                }} />}

                    </form>
                </Box>

                <Box textAlign={"center"} mt={"125px"} fontSize>
                    <Text>Need help?</Text>
                    <Text>Email Support</Text>
                </Box>
            </Box>
        </Box >
    )
}

export default Signin