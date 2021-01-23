import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 15,
  },
  image: {
    width: 75,
    height: 75,
  },
  rightContainer: {
    // justifyContent: 'space-around',
    marginLeft: 15,
  },
  title: {
    color: 'white',
    fontSize: 22,
  },
  artist: {
    color: 'lightgray',
    fontSize: 18,
    marginTop: 5,
  }
})

export default styles;
