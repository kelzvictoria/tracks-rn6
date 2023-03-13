import { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { Provider as AuthProvider, Context as AuthContext } from "./src/context/AuthContext"
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TrackContext'

import { setNavigator } from './src/navigationRef'
import RootNavigator from './createRouteNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  return (
    <TrackProvider>
        <LocationProvider>
          <AuthProvider>
            <NavigationContainer  ref={(navigator) => setNavigator(navigator)} >
             {/* <App ref={(navigator) => setNavigator(navigator)} /> */}
             <RootNavigator />
             </NavigationContainer>
          </AuthProvider>
        </LocationProvider>
    </TrackProvider>

  )
}
