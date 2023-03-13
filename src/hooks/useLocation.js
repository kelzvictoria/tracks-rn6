import { useState, useEffect } from 'react';
import { 
    Accuracy, 
    requestForegroundPermissionsAsync, 
    watchPositionAsync} from 'expo-location';

export default (shouldTrack, callback) => {
    //console.log({ shouldTrack });
    const [ error, setError ] = useState(null)
    //const [subscriber, setSubscriber] = useState(null);

    useEffect(() => {
        let subscriber
        const startWatching = async () => {
            try {
              const { granted } = await requestForegroundPermissionsAsync()
              subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
              }, callback)
    
              if (!granted) {
                throw new Error('Location permission not granted');
              }
            } catch (e) {
                setError(e)
            }
        }

        if (shouldTrack){
            startWatching()
        } else {
            if (subscriber){
                subscriber.remove();
            }
            subscriber = null
        }

        return () => {
            if (subscriber){
                subscriber.remove()
            }
        }
      
    }, [shouldTrack, callback])

    return [error]
}