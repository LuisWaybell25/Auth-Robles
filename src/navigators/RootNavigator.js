import React, { useState, useEffect } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

import Home from '../screens/loggedscreens/Home';

// Firebase auth to check if user is logged
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from '../utils/firebaseConfig';

const RootNavigator = () => {

  // Check is user is logged
  const [hasLogged, setHasLogged] = useState(false); // null

  useEffect(() => {
    const auth = getAuth(firebaseConfig);

    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, [])

  const handleScreens = () => {
    if(hasLogged) {
      return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      )
    } else {
      return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        </Stack.Navigator>
      )
    }
  } 

  return (
    <>
      {handleScreens()}
    </>
  )

  
}

export default RootNavigator