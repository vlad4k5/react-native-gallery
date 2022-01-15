import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get('window').width

const FullScreenImage = ({ route }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          width: 100,
          height: 100,
          uri: route.params.imgUrl,
        }}
        style={{ width: deviceWidth, height: deviceWidth * route.params.proportions }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: deviceWidth,
    height: deviceWidth,
  },
})

export default FullScreenImage
