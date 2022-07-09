import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, Description, Title } from "./SubInfo";
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
      
        <CircleButton 
          imgUrl={data.is_ticked ? assets.checkmark : assets.add} 
          right={20} top={30} 
          backgroundColor={data.is_ticked ? '#f68686' : COLORS.white}
        />
      </View>

      {/* <SubInfo /> */}

      <View style={{ width: "100%", padding: SIZES.font }}>
        <Title
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
          <Description description={data.description} />
          
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
