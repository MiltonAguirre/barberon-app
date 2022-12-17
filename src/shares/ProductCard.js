import React from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "../utils/constants";
import { Icon, Image } from "react-native-elements";
import { getFullPathImage } from "../utils";

const ProductCard = ({ id, name, images, description, price, hours, minutes }) => {
  return (
    <View style={styles.product}>
      <Image
        style={styles.image}
        source={{ uri: getFullPathImage(images[0].path) }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <View style={styles.info}>
        <View style={styles.subInfo}>
          <Text style={styles.titleProduct}>{name}</Text>
          <Text style={styles.desc}>{description}</Text>
        </View>
        <View style={[styles.row, { justifyContent: "space-around" }]}>
          <Icon name="attach-money" color={PRIMARY_COLOR} size={25} />
          <Text style={styles.price}>{price}</Text>
          <Icon name="schedule" color={PRIMARY_COLOR} size={23} />
          <Text style={styles.delay}>{hours + ":" + (minutes || "00") + "hs"}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: wp("75%"),
    alignItems: "center",
    height: hp("50%"),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: hp("1.5%"),
  },
  image: {
    height: hp("36%"),
    width: wp("80%"),
    borderTopRightRadius: wp("2%"),
    borderTopLeftRadius: wp("2%"),
    resizeMode:'cover'
  },
  info: {
    backgroundColor: LIGHT_COLOR,
    height: hp("23.8%"),
    width: wp("79.2%"),
    borderBottomRightRadius: wp("2%"),
    borderBottomLeftRadius: wp("2%"),
    padding: wp("2.5%"),
  },
  subInfo: {
    padding: wp(".5%"),
    marginVertical: hp('1%')
  },

  titleProduct: {
    fontSize: hp("2.5%"),
    color: SECONDARY_COLOR,
    fontWeight: "700",
    textAlignVertical: "center",
  },
  desc: {
    fontSize: hp("2%"),
    color: DARK_COLOR,
    fontWeight: "600",
    textAlignVertical: "center",
    marginTop: hp("2%"),
  },
  price: {
    fontSize: hp("2.2%"),
    color: DARK_COLOR,
    fontWeight: "700",
    textAlignVertical: "center",
    marginRight: wp("5%"),
  },
  delay: {
    fontSize: hp("1.9%"),
    color: DARK_COLOR,
    textAlignVertical: "center",
  },
  product: {
    borderColor: "#FFF",
    borderWidth: 2,
    borderTopWidth: 0,
    borderRadius: wp('2.5%'),
    width: wp("80%"),
    height: hp("60%"),
    marginHorizontal: wp("2.5%"),
    marginVertical: hp("1%"),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    textAlignVertical: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 5
  },
  messageEmpty: {
    color: PRIMARY_COLOR,
  },
});
