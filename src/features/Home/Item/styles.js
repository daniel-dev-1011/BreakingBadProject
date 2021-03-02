import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center"
  },
  name: {
    fontSize: 20,
    color: '#000'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 10
  }
})

export default styles;