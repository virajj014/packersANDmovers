import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { fullbg1, head1, padding10, text1, formcont1, label, fontcont1in, input, colors, formcont2, link1, button, link21, link22 } from '../../../CommonStyles/Theme'
import logo from '../../../Media/Images/whitelogofull.png'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const SignupRestDetails = ({ navigation }) => {
    return (
        <View style={fullbg1}>
            <View style={styles.s1}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.s2}>
                <View style={padding10} />
                <Text style={head1}>Signup</Text>
                <Text style={link21}>
                    already Registered? <Text style={link22}
                        onPress={() => navigation.navigate('Login')}
                    >Log in here</Text>
                </Text>
                <View style={formcont1} >
                    <Text style={label}>Name</Text>
                    <View style={fontcont1in}>
                        <FontAwesome name="user" size={15} color={colors.primary} />
                        <TextInput style={input} placeholder='Enter Your Name' placeholderTextColor={
                            colors.secondary
                        } />
                    </View>
                </View>


                <View style={formcont1} >
                    <Text style={label}>Email</Text>
                    <View style={fontcont1in}>
                        <Entypo name="email" size={15} color={colors.primary} />
                        <TextInput style={input} placeholder='Enter Your Email' placeholderTextColor={
                            colors.secondary
                        } />
                    </View>
                </View>

                <View style={formcont1} >
                    <Text style={label}>Your Company Name</Text>
                    <View style={fontcont1in}>
                        <FontAwesome5 name="building" size={15} color={colors.primary} />
                        <TextInput style={input} placeholder='Enter Your Company Name' placeholderTextColor={
                            colors.secondary
                        } />
                    </View>
                </View>


                <View style={formcont1} >
                    <Text style={label}>Password</Text>
                    <View style={fontcont1in}>
                        <Entypo name="eye" size={15} color={colors.primary} />
                        <TextInput style={input} placeholder='Enter Your Password' placeholderTextColor={
                            colors.secondary
                        }
                            secureTextEntry={true}
                        />
                    </View>
                </View>

                <View style={formcont1} >
                    <Text style={label}>Confirm Password</Text>
                    <View style={fontcont1in}>
                        <Entypo name="eye" size={15} color={colors.primary} />
                        <TextInput style={input} placeholder='Enter Your Password Again' placeholderTextColor={
                            colors.secondary
                        }
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <View style={padding10}></View>

                <Text style={button}
                    onPress={() => navigation.navigate('Login')}
                >
                    Sign Up
                </Text>
            </View>
        </View>
    )
}

export default SignupRestDetails
const styles = StyleSheet.create({
    s1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // height: '70%',
    },
    logo: {
        width: 200,
        height: 200,
    },
    s2: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        height: '75%',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    }
})

