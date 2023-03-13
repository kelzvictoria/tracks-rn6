import React, { useContext } from "react";
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements'
import { Button } from 'react-native-elements';
// import { SafeAreaView } from 'react-navigation'
import Spacer from "../components/Spacer";
import { Context as AuthContext } from '../context/AuthContext' 
import { FontAwesome } from '@expo/vector-icons'

const Account = () => {
    const { signOut } = useContext(AuthContext)
    return <SafeAreaView 
        forceInset={{ top: 'always' }} 
        style={styles.container}
    >
         <Spacer>
            <Text style={{marginTop: 15}} h3>Account</Text>
        </Spacer>
        <Spacer>
            <Button title="Sign Out" onPress={ signOut } />
        </Spacer>
    </SafeAreaView>
}

// Account.navigationOptions = { 
//     headerShown: false,
// };

Account.navigationOptions = {
    title: "Add Track",
    tabBarIcon: <FontAwesome name='gear' size={20} />
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    }
})

export default Account;