import React, {useContext, memo, useEffect} from "react";
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native'
//import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { Context as TrackContext } from "../context/TrackContext"
import { useIsFocused } from '@react-navigation/native';

const TrackList = memo(({ navigation}) => {
    const { fetchTracks, state } = useContext(TrackContext)
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused){
            console.log("fetch tracks");
            fetchTracks()
        }
    }, [isFocused])
 
    return <View style={styles.container}>
        {/* <NavigationEvents onWillFocus={fetchTracks} /> */}
        <FlatList 
            data={state}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => <TouchableOpacity
                onPress = {() => navigation.navigate('TrackDetail', {
                    _id: item._id
                   // track: item
                })}
            >
                <ListItem>
                    <ListItem.Content>
                      <ListItem.Title>{item.name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </TouchableOpacity> }
        />
    </View>
});

TrackList.navigationOptions = {
    title: "Tracks"
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    }
})

export default TrackList;