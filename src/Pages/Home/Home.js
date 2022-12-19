import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNavbar from '../../Components/TopNavbar/TopNavbar'
import SubscriptionBar from '../../Components/Subscription/SubscriptionBar'
import DocumentCategories from '../../Components/DocumentCategoriesIcon/DocumentCategories'
import BottomNavbar from '../../Components/BottomNavbar/BottomNavbar'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TopNavbar navigation = {navigation} />
      <SubscriptionBar />
      <Image source={require('../../Media/Images/banner.png')} style={{ width: '95%', height: 200, alignSelf: 'center' }} />
      <DocumentCategories />
      <View style={styles.bottomnav}>
        <BottomNavbar navigation = {navigation}/>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bottomnav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  }
})