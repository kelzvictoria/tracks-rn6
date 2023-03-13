import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, btnText, onSubmit, error }) => {
    const [email, setEmail] = useState("kelzvictoria@gmail.com");
    const [password, setPassword] = useState("Kazeem_25")
    return <>
        <Spacer>
            <Text style={styles.title} h3>{headerText}</Text>   
        </Spacer>

        { error ? <Text style={ styles.error }>{error}</Text> : null }
        
        <Input 
            containerStyle={styles.input} 
            value={email}
            label="Email" 
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
        />
        
        <Input 
            containerStyle={styles.input} 
            label="Password" 
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
        />
       
        <Spacer>
            <Button title={btnText} onPress={() => { 
                onSubmit(email, password); 
            }} /> 
        </Spacer>
    </>
}

const styles = StyleSheet.create({
    input: {
        //marginLeft: 7.5,
        //marginRight: 15
    },
    title: {
        marginBottom: 25
    },
    error: {
        color: 'red',
        marginHorizontal: 10, 
        marginBottom: 20, 
        marginTop: -15
    },
    link: {
        color: '#0984e3',
        marginHorizontal: 10
    }
})

export default AuthForm