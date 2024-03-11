import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, TouchableOpacity, StyleSheet, Dimensions, Text } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
 
WebBrowser.maybeCompleteAuthSession();
 
const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
   
    <TouchableOpacity style={styles.loginButton}  onPress={onPress} ><Text style={{fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white',}}>Login with Google</Text></TouchableOpacity>
  );
}
export default SignInWithOAuth;
const styles = StyleSheet.create({
  loginButton: {
    marginTop: 15,
    width: Dimensions.get('screen').width * 0.91,
    backgroundColor: '#3a86ff',
    padding: 7,
    borderRadius: 20
  }
})
