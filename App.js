import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListiteam from './src/components/ChatListiteam';
import ChartScreen from './src/screens/ChartScreen';
import InputBox from './src/components/InputBox'
export default function App() {
  return (
    <View style={styles.container}>
      {/**  <ChatListiteam/>  */}
      <ChartScreen />
      <InputBox/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
