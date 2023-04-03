import React from 'react'
import { View, Text, TouchableOpacity, Image  } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension }) => {
  return (
    <View style={styles.btnContainer}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={
          styles.btnImg(dimension)
        }
      />
    </View>
  )
}

export default ScreenHeaderBtn
