import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from "react-native-responsive-screen";
import { LIGHT_COLOR } from "../utils/constants";
import { getFullPathImage } from "../utils";

const ProductPreview = ({ name, images, index, onPressProduct }) => {
  console.log(getFullPathImage(images[0].path));
  return (
    <TouchableOpacity onPress={() => onPressProduct(index)} style={styles.container}>
      <ImageBackground
        style={styles.product}
        imageStyle={styles.image}
        source={(images && images.length) ?{ uri: getFullPathImage(images[0].path) }:require('../../assets/images/barber.jpg')}
        PlaceholderContent={<ActivityIndicator />}
      >
        <Text style={styles.title}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ProductPreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  product: {
    borderRadius: wp("2%"),
    width: wp("60%"),
    height: hp("20%"),
    padding: wp("1.5%"),
    marginHorizontal: wp("1%"),
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 10
  },
  image: {
    height: hp("20%"),
    width: wp("59.1%"),
    borderRadius: wp("1.75%"),
  },
  title: {
    fontSize: hp("3.5%"),
    fontWeight: "700",
    color: LIGHT_COLOR,
    textShadowColor: "#000",
    textShadowOffset: {
      width: 2,
      height: 3,
    },
    textShadowRadius: 5,
    elevation: 6,
  },
});
