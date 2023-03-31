import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const onTapTap = () => {

  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    {/* <View style={styles.container}>
      <Text>Open up App.js to start working on your app</Text>
      <StatusBar style="auto" />
      <Text onTap={onTapTap}>Texting</Text>
      <TextInput defaultValue='Test Input' style={{height: 40, borderColor: 'Green', borderWidth: 2}} />
    </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
