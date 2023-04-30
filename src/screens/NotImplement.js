import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NotImplement() {
  return (
    <View style={styles.constainer}>
      <Text>Screen not inplemented</Text>
     </View>
  );
}

const styles=StyleSheet.create({
    constainer:{
      flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffff',
        borderTopWidth:0,
    }
})