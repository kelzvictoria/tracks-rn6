import React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import Spacer from "./Spacer";
//import { withNavigation } from 'react-navigation'
import { useNavigation } from '@react-navigation/native'

const NavLink = ({ routeName, title }) => {
    const navigation = useNavigation()
    return <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
    <Spacer/>
    <Text style={styles.link}>{title}</Text>
</TouchableOpacity>
}

const styles = StyleSheet.create({
    link: {
        color: '#0984e3',
        marginHorizontal: 10
    }
})

export default NavLink;