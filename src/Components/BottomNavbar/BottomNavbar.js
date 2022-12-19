import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons';
import { colors } from '../../CommonStyles/Theme';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
const BottomNavbar = () => {
    return (
        <View style={styles.s1}>
            <View style={styles.s2}>
            <FontAwesome5 name="home" size={24} color="white" style={styles.active}/>
                <Text style={styles.t1active}>Home</Text>
            </View>
            <View style={styles.s2}>
            <FontAwesome name="bookmark" size={24} color="white" />
                <Text style={styles.t1}>Docs</Text>
            </View>
            <View style={styles.s2}>
            <Ionicons name="settings-sharp" size={24} color="white" />
                <Text style={styles.t1}>Setings</Text>
            </View>
            <View style={styles.s2}>
            <Ionicons name="notifications" size={24} color="white" />
                <Text style={styles.t1}>Inbox</Text>
            </View>
        </View>
    )
}

export default BottomNavbar

const styles = StyleSheet.create({
    s1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#602CB6',
        width: '100%',
        padding: 5,
        alignItems: 'center',
        height: 60,
    },
    s2: {
        alignItems: 'center',
    },
    t1: {
        color: '#A16CE6',
    },
    active: {
        color: 'white',
        backgroundColor: colors.primary,
        borderRadius: 50,
        padding: 10,
        position: 'relative',
        top: -10,
    },
    t1active: {
        color: 'white',
        position: 'relative',
        top: -10,
    }
})