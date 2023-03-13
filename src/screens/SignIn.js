import React, { useContext } from "react";
import { View, StyleSheet } from 'react-native';
//import { NavigationEvents } from 'react-navigation'
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext"

const SignIn = ({ isFocused }) => {
    const { signIn, state, clearError } = useContext(AuthContext)
    if (isFocused){
        clearError()
    }
    return <View style={styles.container}>
        {/* <NavigationEvents onWillFocus={clearError} /> */}
        <AuthForm 
            headerText="Sign In on Tracker" 
            btnText="Sign In" 
            onSubmit={signIn} 
            error={state.error}
        />
        <NavLink 
            routeName="SignUp" 
            title="Don't have an account? Sign up instead" 
        />
    </View>
}

SignIn.navigationOptions = { 
    headerShown: false,
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 250
    }
})

export default SignIn;