import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {View} from 'react-native'
import { LoginManager, AccessToken } from 'react-native-fbsdk';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
  
    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          login: async (email, password) => {
            try {
              await auth().signInWithEmailAndPassword(email, password);
            } catch (e) {
              console.log(e);
            }
          },
          fbLogin: async () =>  {
                try{
                    // Attempt login with permissions
                    const result = await LoginManager.logInWithPermissions(['public_profil', 'email']);

                    if(result.isCancelled){
                        throw 'User cancelled the login process'
                    }

                    // Once signed in, get the users AccesToken
                    const deta = await AccesToken.getCurrentAccesToken();

                    if(!deta){
                        throw 'Someting went wrong obtainin access token'
                    }

                       // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(facebookCredential)
            // Use it only when user Sign's up, 
            // so create different social signup function
            // .then(() => {
            //   //Once the user creation has happened successfully, we can add the currentUser into firestore
            //   //with the appropriate details.
            //   console.log('current User', auth().currentUser);
            //   firestore().collection('users').doc(auth().currentUser.uid)
            //   .set({
            //       fname: '',
            //       lname: '',
            //       email: auth().currentUser.email,
            //       createdAt: firestore.Timestamp.fromDate(new Date()),
            //       userImg: null,
            //   })
            //   //ensure we catch any errors at this stage to advise us if something does go wrong
            //   .catch(error => {
            //       console.log('Something went wrong with added user to firestore: ', error);
            //   })
            // })
            //we need to catch the whole sign up process if it fails too.
            .catch(error => {
                console.log('Something went wrong with sign up: ', error);
            });
                }catch(error){
                    console.log(error);
                }
          },
          register: async (email, password) => {
            try {
              await auth().createUserWithEmailAndPassword(email, password)
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                firestore().collection('users').doc(auth().currentUser.uid)
                .set({
                    fname: '',
                    lname: '',
                    email: email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    userImg: null,
                })
                //ensure we catch any errors at this stage to advise us if something does go wrong
                .catch(error => {
                    console.log('Something went wrong with added user to firestore: ', error);
                })
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                  console.log('Something went wrong with sign up: ', error);
              });
            } catch (e) {
              console.log(e);
            }
          },
          logout: async () => {
            try {
              await auth().signOut();
            } catch (e) {
              console.log(e);
            }
          },
        }}>
        {children}
      </AuthContext.Provider>
    );
  };


