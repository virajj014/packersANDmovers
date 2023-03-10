import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { fullbg1, head1, padding10, text1, formcont1, label, fontcont1in, input, colors, formcont2, link1, button, link21, link22 } from '../../../CommonStyles/Theme'
import logo from '../../../Media/Images/whitelogofull.png'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Login = ({navigation}) => {
    return (
        <View style={fullbg1}>
            <View style={styles.s1}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.s2}>
                <View style={padding10} />
                <Text style={head1}>Login</Text>
                <Text style={text1}>Sign In to continue</Text>
                <View style={padding10} />
                <View style={formcont1} >
                    <Text style={label}>Mobile Number</Text>
                    <View style={fontcont1in}>
                        <FontAwesome5 name="mobile" size={20} color={colors.primary} />
                        <TextInput style={input} placeholder='Enter Your Mobile Number' placeholderTextColor={
                            colors.secondary
                        }/>
                    </View>
                </View>

                <View style={formcont1} >
                    <Text style={label}>Password</Text>
                    <View style={fontcont1in}>
                    <FontAwesome name="user"  size={15} color={colors.primary} />
                        <TextInput style={input} placeholder='Enter Your Password' placeholderTextColor={
                            colors.secondary
                        }
                        secureTextEntry={true}
                        />
                    </View>
                </View>

                <View style={formcont1}>
                    <Text style={link1}
                    onPress={() => navigation.navigate('ForgotPasswordPhone')}
                    >
                        Forgot Password?</Text>
                </View>

                <Text style={button}
                onPress={() => navigation.navigate('Home')}
                >
                    Log In
                </Text>

                <Text style={link21}>
                    Don't have an account? <Text style={link22}
                    onPress={() => navigation.navigate('SignupPhone')}
                    >Create a new account</Text>
                </Text>
            </View>
        </View>
    )
}

export default Login
const styles = StyleSheet.create({
    s1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // height: '70%',
    },
    logo: {
        width: 300,
        height: 200,
    },
    s2: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        height: '50%',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    }
})