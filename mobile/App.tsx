import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
  }

  
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native </Text>
      <Button title="Send message 1" />
      <Button title="Send message 2" />
      <Button title="Send message 3" />
      <StatusBar style="auto" backgroundColor='pink'/>
    </View>
  );
};


function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
  {props.title}
      </Text>
    </TouchableOpacity>
  )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
