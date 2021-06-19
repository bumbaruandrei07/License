import { LineChart } from 'react-native-chart-kit'
import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const exampleData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]
    }
  ]
}

function adaptTransactionsToGraphData(transactions) {
  function getTime(timestamp) {
    // return new Date(timestamp).toGMTString()
    let date = new Date(timestamp)
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }

  const INITIAL_DATA = {
    labels: [],
    datasets: [{ data: [0] }]
  }
  if (transactions.length === 0) return INITIAL_DATA

  let data = {
    labels: transactions.map(tr => tr.timestamp).map(getTime),
    datasets: [{ data: transactions.map(tr => tr.value) }]
  }
  return data
}

const chartConfig = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726'
  }
}

const screenWidth = Dimensions.get('window').width

const LineChartContainer = props => {
  const { transactions } = props
  console.log(JSON.stringify(transactions))

  return (
    <View>
      <Text>Line Chart</Text>
      <LineChart
        data={adaptTransactionsToGraphData(transactions)}
      //  data = {exampleData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  )
}

export default LineChartContainer