import React, {useContext, useState} from 'react'
import {View, Text, TouchableOpacity, Platform, StyleSheet, Dimensions, TextInput} from 'react-native';
import {AuthContext} from './AuthProvider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function Signup() {
    
    
 const windowWidth = Dimensions.get('window').width;
 const windowHeight = Dimensions.get('window').height;

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()


    const {} = useContext(AuthContext);

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
                value={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                autoCorrect={false}
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
                value={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholder="Password"
                secureTextEntry={true}
            />
        </View>
    )

    const confirmPasswordInput = () => (
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
                value={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholder="Password"
                secureTextEntry={true}
            />
        </View>
    )
    return (
        <View style={{
            backgroundColor: "#f9fafd",
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
            paddingTop: 50
        }}>
            <Text style={{
                fontSize: 28,
                marginBottom: 10,
                color:  '#051d5f'
            }}>Create an account</Text>
            
            {emailInput()}
            {passwordInput()}
            {confirmPasswordInput()}

            <TouchableOpacity style={{
                marginTop: 10,
                width: '100%',
                height: windowHeight / 15,
                backgroundColor: "#2e64e5",
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 3
                }}
                onPress={() => register(email, password)}
                >
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color:"#fff"
                }}>Sign Up</Text>
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
                 backgroundColor: '#e6eaf4'
             }}>
                 <View style={{
                     width: 30,
                     justifyContent:"center",
                     alignItems: 'center'
                 }}>
                     <FontAwesome name="facebook" style={{fontWeight: 'bold'}} size={22} color="#4867aa"/>
                 </View>
                 <View style={{
                     flex: 1,
                     justifyContent:'center',
                     alignItems: 'center'
                 }}>
                     <Text style={{
                         fontSize: 18,
                         fontWeight: 'bold'
                     }}>Sign In with Facebook</Text>
                 </View>
             </TouchableOpacity>

             <TouchableOpacity style={{
                 marginTop: 10,
                 width: "100%",
                 height: windowHeight / 15,
                 padding: 10,
                 flexDirection: 'row',
                 borderRadius: 3,
                 backgroundColor: '#f5e7ea'
             }}>
                 <View style={{
                     width: 30,
                     justifyContent:"center",
                     alignItems: 'center'
                 }}>
                     <FontAwesome name="google" style={{fontWeight: 'bold'}} size={22} color="#de4d41"/>
                 </View>
                 <View style={{
                     flex: 1,
                     justifyContent:'center',
                     alignItems: 'center'
                 }}>
                     <Text style={{
                         fontSize: 18,
                         fontWeight: 'bold'
                     }}>Sign In with Google</Text>
                 </View>
             </TouchableOpacity>

             <TouchableOpacity style={{
                 marginTop: 10,
                 width: "100%",
                 height: windowHeight / 15,
                 padding: 10,
                 flexDirection: 'row',
                 borderRadius: 3,
                 backgroundColor: 'black'
             }}>
                 <View style={{
                     width: 30,
                     justifyContent:"center",
                     alignItems: 'center'
                 }}>
                     <FontAwesome name="github" style={{fontWeight: 'bold'}} size={22} color="white"/>
                 </View>
                 <View style={{
                     flex: 1,
                     justifyContent:'center',
                     alignItems: 'center'
                 }}>
                     <Text style={{
                         fontSize: 18,
                         fontWeight: 'bold',
                         color: 'white'
                     }}>Sign In with Github</Text>
                 </View>
             </TouchableOpacity>
                </View>
             ) : null}
        </View>
    )
}

export default Signup
