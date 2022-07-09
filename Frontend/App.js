import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
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