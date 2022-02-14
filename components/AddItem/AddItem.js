import React from 'react'
import { View, TextInput, Button } from 'react-native'
import styles from './styles'

function AddItem({ textInput, handleChangeText, handleOnPress }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                value={textInput}
                onChangeText={handleChangeText}
                placeholder="Agrega un Jugador"
            />
            <Button
                onPress={handleOnPress}
                title="Agregar"
            />
        </View>
    )
}

export default AddItem