import React, {useContext} from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline, Circle } from 'react-native-maps'

const TrackDetail = ({navigation, route}) => {
    const { state } = useContext(TrackContext)
    const _id = route.params._id
    const track = state.find(t => t._id === _id)

    return <View style={styles.container}>
        <Text style={{fontSize: 48}}>{track.name}</Text>
        <MapView
            initialRegion={{
                ...track.locations[0].coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
             }}
             style={styles.map}
        >
            <Polyline coordinates={track.locations.map(l => l.coords)} />
        </MapView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    },
    map: {
        height: 300
    }
})

export default TrackDetail;