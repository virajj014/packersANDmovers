import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { fullbg1, head1, padding10, text1, formcont1, label1, fontcont1in1, input1, colors, formcont2, link1, button1, link31, link32, head2 } from '../../../CommonStyles/Theme'
import logo from '../../../Media/Images/ThemeLogoFull.png'
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const ForgotPasswordPhone = ({navigation}) => {
    return (
        <View style={fullbg1}>
            <View style={styles.s1}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.s2}>
            {/* <Text style={head2}>Forgot Password</Text> */}

                <View style={formcont1} >
                    <Text style={label1}>ENTER YOUR MOBILE NO. TO CONTINUE</Text>
                    <View style={fontcont1in1}>
                        <FontAwesome5 name="mobile" size={20} color={colors.primary} />
                        <TextInput style={input1} placeholder='' placeholderTextColor={
                            colors.secondary
                        } />
                    </View>
                    <Text style={button1}
                     onPress={() => navigation.navigate('ForgotPasswordOtp')}
                    >GET OTP</Text>
                   
                </View>
            </View>
        </View>
    )
}

export default ForgotPasswordPhone
const styles = StyleSheet.create({
    s1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 300,
        backgroundColor: 'white',
        borderBottomEndRadius: 70,
        borderBottomStartRadius: 70,
    },
    logo: {
        width: 300,
        height: 200,
    },
    s2: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }

})

