import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getMode } from '../../utils/Themes/appTheme';
import { backArrow } from '../../asset';

export const defaultHeader = {
  title: undefined,
  height: 54,
  onBack: undefined
}

const HeaderView = (props) => {
  const { title, height, onBack, containerStyle } = { ...defaultHeader, ...props }

  return (
    <View
      style={{ height: height }}>
      <StatusBar barStyle={getMode() == 'dark' ? 'light-content' : 'dark-content'} />
      <View style={[styles.headerContainer, containerStyle]}>
        <View style={styles.containerMenuIcon}>
          {!!onBack &&
            <TouchableOpacity onPress={onBack}>
              <Image source={backArrow} style={{ width: 28, height: 28 }} resizeMode='cover' />
            </TouchableOpacity>}
        </View>
      </View>

      {!!title &&
        <View style={styles.containerTitle}>
          <Text style={[styles.title, { color: "#000" }]}>{title}</Text>
        </View>
      }
    </View >
  )
}

const styles = StyleSheet.create({
  containerTitle: {
    width: '75%',
    position: 'absolute',
    height: 54,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginLeft: 5
  },
  leftButton: {
    marginRight: 20,
  },
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  containerMenuIcon: { height: 50, width: 50, alignItems: 'center', flexDirection: 'row' },
})
export default HeaderView;
