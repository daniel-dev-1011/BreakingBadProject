import React from 'react'
import { StyleSheet, Text } from "react-native"
import { textColor } from "../../constants/colors"

const Paragraph = ({ customStyle, children }) => {
  return (
    <Text style={[styles.text, { ...customStyle }]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: textColor
  }
})

export default Paragraph;