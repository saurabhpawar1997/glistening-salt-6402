import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../Assets/cronometer-hero-graphic.png";
import media1 from "../Assets/media-mention-1.png";
import media2 from "../Assets/media-mention-2.png";
import media3 from "../Assets/media-mention-3.png";
import ios_logo from "../Assets/ios-icon.png";
import android_logo from "../Assets/android-icon.png";
import community from "../Assets/community-icon.png";
import security from "../Assets/security-icon.png";
import nutrition from "../Assets/nutrition-icon.png";
import micronutrients from "../Assets/micronutrients-icon.png";
import diary from "../Assets/diary-icon.png";
import reports from "../Assets/reports-icon.png";
import scale from "../Assets/scale-icon.png";
import fasting from "../Assets/fasting-icon.png";
import food from "../Assets/food-icon.png";
import devices from "../Assets/devices-p-1600.png";
import crono_graphic from "../Assets/crono-pro-graphic.png";
import green_logo from "../Assets/cronometer-pro-logo-green.png";
import staff from "../Assets/cronometer-staff-2-p-1600.jpeg";
const HomePageData = () => {
  return (
    <>
      <Flex
        w={["90%", "85%", "80%", "75%"]}
        m="auto"
        size={["xs", "sm", "md", "lg"]}
        direction={["column", "column", "row"]}
      >
        <Box
          w={["90%", "90%"]}
          mt="30px"
          display={["block", "block", "none", "none"]}
          mb={["50px", "50px"]}
        >
          <Image w="100%" src={HeroImage} alt />
        </Box>
        <Box
          w={["90%", "90%", "50%", "40%"]}
          mr={["0", "0", "10%"]}
          mt={["20px","20px","50px"]}
          // m={["auto", "auto", "none", "none"]}
          textAlign={["center", "center", "none", "none"]}
        >
          <Box color="#4F4F52">
            <Heading size={["xl", "xl", "2xl", "2xl"]}>Eat smarter.</Heading>
            <Heading size={["xl", "xl", "2xl", "2xl"]}>Live better.</Heading>
          </Box>
          <Box mt="20px" color="#4F4F52">
            <Text fontSize={["xl", "xl", "2xl", "3xl"]}>
              Track your calories, exercise, biometrics and health data.
            </Text>
          </Box>
          <Box mt="30px">
            <Button
              fontSize={["lg", "xl", "2xl", "2xl"]}
              colorScheme="orange"
              p={["3", "4", "5", "6"]}
              bgColor="#FF763F"
            >
              <Link to="/signin">Sign Up - It's Free!</Link>
            </Button>
          </Box>
          <Box mt="20px" color="#4F4F52">
            <Text fontSize={["md", "lg", "xl", "xl"]}>
              Already have an account?
              <span>
                <Button
                  variant={["link", "link", "ghost", "ghost"]}
                  fontSize={["md", "lg", "xl", "xl"]}
                  _hover={{ color: "#FF763F", borderBottom: "1px solid" }}
                >
                  <Link to="/login">Log in</Link>
                </Button>
              </span>
            </Text>
          </Box>
        </Box>
        <Box
          w="40%"
          mt="30px"
          display={["none", "none", "block", "block"]}
        >
          <Image w="100%" src={HeroImage} alt />
        </Box>
      </Flex>
      <Box m="auto" w={["95%", "85%", "80%", "75%"]} mt="20px">
        <Text fontSize={["4xl", "4xl", "2xl", "2xl"]} textAlign="center">
          As Seen On
        </Text>
        <Flex
          w={["90%", "90%", "70%", "70%"]}
          m="auto"
          justifyContent="space-between"
          mt="20px"
          direction={["column", "column", "row"]}
          align={["center", "center", "none"]}
          gap={["30px", "25px", "0", "0"]}
        >
          <Box w={["70%", "70%", "30%", "25%"]}>
            <Image src={media2} alt="media2" />
          </Box>
          <Box w={["70%", "70%", "30%", "25%"]}>
            <Image src={media1} alt="media1" />
          </Box>
          <Box w={["70%", "70%", "30%", "25%"]}>
            <Image src={media3} alt="media3" />
          </Box>
        </Flex>
        <Text
          fontSize={["3xl", "3xl", "2xl", "2xl"]}
          textAlign="center"
          mt="35px"
        >
          Available on Web, iOS and Android
        </Text>
        <Flex
          w={["60%", "60%", "30%", "30%"]}
          m="auto"
          justifyContent="space-around"
          mt="30px"
          mb={["0", "0", "70px", "90px"]}
          direction={["column", "column", "row"]}
          gap={["20px", "20px", "none"]}
        >
          <Link to="">
            <Image src={ios_logo} alt="ios" w={["100%", "100%", "none"]} />
          </Link>
          <Link to="">
            <Image
              src={android_logo}
              alt="android"
              w={["100%", "100%", "none"]}
            />
          </Link>
        </Flex>
      </Box>
      <Box bgColor="#F9F8F9" color="#4F4F52">
        <Heading
          pt={["30px", "30px", "100px", "100px"]}
          textAlign="center"
          fontSize={["3xl", "3xl", "4xl"]}
        >
          Discover your nutrition
        </Heading>
        <Box
          w={["90%", "90%", "40%"]}
          m="auto"
          mt="15px"
          mb={["30px", "50px", "70px"]}
        >
          <Text fontSize="2xl" textAlign="center">
            Cronometer encourages you to not just count your calories but to
            focus on your nutrition as a whole.
          </Text>
        </Box>
        <Flex
          w={["90%", "85%", "75%"]}
          m="auto"
          justifyContent="space-evenly"
          pb={["0", "0", "100px", "130px"]}
          direction={["column", "column", "row"]}
          gap={["50px", "50px", "none"]}
        >
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="25%" m="auto" mb="10px">
              <Image src={community} alt="community" />
            </Box>
            <Heading fontSize="2xl" textAlign="center">
              Over 5 million users
            </Heading>
            <Text
              fontSize="xl"
              textAlign="center"
              mt={["5px", "10px", "15px", "20px"]}
            >
              Join the community to get tips and inspiration from other users on
              our forums and Facebook group.
            </Text>
          </Box>
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="23%" m="auto" mb="10px">
              <Image src={nutrition} alt="nutrition" />
            </Box>
            <Heading fontSize="2xl" textAlign="center">
              Accurate nutrition data
            </Heading>

            <Text
              fontSize="xl"
              textAlign="center"
              mt={["5px", "10px", "15px", "20px"]}
            >
              Be confident that the food you log has the correct nutrition data.
              We verify every food submission for accuracy.
            </Text>
          </Box>
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="25%" m="auto" mb="10px">
              <Image src={security} alt="security" />
            </Box>
            <Heading fontSize="2xl" textAlign="center">
              Data privacy & security
            </Heading>
            <Text
              fontSize="xl"
              textAlign="center"
              mt={["5px", "10px", "15px", "20px"]}
            >
              We take the security of our users' accounts seriously - we will
              never sell your account data to third parties.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box color="#4F4F52">
        <Heading
          pt={["30px", "30px", "80px", "100px"]}
          textAlign="center"
          fontSize={["3xl", "3xl", "4xl"]}
        >
          Develop healthy habits
        </Heading>
        <Box
          w={["70%", "70%", "35%", "35%"]}
          m="auto"
          mt={["10px", "11px", "13px", "15px"]}
          mb="70px"
        >
          <Text fontSize={["lg", "xl", "2xl"]} textAlign="center">
            Count your calories, ensure you're meeting nutrient targets, and see
            your progress over time.
          </Text>
        </Box>
        <Flex
          w={["90%", "85%", "75%"]}
          m="auto"
          justifyContent="space-evenly"
          pb={["0", "0", "100px"]}
          direction={["column", "column", "row"]}
          gap={["50px", "50px", "none"]}
        >
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="25%" m="auto" mb="10px">
              <Image src={micronutrients} alt="community" />
            </Box>
            <Box w={["95%", "95%", "80%"]} m="auto">
              <Heading fontSize={["xl", "xl", "2xl"]} textAlign="center">
                Track up to 82 micronutrients
              </Heading>
            </Box>
            <Text fontSize={["lg", "lg", "xl"]} textAlign="center" mt="10px">
              Log your meals and track all your macro and micronutrients.
            </Text>
          </Box>
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="25%" m="auto" mb="10px">
              <Image src={diary} alt="nutrition" />
            </Box>
            <Box w={["95%", "95%", "80%"]} m="auto">
              <Heading fontSize={["xl", "xl", "2xl"]} textAlign="center">
                Log meals, exercise and biometrics
              </Heading>
            </Box>
            <Text fontSize={["lg", "lg", "xl"]} textAlign="center" mt="10px">
              Plus, you can create custom foods, recipes, exercises and
              biometrics!
            </Text>
          </Box>
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="25%" m="auto" mb="10px">
              <Image src={reports} alt="security" />
            </Box>
            <Box w={["90%", "90%", "60%"]} m="auto">
              <Heading fontSize={["xl", "xl", "2xl"]} textAlign="center">
                Valuable reports and charts
              </Heading>
            </Box>
            <Text fontSize={["lg", "lg", "xl"]} textAlign="center" mt="10px">
              Learn how nutrients and biometrics correlate over time.
            </Text>
          </Box>
        </Flex>
        <Flex
          w={["90%", "85%", "75%"]}
          m="auto"
          justifyContent="space-evenly"
          pb={["0", "0", "100px"]}
          direction={["column", "column", "row"]}
          gap={["50px", "50px", "none"]}
          pt={["50px", "50px", "0"]}
        >
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="22%" m="auto" mb="10px">
              <Image src={scale} alt="community" />
            </Box>
            <Box w={["95%", "95%", "80%"]} m="auto">
              <Heading fontSize={["xl", "xl", "2xl"]} textAlign="center">
                Custom diet settings
              </Heading>
            </Box>
            <Box w={["95%", "95%", "80%"]} m="auto">
              <Text fontSize={["lg", "lg", "xl"]} textAlign="center" mt="10px">
                Set weight, macro & nutrient targets to meet your goals.
              </Text>
            </Box>
          </Box>
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="27%" m="auto" mb="10px">
              <Image src={fasting} alt="nutrition" />
            </Box>
            <Box w={["85%", "85%", "70%"]} m="auto">
              <Heading fontSize={["xl", "xl", "2xl"]} textAlign="center">
                Fasting timer
              </Heading>
            </Box>
            <Box w="90%" m="auto">
              <Text fontSize={["lg", "lg", "xl"]} textAlign="center" mt="10px">
                Track your intermittent fasts and see their effect over time.
              </Text>
            </Box>
          </Box>
          <Box w={["90%", "90%", "30%"]} m={["auto", "auto", "none"]}>
            <Box w="25%" m="auto" mb="10px">
              <Image src={food} alt="security" />
            </Box>
            <Box w={["90%", "90%", "60%"]} m="auto">
              <Heading fontSize={["xl", "xl", "2lx"]} textAlign="center">
                Diet support
              </Heading>
            </Box>
            <Box m="auto">
              <Text fontSize={["lg", "lg", "xl"]} textAlign="center" mt="10px">
                Whether your Keto, Vegan, or on one recommended by your doctor.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box bgColor="#F9F8F9" color="#4F4F52">
        <Box
          w={["95%", "95%", "40%", "40%"]}
          m="auto"
          pt="70px"
          mb={["30px", "40px", "60px", "70px"]}
        >
          <Text
            fontSize={["xl", "2xl", "3xl"]}
            textAlign="center"
            fontWeight="500"
          >
            Find out if you're getting the vitamins and minerals you need with
            our food diary app.
          </Text>
          <Box
            w="50%"
            m="auto"
            mt={["30px", "40px", "50px"]}
            pb={["10px", "30px", "50px"]}
          >
            <Button
              fontSize={["lg", "xl", "2xl"]}
              colorScheme="orange"
              p={["5", "6", "7"]}
              bgColor="#FF763F"
              w="100%"
            >
              <Link to="/signin">Sign Up - It's Free!</Link>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box color="#4F4F52">
        <Text
          textAlign="center"
          fontSize={["2xl", "3xl", "4xl"]}
          fontWeight="500"
        >
          Sync with Apps and Devices
        </Text>
        <Text
          textAlign="center"
          fontSize={["lg", "xl", "2xl"]}
          mt="10px"
          w={["85%", "85%", "40%"]}
          m={["auto", "auto", "none"]}
        >
          Sync Cronometer with these activity trackers, Apple Health, Google Fit
          and Samsung Health.
        </Text>
        <Box
          w={["90%", "90%", "60%"]}
          m="auto"
          mt="30px"
          pb={["40px", "60px", "80px", "100px"]}
        >
          <Image src={devices} />
        </Box>
        <Box
          color="#4F4F52"
          pt={["40px", "50px", "60px", "70px"]}
          pb={["40px", "50px", "60px", "70px"]}
          borderTop="1px solid lightgray"
          w={["90%", "90%", "75%"]}
          m="auto"
        >
          <Heading textAlign="center" fontSize="4xl">
            Cronometer Reviews
          </Heading>
          <Text textAlign="center" fontSize="2xl" mt="10px">
            Check us out in your app store.
          </Text>
        </Box>
      </Box>
      <Box w={["95%", "95%", "75%"]} m="auto" className="shadow">
        <Flex
          justifyContent="space-evenly"
          pb="50px"
          direction={["column", "column", "row"]}
        >
          <Box
            w={["90%", "90%", "40%"]}
            mt={["70px", "70px", "0px"]}
            m={["auto", "auto", "none"]}
          >
            <Text
              fontSize={["xl", "2xl", "3xl"]}
              color="#FF763F"
              mt={["30px", "70px", "120px"]}
            >
              I wasn't the only one concerned about the unreliability of the
              macros in both MyFitnessPal and Carb Manager.
            </Text>
            <Box
              align="center"
              mt={["20px", "40px", "50px", "60px"]}
              mb={["30px", "30px", "0"]}
            >
              <Link to="">
                <Image src={ios_logo} alt="ios" />
              </Link>
            </Box>
          </Box>
          <Box
            w={["90%", "90%", "46%"]}
            mt={["0px", "0px", "30px"]}
            m={["auto", "auto", "none"]}
          >
            <Text
              fontSize={["md", "lg", "xl"]}
              align={["justify", "justify", "none"]}
            >
              I started Keto in July. MyFitnessPal seemed pretty cool. Spent
              hours setting it up and entering recipes only to discover the
              macros were not reliable due to all the contributions by the
              community. I was so frustrated. Then I found a review of several
              apps (on the Keto Mojo website) and discovered I wasn't the only
              one concerned about unreliability of the macros on both MFP and
              CarbManager (tried that too). Behold Cronometer! I love this app.
              It draws from nutrition databases with minimal community
              contributions so much, much more reliability. There are many more
              free features. The user interface is easy to navigate. I'm very
              happy with Cronometer.
            </Text>
            <Text fontSize="lg" mt="30px">
              iOS Review
            </Text>
            <Text fontStyle="italic">September 23, 2019</Text>
          </Box>
        </Flex>
      </Box>
      <Box
        w={["95%", "95%", "75%"]}
        m="auto"
        className="shadow"
        mt={["40px", "50px", "60px", "70px"]}
      >
        <Flex
          justifyContent="space-evenly"
          pb={["30px", "40px", "50px"]}
          direction={["column", "column", "row"]}
        >
          <Box
            w={["90%", "90%", "46%"]}
            mt="30px"
            m={["auto", "auto", "none"]}
            mb={["30px", "30px", "0"]}
          >
            <Text fontSize={["md", "lg", "xl"]}>
              This app is my dream! I've been on the hunt for something that can
              track my daily nutritional needs and the majority of apps seem to
              think that only means macros. This tracks EVERYTHING! Getting my
              daily vitamins through food is so important to me and this has
              taken a HUGE load off of my plate. I bought gold within minutes.
              This is set up great, easy to use, links with my FitBit. I could
              go on and on.
            </Text>
            <Text fontSize="lg" mt="30px">
              Android Review
            </Text>
            <Text fontStyle="italic">November 23, 2020</Text>
          </Box>
          <Box
            w={["90%", "90%", "40%"]}
            mt={["50px", "60px", "70px"]}
            m={["auto", "auto", "none"]}
          >
            <Text fontSize={["xl", "2xl", "3xl"]} color="#FF763F">
              Cronometer tracks EVERYTHING! ... It's easy to use and links with
              my FitBit.
            </Text>
            <Box align="center" mt={["20px", "40px", "50px", "60px"]}>
              <Link to="">
                <Image src={android_logo} alt="ios" />
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box
        mt={["50px", "50px", "100px"]}
        bgColor="#F9F8F9"
        color="#4F4F52"
        pb={["50px","60px","70px"]}
      >
        <Flex
          w={["90%", "90%", "70%"]}
          m="auto"
          pt={["30px", "30px", "60px"]}
          direction={["column", "column", "row"]}
          gap={["20px", "20px", "0"]}
        >
          <Box w={["90%", "90%", "35%"]} m={["auto", "auto", "none"]}>
            <Image src={crono_graphic} alt="crono-pro-graphic" />
          </Box>
          <Box>
            <Box w={["90%", "90%", "35%"]} m="auto">
              <Image src={green_logo} alt="cronometer pro logo" />
            </Box>
            <Heading textAlign="center" fontSize={["xl","xl","2xl"]} mt="25px">
              Are you a healthcare professional?
            </Heading>
            <Box w={["90%","90%","75%"]} m="auto">
              <Text fontSize={["lg","lg","2xl"]} mt="25px" textAlign={["center","center","none"]}>
                Check out our software designed for nutritionists, dietitians,
                research teams, schools, and hospitals.
              </Text>
            </Box>
            <Box align="center" mt="25px">
              <Button
                border="1px solid green"
                bgColor="white"
                color="#FF763F"
                p={["4","5","6"]}
                fontSize={["md","lg","xl"]}
                w={["50%","50%","30%"]}
              >
                <Link to="">Learn About Pro</Link>
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box color="#4F4F52" pb={["50px","50px","100px"]}>
        <Heading pt={["40px","60px","100px"]} textAlign="center" fontSize={["2xl","3xl","4xl"]}>
          We are Canadian
        </Heading>
        <Box w={["90%","90%","38%"]} m="auto" mt="15px" mb={["30px","30px","70px"]}>
          <Text fontSize={["lg","xl","2xl"]} textAlign="center">
            Independently owned and operated by people who care about their
            users' nutrition.
          </Text>
        </Box>
        <Box w={["80%","80%","65%"]} m="auto">
          <Image src={staff} alt="staff" borderRadius="5" mb={["20px","30px","40px"]} />
          <Box w="92%" m="auto">
            <Text fontSize={["md","md","xl"]} textAlign={["none","none","center"]}>
              Our headquarters are based in the idyllic mountain town of{" "}
              <span>
                <Button variant="link" fontSize={["md","md","xl"]} color="#FF763F">
                  <Link to="">Revelstoke, BC, Canada.</Link>
                </Button>
              </span>
              We are a team of over 25 professionals brought together by a love
              of nutrition, skiing, biking and the great outdoors.
            </Text>
          </Box>
          <Box align="center" mt="40px">
            <Button
              color="#FF763F"
              border="1px solid #FF763F"
              bgColor="white"
              p="5"
              w={["50%","50%","25%"]}
              fontSize={["lg","lg","xl"]}
            >
              <Link to="/about">About Us</Link>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        borderTop="1px solid lightgray"
        align="center"
        w={["90%", "90%","75%"]}
        m="auto"
        pb="50px"
      >
        <Text fontSize={["xl","xl","2xl"]} color="#4F4F52" mt={["30px","40px","50px"]}>
          Help us spread the good word about nutrition and become an affiliate.
        </Text>
        <Button
          color="#FF763F"
          border="1px solid #FF763F"
          bgColor="white"
          p={["3","4","5"]}
          w={["50%","50%","20%"]}
          fontSize={["md","md","xl"]}
          mt="20px"
        >
          <Link to="/about">Become an Affiliate</Link>
        </Button>
      </Box>
    </>
  );
};

export default HomePageData;
