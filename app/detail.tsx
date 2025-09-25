import { Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RecipeDetail() {
  return (
    <SafeAreaProvider>
      <SafeAreaView >

        <Text>This is details page.</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}