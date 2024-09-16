import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={
        {
          // headerShown: false,
          // animation: 'slide_from_bottom'
        }
      } />
    </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})