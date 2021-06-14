import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, 
      strokeWidth: 2, 
    },
  ],
  legend: ["Rainy Days"],
};

const LineChartContainer = () => (
  <View>
    <Text>GestioApp!</Text>
    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
    />
  </View>
);
export default LineChartContainer;
