import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { textInputColor } from "../../constants/colors";

const BaseInput = ({ placeholder, onSend }) => {
  const [comment, setComment] = useState("")

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={comment}
        onChangeText={(text) => setComment(text)} />
      <TouchableOpacity onPress={() => { 
        setComment("");
        onSend(comment);
      }}>
        <Text style={styles.btnSend}>Send</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: textInputColor,
    backgroundColor: "#EEE",
    borderRadius: 32,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginEnd: 12
  },
  btnSend: {
    color: "blue",
    fontWeight: "700",
    fontSize: 16
  }
})

export default BaseInput;