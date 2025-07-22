import { Link } from "expo-router";
import { Text, View } from "react-native";

const Index = () => {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
        Hello
      </Text>
      <Link href={"/about"}>Go to about
      </Link>

    </View>
  );
}
export default Index;