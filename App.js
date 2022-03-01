import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, FlatList, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Typography from './constants/Typography';
import List from './screen/List';
import Home from './screen/Home';

export default function App() {

  const [loaded] = useFonts({
    Lato: require('./assets/fonts/RobotoCondensed-Regular.ttf'),
    [Typography.titleFont]: require('./assets/fonts/RobotoCondensed-Regular.ttf'),
  })
  const [list, setList] = useState();

  const handleConfirm = itemList => {
    setList(itemList);
  }

  let content = <List confirm={handleConfirm} />

  if (!loaded) return <AppLoading />

  if (list) {
    content = <Home useList={list} />
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
    /*<View style={styles.bodyapp}>
      <View style={styles.container}>
        {content}
        <StatusBar style="auto" />
      </View>
    </View>*/
  );
}

const styles = StyleSheet.create({
  bodyapp: {
    minHeight: '100%',
    backgroundColor: 'lightgreen',
  },
  container: {
    padding: 40,
  },
  item: {
    padding: 20,
    marginVertical: 20,
    borderColor: 'white',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});