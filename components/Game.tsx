import { boardHeight } from "@/constants";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";

export default function Game() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.board}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
  },
  board: {
    backgroundColor: "#202020",
    height: boardHeight,
    marginVertical: "auto",
    overflow: "hidden",
  },
});
