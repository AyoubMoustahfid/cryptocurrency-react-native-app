import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet, Image, Platform, ScrollView, TouchableOpacity, Dimensions, TextInput } from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from './AuthProvider'

import auth from '@react-native-firebase/auth';



function Login(props) {
    
    
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    

 
    const emailInput = () => (
        <View style={{
            marginTop: 5,
            marginBottom: 10,
            width: '100%',
            height: windowHeight / 15,
            borderColor: '#ccc',
            borderRadius: 3,
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff'
        }}>
            <View style={{
                padding: 10,
                height:"100%",
                justifyContent: 'center',
                alignItems: 'center',
                borderRightColor: '#ccc',
                borderRightWidth: 1,
                width:50
            }}>
                <AntDesign name="user" size={25} color="#666" />
            </View>
            <TextInput
                value={email}
                style={{
                    padding: 10,
                    flex: 1,
                    fontSize: 16,
                    color: '#333',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Email"
            />
        </View>

    )

    const passwordInput = () => (
        <View style={{
            marginTop: 5,
            marginBottom: 10,
            width: '100%',
            height: windowHeight / 15,
            borderColor: '#ccc',
            borderRadius: 3,
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#fff'
        }}>
            <View style={{
                padding: 10,
                height:"100%",
                justifyContent: 'center',
                alignItems: 'center',
                borderRightColor: '#ccc',
                borderRightWidth: 1,
                width:50
            }}>
                <AntDesign name="lock" size={25} color="#666" />
            </View>
            <TextInput
                value={email}
                style={{
                    padding: 10,
                    flex: 1,
                    fontSize: 16,
                    color: '#333',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                placeholder="Password"
                secureTextEntry={true}
            />
        </View>
    )
    return (
        <View>
            <ScrollView
            contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                    paddingTop: 50
                }}
            >
                <Image
                    source={require('../assets/images/logo.png')}
                    style={{
                        height: 150,
                        width: 150,
                        resizeMode: 'cover'
                    }}
                />

               {emailInput()}

               {passwordInput()}

                <TouchableOpacity style={{
                    marginTop: 10,
                    width: '100%',
                    height: windowHeight / 15,
                    backgroundColor: "#2e64e5",
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color:"#fff"
                    }}>Sign In</Text>
                </TouchableOpacity>
                
                

                {Platform.OS === "android" ? (
                   <View>
                   <TouchableOpacity style={{
                    marginTop: 10,
                    width: "100%",
                    height: windowHeight / 15,
                    padding: 10,
                    flexDirection: 'row',
                    borderRadius: 3,
                    backgroundColor: '#1DA1F2'
                    }} 
                    onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Twitter!'))}
                    >
                    <View style={{
                        width: 30,
                        justifyContent:"center",
                        alignItems: 'center'
                    }}>
                        <FontAwesome name="twitter" style={{fontWeight: 'bold'}} size={22} color="#FFF"/>
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent:'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color:'#fff'
                        }}>Sign In with Twiter</Text>
                    </View>
                </TouchableOpacity>

        
                   </View>
                ) : null}

                <TouchableOpacity style={{marginBottom: 35}}
                    onPress={() => props.history.push('/signup')}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "500",
                        color:'#2e64e5'
                    }}>Don't have a account? Create here</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Login
