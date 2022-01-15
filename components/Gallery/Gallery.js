import React, { useEffect } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../../store/reducers/gallery'
import GalleryItem from './GalleryItem'

const Gallery = ({ navigation }) => {
  const { items } = useSelector(state => state.gallery)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])

  const onPressImage = imageId => {
    const item = items.find(elem => imageId === elem.id)
    const imgUrl = item.urls.full
    const proportions = item.height / item.width
    navigation.navigate('FullScreenImage', { imgUrl, proportions })
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.gallery}>
          {items.map(item => (
            <GalleryItem
              key={item.id}
              id={item.id}
              imageUrl={item.urls.small}
              author={item.user.username}
              description={item.description}
              onPressImage={onPressImage}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  gallery: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
})
export default Gallery
