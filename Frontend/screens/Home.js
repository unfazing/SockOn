import { useState } from 'react'
import { View, SafeAreaView, Flatlist, Text } from 'react-native'

import { Header, Card, StatusBar } from '../components'
import { COLORS, Data } from '../constants'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            <View style={{ zIndex: 0 }}>
                <Flatlist 
                    data={NFTData}
                    renderItem={({ item }) => <Text>{item.name}</Text>}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<Header />}
                    // to be added in later with supabase
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home