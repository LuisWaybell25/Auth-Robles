import React, { useState } from "react";
import {
  Center,
  Box,
  Heading,
  VStack,
  HStack,
  FormControl,
  Button,
  Input,
  Link,
  Text,
} from "native-base";

// Firebase imports
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../../utils/firebaseConfig';

const Login = ({ navigation }) => {

  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const login = () => {
    const auth = getAuth(firebaseConfig);
    signInWithEmailAndPassword(auth, mail, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      console.log(user);
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
    });
  }

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Login
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input 
              onChangeText={text => setMail(text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input 
              type="password" 
              onChangeText={text => setPassword(text)}
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={login}>
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("Register")}
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
