import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios'
import styles from "./styles";

export default function Login({navigation}) {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('') 
    const [mensagem, setMensagem] = useState('')
    
    useEffect(()=>{
        AsyncStorage.setItem('token', token)
            .then(
                ()=>{
                    if(token != null){
                        console.log('Token Login:', token)
                    }
                }
            )
            .catch(
                (error)=>{
                    console.error('Erro ao salvar o token', error)
                }
            )
    },[token])

    const logar = async ()=>{
        try{
            const response = await axios.post(
                'http://127.0.0.1:8000/api/token/',
                {
                    username: user,
                    password: password
                }
            )
            console.log(response.data.access)
            setToken(response.data.access)
            navigation.navigate('Home') 
        }
        catch(error){
            console.error(error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.users}>
                <Text style={styles.text}>USER:</Text>
                <TextInput
                    style={styles.input}
                    value={user}
                    onChangeText={(e) => setUser(e)}
                    placeholder="User"
                    placeholderTextColor="#8f5863"
                />

                <Text style={styles.text}>PASSWORD:</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="#8f5863"
                />

                <View style={styles.boxEnter}>
                    <Pressable style={styles.btn} onPress={logar}>
                        <Text style={styles.btnText}>ENTER</Text>
                    </Pressable>

                    <Pressable style={styles.btn}>
                        <Text style={styles.btnText}>REGISTER</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}