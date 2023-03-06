import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";

import { Image } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const LogoTitle = () => {
  return (
    <Image 
      style={{width: 40, height: 40}}
      source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
    />
  )
}

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: 'Inicio',
            headerStyle: {
              backgroundColor: '#f4511e'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              headerTitle: (props) => <LogoTitle {...props} />,
              headerStyle: {
                backgroundColor: '#F1E011'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
            }}
          />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}