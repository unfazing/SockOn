import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, Button } from "react-native";

import { Card, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData as Data } from "../constants";
import { supabase } from "../lib/supabase";

const Home = () => {
  const [Data, setData] = useState(null);
  const [copy_data, setCopyData] = useState(null);
  const [state, setState] = useState({});

  useEffect(() => {
    getData()
    return () => {
      setState({});
    };
  }, []);


  const getData = async () => {
    try {
        const user = supabase.auth.user()
        const { data, error } = await supabase
            .from('details')
            .select()
            .match({ user_id: user.id })
        if (error) {
            throw error
        }
        setData(data)
        setCopyData(data)
        return data
    } catch (error) {
        alert(error.message)
    }
  }

  const handleSearch = (value) => {
    if (value.length === 0) {
      setData(copy_data);
    }

    const filteredData = copy_data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setData(copy_data);
    } else {
      setData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={Data}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
      <View>
        <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
