import React from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'


const AddTransactionButton = props => (
  <View>
    <Button title="Add Transaction" onPress={() => props.onPress()} />
  </View>
)

export default AddTransactionButton