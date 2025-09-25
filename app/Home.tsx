import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';
import { useState } from "react";
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const onChangeSearch = (value: string) => {
    setSearch(value)
    console.log("search", search)
  }

  const gotoDetails = () => {
    router.push('/detail')
  }
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <ScrollView horizontal={false}
          contentContainerStyle={styles.innerContainer}>
          <Text style={styles.title}>Discover Best Recipes </Text>
          <View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeSearch}
              value={search}
              placeholder="Search..."
              keyboardType="web-search"
            />
          </View>

          <View>
            <Text style={styles.sectionTitle}>Just For You</Text>
            <Pressable onPress={gotoDetails}>

              <View style={styles.imageContainer}>
                <ImageBackground
                  source={{ uri: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg' }}
                  style={styles.firstMeal}
                  resizeMode="cover"
                >
                  <LinearGradient
                    colors={['rgba(0,0,0,1)', 'transparent']}
                    start={{ x: 0.5, y: 1 }}
                    end={{ x: 0.5, y: 0 }}
                    style={styles.gradient}
                  >
                    <Text style={styles.mealText}>Spicy Arrabiata Penne</Text>
                  </LinearGradient>
                </ImageBackground>
              </View>
            </Pressable>
          </View>

          <View style={{ marginBottom: 40 }}>
            <Text style={styles.sectionTitle}>Trending Recipes</Text>
            <ScrollView horizontal
              showsHorizontalScrollIndicator={false}
            >

              <View style={listCard.container}>
                <ImageBackground
                  source={{ uri: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg" }}
                  style={listCard.trandingMeal}
                  resizeMode="cover"
                >
                  <View style={listCard.textContainer}>
                    <Text style={listCard.mealText}>Spicy Arrabiata Penne</Text>
                    <View style={listCard.rating}>
                      <Image
                        source={require('@/assets/images/Star.png')}
                      />
                      <Text style={{ color: 'white' }}>4.8</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View style={listCard.container}>
                <ImageBackground
                  source={{ uri: "https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg" }}
                  style={listCard.trandingMeal}
                  resizeMode="cover"
                >
                  <View style={listCard.textContainer}>
                    <Text style={listCard.mealText}>Spicy Arrabiata Penne</Text>
                    <View style={listCard.rating}>
                      <Image
                        source={require('@/assets/images/Star.png')}
                      />
                      <Text style={{ color: 'white' }}>4.8</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View style={listCard.container}>
                <ImageBackground
                  source={{ uri: 'https://www.themealdb.com/images/media/meals/1549542994.jpg' }}
                  style={listCard.trandingMeal}
                  resizeMode="cover"
                >
                  <View style={listCard.textContainer}>
                    <Text style={listCard.mealText}>Spicy Arrabiata Penne</Text>
                    <View style={listCard.rating}>
                      <Image
                        source={require('@/assets/images/Star.png')}
                      />
                      <Text style={{ color: 'white' }}>4.8</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', position: 'absolute', width: '100%', left: 0, right: 0, bottom: 0, }}>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6 }}>
            <Image source={{ uri: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg" }} style={{ height: 50, width: 50, borderRadius: 32 }} />
            <Text style={{ fontSize: 12, fontWeight: 600 }}>Pizza</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6 }}>
            <Image source={{ uri: "https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg" }} style={{ height: 50, width: 50, borderRadius: 32 }} />
            <Text style={{ fontSize: 12, fontWeight: 600 }}>Burger</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6 }}>
            <Image source={{ uri: 'https://www.themealdb.com/images/media/meals/1549542994.jpg' }} style={{ height: 50, width: 50, borderRadius: 32 }} />
            <Text style={{ fontSize: 12, fontWeight: 600 }}>Salad</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6 }}>
            <Image source={{ uri: "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg" }} style={{ height: 50, width: 50, borderRadius: 32 }} />
            <Text style={{ fontSize: 12, fontWeight: 600 }}>Chicken</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 28,
    borderRadius: 14,
    overflow: 'scroll'
  },
  innerContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
    overflow: 'scroll'
  },
  title: {
    fontSize: 28,
    fontWeight: 700,
    color: '#25AE87',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 600,
    color: '#000000',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 60,
    margin: 'auto',
    paddingLeft: 28,
    paddingRight: 28,
    borderRadius: 14,
    backgroundColor: "#EFEFEF",
    fontSize: 14,
    fontWeight: 400
  },
  imageContainer: {
    borderRadius: 14,
    height: 160,
    overflow: "hidden",
  },
  firstMeal: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 14,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "50%",
    justifyContent: "flex-end",
    padding: 16,
    borderRadius: 14,
  },
  mealText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 600,
  },
})

const listCard = StyleSheet.create({
  container: {
    borderRadius: 14,
    height: 250,
    width: 205,
    overflow: "hidden",
    marginRight: 16,
  },
  trandingMeal: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  textContainer: {
    position: 'absolute',
    width: '90%',
    bottom: 20,
    right: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  mealText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 6
  }
})
