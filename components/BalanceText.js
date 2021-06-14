import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'

const BalanceText = props => {
  const { balance } = props

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText}>Sold: {balance} lei</Text>
    </Text>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default BalanceText