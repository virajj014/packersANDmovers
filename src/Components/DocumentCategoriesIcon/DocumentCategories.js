import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../CommonStyles/Theme'


//icons
import quotation from './icon/quotation.png'
import surveylist from './icon/surveylist.png'
import packinglist from './icon/packinglist.png'
import carcondition from './icon/carcondition.png'
import paymentvoucher from './icon/paymentvoucher.png'
import bill from './icon/bill.png'
import reciept from './icon/moneyreciept.png'
import lrbilty from './icon/lrbilty.png'
import pbcard from './icon/PB-card.png'

const DocumentCategories = () => {
  const data = [
    {
      id: 1,
      name: 'Quotation',
      icon: quotation,
    },
    {
      id: 2,
      name: 'Survey List',
      icon: surveylist,
    },
    {
      id: 3,
      name: 'Packing List',
      icon: packinglist,
    },
    {
      id: 4,
      name: 'Car Condition',
      icon: carcondition,
    },
    {
      id: 5,
      name: 'Payment Voucher',
      icon: paymentvoucher,
    },
    {
      id: 6,
      name: 'Bill',
      icon: bill,

    },
    {
      id: 7,
      name: 'Reciept',
      icon: reciept,
    },
    {
      id: 8,
      name: 'LR Bilty',
      icon: lrbilty,
    },
    {
      id: 9,
      name: 'PB-Card',
      icon: pbcard,
    }
  ]
  return (
    <View style={styles.Docs}>
      <Text style={styles.h1}>Document Categories</Text>
      <View style={styles.s1}>
        {data.map((item) => (
          <View key={item.id} style={styles.s2}>
            <Image source={item.icon} style={styles.icon} />
            <Text>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default DocumentCategories

const styles = StyleSheet.create({
  Docs: {
    padding: 20,
  },
  h1: {
    color: colors.primary,
    fontSize: 23,
    fontWeight: '500',
    paddingLeft: 30,
  },
  icon: {
    width: 60,
    height: 60,
  },
  s1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  s2: {
    width: '30%',
    alignItems: 'center',
    margin: 10,
    marginHorizontal: 5,
  }
})