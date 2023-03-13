import React, { useContext, useState } from "react";
import { Input, Button, Text } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import Spacer from "./Spacer";
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const { 
        startRecording, 
        stopRecording, 
        changeTrackName,
        state: {
            trackName,
            recording,
            locations
        }
    } = useContext(LocationContext)

    const [saveTrack] = useSaveTrack()

    const handleRecording = () => {
       if (recording) { 
            stopRecording()
        } else{ 
            startRecording()
        }
    }

    return <>
        <Spacer>
            <Input 
                value={trackName}
                placeholder="Enter a name" 
                onChangeText={changeTrackName} 
            />
        </Spacer>
        
        <Spacer>
            <Button 
                title={ !recording ? "Start" : "Stop" } 
                onPress={() => {
                    handleRecording()
                }} 
            />
        </Spacer>
        
        {
          !recording && locations.length 
            ?  <Spacer>
                  <Button title="Save" onPress={saveTrack} />
               </Spacer>
            : null
        }
       
    </>
}

const styles = StyleSheet.create({

})

export default TrackForm;