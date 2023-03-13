import React, { useContext } from "react";
import { View, StyleSheet } from 'react-native';
//import { NavigationEvents } from 'react-navigation'
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext"

const SignUp = ({ isFocused }) => {
    const { signUp, state, clearError } = useContext(AuthContext);
    if (isFocused){
        clearError()
    }
    return <View style={styles.container}>
        {/* <NavigationEvents onWillFocus={clearError} /> */}
        <AuthForm 
            headerText="Sign Up for Tracker" 
            btnText="Sign Up" 
            onSubmit={signUp} 
            error={state.error}
        />
        <NavLink 
            routeName="SignIn" 
            title="Already have an account ? Sign in instead" 
        />
    </View>
}

SignUp.navigationOptions = { 
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

export default SignUp;