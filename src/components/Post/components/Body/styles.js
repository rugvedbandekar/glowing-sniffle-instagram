import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width, //To make images SQUARE
    height: Dimensions.get('window').width,
  },
});

export default styles;
