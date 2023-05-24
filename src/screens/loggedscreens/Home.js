import { View } from 'react-native'
import React from 'react'

import {
  Button
} from "native-base";

// Firebase imports
import { getAuth } from "firebase/auth";
import firebaseConfig from '../../utils/firebaseConfig';

const Home = () => {

  const logOut = () => {
    getAuth(firebaseConfig).signOut().then(() => {
      
    }).catch((error) => {
      
    });
  }

  return (
    <View>
      <Button mt="2" colorScheme="indigo" onPress={logOut}>
        Log Out
      </Button>
    </View>
  )
}

export default Home