import { StyleSheet, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { appTheme } from '../../utils/Themes/appTheme';

const LoadingView = ({ style, color }) => {
  return (
    <View style={[styles.container, style,]}>
      <ActivityIndicator color={color || appTheme().primaryColor} size='large'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 999,
  },
})

export default LoadingView
