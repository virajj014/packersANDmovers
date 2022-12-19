import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../CommonStyles/Theme';
import user from '../../Media/Images/user.png'
const TopNavbar = ({ navigation }) => {
    return (
        <View style={styles.topnav}>

            <Text
                onPress={() => navigation.navigate('Login')}
            >
                <Ionicons name="navigate-circle-sharp" size={40} color={'white'}
                />
            </Text>
            <View style={styles.searchbar}>
                <TextInput style={styles.input} placeholder='Search' />
                <AntDesign name="search1" size={24} color="black" />
            </View>
            <Image source={user} style={styles.userimg} />

        </View>
    )
}

export default TopNavbar

const styles = StyleSheet.create({
    topnav: {
        backgroundColor: colors.primary,
        // height: 60,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 20,
        margin: 5,
    },
    userimg: {
        width: 40,
        height: 40,
    },
    searchbar: {
        backgroundColor: 'white',
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        padding: 5,
        paddingHorizontal: 20,
    }
})