import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Pages/LoginSignup/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupPhone from './src/Pages/LoginSignup/Signup/SignupPhone';
import SignupOtp from './src/Pages/LoginSignup/Signup/SignupOtp';
import SignupRestDetails from './src/Pages/LoginSignup/Signup/SignupRestDetails';
import ForgotPasswordPhone from './src/Pages/LoginSignup/Forgotpassword/ForgotPasswordPhone';
import ForgotPasswordReset from './src/Pages/LoginSignup/Forgotpassword/ForgotPasswordReset';
import ForgotPasswordOtp from './src/Pages/LoginSignup/Forgotpassword/ForgotPasswordOtp';
import Home from './src/Pages/Home/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
         <Stack.Navigator screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignupPhone" component={SignupPhone} />
        <Stack.Screen name="SignupOtp" component={SignupOtp} />
        <Stack.Screen name="SignupRestDetails" component={SignupRestDetails} />

        <Stack.Screen name="ForgotPasswordPhone" component={ForgotPasswordPhone} />
        <Stack.Screen name="ForgotPasswordOtp" component={ForgotPasswordOtp} />
        <Stack.Screen name="ForgotPasswordReset" component={ForgotPasswordReset} />
        <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
