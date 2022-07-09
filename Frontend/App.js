// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { View, StyleSheet } from "react-native";
// import Main

// import Home from "./screens/Home";
// import Details from "./screens/Details";


// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: "transparent",
//   },
// };

// const Stack = createStackNavigator();

// const App = () => {
//   const [loaded] = useFonts({
//     InterBold: require("./assets/fonts/Inter-Bold.ttf"),
//     InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
//     InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
//     InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
//     InterLight: require("./assets/fonts/Inter-Light.ttf"),
//   });

//   if (!loaded) return null;

//   return (
//     // <NavigationContainer theme={theme}>
//     //   <Stack.Navigator
//     //     screenOptions={{
//     //       headerShown: false,
//     //     }}
//     //     initialRouteName="Home"
//     //   >
//     //     <Stack.Screen name="Home" component={Home} />
//     //     <Stack.Screen name="Details" component={Details} />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//     <View style={styles.container}>
//       {session && session.user ? (
//         // <Account key={session.user.id} session={session} />
//         <Main key={session.user.id} session={session} />
//       ) : (
//         <Login />
//       )}
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
// });

import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
// import Login from "./components/Login";
// import Account from "./components/Account";
import Login from "./screens/Login";
import { View, StyleSheet } from "react-native";
import { Session } from "@supabase/supabase-js";
import Main from "./Main";

export default App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View style={styles.container}>
      {session && session.user ? (
        // <Account key={session.user.id} session={session} />
        <Main  keykey={session.user.id} session={session} />
      ) : (
        <Login />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});