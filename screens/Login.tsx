import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export default function Login({navigation}: any) {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '752408920937-1nto1uc4nja623d360rj965vju8dqobk.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    navigation.navigate('NewsFeed');
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>SIGN IN</Text>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 200,
  },
  titleContainer: {
    fontSize: 50,
    fontWeight: '700',
    fontFamily: 'sans-serif',
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'orange',
    paddingLeft: 20,
    width: '80%',
  },
  btnContainer: {
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  btnTxt: {
    fontSize: 16,
    fontFamily: 'sans-serif',
    fontWeight: '400',
    color: 'white',
  },
});
