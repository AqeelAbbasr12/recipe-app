import { Pressable, StyleSheet, Text, View } from "react-native";

type SplashTypes = {
  onPress: () => void
}

export default function Splash({ onPress }: SplashTypes) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cook Like a Chef</Text>
      <Text style={styles.description}>De Chef is a user-friendly recipe app designed for those who are new to cooking and want to try new recipes at home</Text>
      <Pressable style={({ pressed }) => [
        pressed ? styles.getStartedPressed : styles.normal,
        styles.getStarted,
      ]} onPress={onPress}>
        <Text style={styles.button}>Get started</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    bottom: 80
  },
  title: {
    fontSize: 35,
    fontFamily: 'Inter',
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 17
  },
  description: {
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 60

  },
  getStarted: {
    height: 60,
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedPressed: {
    width: '95%',
    backgroundColor: '#045e47',
    margin: 'auto'
  },
  normal: {
    width: '100%',
    backgroundColor: '#25AE87'
  },

  button: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 700
  }
})