import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import Gallery from './components/Gallery/Gallery'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import FullScreenImage from './components/FullScreenImage/FullScreenImage'

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen
            name="FullScreenImage"
            component={FullScreenImage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
