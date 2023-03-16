import React from 'react'
import { NativeBaseProvider } from "native-base";

import RootComponent from './src/components/RootComponent';

export default function App() {
  return (
    <NativeBaseProvider>
      <RootComponent />
    </NativeBaseProvider>
  );
}