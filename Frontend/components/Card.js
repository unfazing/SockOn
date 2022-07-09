import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";

const Card = ({ data }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
      onPress = {() => navigation.navigate("Details", { data })}
    >
      <View
        style={{
          width: "100%",
          height: 15,
        }}
      >
      
        <CircleButton imgUrl={assets.checkmark} right={20} top={30} backgroundColor={'#f68686'}/>
      </View>

      {/* <SubInfo /> */}

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.description} />
          
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
