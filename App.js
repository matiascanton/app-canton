import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, FlatList, Modal } from 'react-native';
import AddItem from './components/AddItem/AddItem'

export default function App() {
  const [textInput, setTextInput] = useState('')
  const [itemList, setItemList] = useState([])

  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const handleChangeText = (text) => {
    setTextInput(text)
  }

  const handleOnPress = () => {
    setTextInput('')
    setItemList([
      ...itemList,
      {
        value: textInput,
        id: Math.random().toString(),
      },
    ])
  }

  const handleOnDelete = (item) => () => {
    setModalVisible(true)
    setItemSelected(item)
  }

  const handleConfirmDelete = () => {
    const { id } = itemSelected
    setItemList(itemList.filter(item => item.id !== id))
    setModalVisible(false)
    setItemSelected({})
  }

  return (
    <View style={styles.bodyapp}>
      <View style={styles.container}>
        <AddItem
          textInput={textInput}
          handleOnPress={handleOnPress}
          handleChangeText={handleChangeText}
        />

        <FlatList
          data={itemList}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.value}</Text>
              <Button onPress={handleOnDelete(item)} title="X" />
            </View>
          )
          }
          keyExtractor={item => item.id}
        />

        <Modal animationType='slide' visible={modalVisible}>
          <View>
            <View>
              <Text>¿Está seguro que desea eliminar?</Text>
              <Text>{itemSelected.value}</Text>
            </View>
            <View>
              <Button
                onPress={handleConfirmDelete}
                title="CONFIRMAR"
              />
            </View>
          </View>
        </Modal>

        <StatusBar style="auto" />
      </View>
    </View>
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