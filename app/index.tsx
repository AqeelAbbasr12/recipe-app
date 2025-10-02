import Splash from "@/components/Splash";
import { useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();

  const navigateTo = () => {
    router.replace("/Home");
  };

  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require("@/assets/images/splash_bg.png")}
        style={styles.container}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.safeArea}>
          <Splash onPress={navigateTo} />
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
});
