import React from 'react';
import { View, Text } from 'react-native';
import ChartScreen from '../components/ChartScreen';
import InputBox from '../components/InputBox';
export default function ChatScreenContainer() {
  return (
    <View style={{flex:1}}>
      <ChartScreen/>
      <InputBox/>
     </View>
  );
}
