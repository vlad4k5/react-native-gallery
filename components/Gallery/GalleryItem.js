import React from 'react'
import { Text, View, Image, StyleSheet, TouchableHighlight } from 'react-native'

const GalleryItem = ({ imageUrl, author, description, id, onPressImage }) => {
  return (
    <View style={styles.galleryItem}>
      <TouchableHighlight onPress={() => onPressImage(id)}>
        <Image
          style={styles.image}
          source={{
            width: '100%',
            height: 300,
            uri: imageUrl,
          }}
        />
      </TouchableHighlight>
      <View>
        <Text numberOfLines={1}>{author}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {description || 'No description'}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  galleryItem: {
    width: '47%',
    marginBottom: 15,
  },
  description: {
    fontSize: 11,
  },
  image: {
    borderRadius: 10,
  },
})

export default GalleryItem
