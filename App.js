// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
// import SignInWithOAuth from './App/Components/SignInWithOAuth';
// import Home from './App/Screens/Home';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";

export default function App() {
  return (
    <ClerkProvider
      publishableKey={"pk_test_ZmFjdHVhbC1hbnQtMTkuY2xlcmsuYWNjb3VudHMuZGV2JA"}
    >
      <SignedIn>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </SignedIn>
      <SignedOut>
        <SafeAreaView style={styles.loginContainer}>
          <Login />
        </SafeAreaView>
      </SignedOut>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container:{
    flex:1
  }
});
