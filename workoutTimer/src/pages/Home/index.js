import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Te amo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});