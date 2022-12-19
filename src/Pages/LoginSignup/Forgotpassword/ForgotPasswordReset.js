import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { fullbg1, head1, padding10, text1, formcont1, label, fontcont1in, input, colors, formcont2, link1, button, link21, link22 } from '../../../CommonStyles/Theme'
import logo from '../../../Media/Images/whitelogofull.png'
import { Entypo } from '@expo/vector-icons';


const ForgotPasswordReset = ({ navigation }) => {
    return (
        <View style={fullbg1}>
            <View style={styles.s1}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.s2}>
                <View style={padding10} />
                {/* <Text style={head1}>Reset</Text> */}
                {/* <Text style={text1}>Enter new Password to continue</Text> */}
                {/* <View style={padding10} /> */}
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
                <View style={padding10} />

                <Text style={button} 
                onPress={() => navigation.navigate('Login')}
                >
                    Update 
                </Text>

                {/* <Text style={link21}>
                    Don't have an account? <Text style={link22}
                        onPress={() => navigation.navigate('SignupPhone')}
                    >Create a new account</Text>
                </Text> */}
            </View>
        </View>
    )
}

export default ForgotPasswordReset
const styles = StyleSheet.create({
    s1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // height: '70%',
    },
    logo: {
        width: 350,
        height: 200,
    },
    s2: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    }
})



