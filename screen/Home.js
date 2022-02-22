import React from 'react'
import { Text, View, FlatList, TextInput } from 'react-native';

function Home({ useList }) {


    return (
        <View >
            <FlatList
                data={useList}
                renderItem={({ item }) => (
                    <View >
                        <Text>{item.value}</Text>
                    </View>
                )
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Home