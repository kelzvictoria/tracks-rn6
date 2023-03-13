import { useContext } from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Context as AuthContext } from "./src/context/AuthContext"

import Account from './src/screens/Account';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import TrackCreate from './src/screens/TrackCreate';
import TrackDetail from './src/screens/TrackDetail';
import TrackList from './src/screens/TrackList';

import { FontAwesome } from '@expo/vector-icons'

const AuthStack = createStackNavigator();
const TrackStack = createStackNavigator();
const TabNavigator = createMaterialBottomTabNavigator()

const TrackStackNavigator = () => <TrackStack.Navigator screenOptions={{ headerTitle: "Tracks" }}>
    <TrackStack.Screen name="TrackList" component={TrackList} />
    <TrackStack.Screen name="TrackDetail" component={TrackDetail} />
</TrackStack.Navigator>

const RootNavigator = () => {
    const {state: {token} } = useContext(AuthContext)
    
    let isLoggedIn = token ? true : false
    if(!isLoggedIn){
       return <AuthStack.Navigator
       screenOptions={{
        headerShown: false
      }}
       >
        <AuthStack.Screen name='SignIn' component={SignIn} />
        <AuthStack.Screen name='SignUp' component={SignUp} />
    </AuthStack.Navigator>
    } else {
        return <TabNavigator.Navigator>
            <TabNavigator.Screen
             name='trackListFlow' 
             component={TrackStackNavigator} 
             options={() => ({
                tabBarStyle: {
                    backgroundColor: 'red',
                  },
                title: 'Tracks',
                tabBarIcon: <FontAwesome name='th-list' size={20} />
             })}
             />
            <TabNavigator.Screen name='TrackCreate' component={TrackCreate} />
            <TabNavigator.Screen name='Account' component={Account} />
        </TabNavigator.Navigator>
    }
}

export default RootNavigator