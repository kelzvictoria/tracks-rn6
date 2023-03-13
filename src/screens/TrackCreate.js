import '../_mockLocation';
import React, { useContext, useCallback } from "react";
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements'
//import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import Map from "../components/Map";
import Spacer from "../components/Spacer";
import TrackForm from '../components/TrackForm';

import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';
const TrackCreate = () => {
    const isFocused = useIsFocused();
    const { addLocation, state: {recording} } = useContext(LocationContext)
    const callback = useCallback(location => addLocation(location, recording), [
        recording
    ])
    const [error] = useLocation(isFocused  || recording, callback)
    return <SafeAreaView style={styles.container}>
        {/* <Spacer>
            <Text style={{marginTop: 15}} h3>Create a Track</Text>
        </Spacer> */}
        
        <Map />
        
        { error ? <Text style={{
            fontSize: 16,
            color: 'red'
        }}>Please enable location services.</Text> : null }

        <TrackForm />

    </SafeAreaView>
}

TrackCreate.navigationOptions = {
    title: "Add Track",
    tabBarIcon: <FontAwesome name='plus' size={20} />
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    }
})

export default //withNavigationFocus(
    TrackCreate
    //) ;