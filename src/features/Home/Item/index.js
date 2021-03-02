import styles from './styles'
import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native';
import { Paragraph } from '../../../components';

const Item = ({ character, onNavigateDetailChar }) => {
  const { name, img, char_id } = character;

  return (
    <TouchableOpacity style={styles.container} onPress={onNavigateDetailChar}>
      <View style={styles.avatar}>
        <Image source={{ uri: img }} resizeMode="contain" style={styles.avatar} />
      </View>
      <Paragraph customStyle={styles.name}>{name}</Paragraph>
    </TouchableOpacity>
  )
}

export default Item;