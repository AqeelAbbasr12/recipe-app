import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState<any[]>([]);

  const fetchMeals = async (query: string) => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      setMeals(data.meals || []);
    } catch (err) {
      console.error("API error:", err);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitSearch = () => {
    fetchMeals(search);
  };

  const gotoDetails = (meal: any) => {
    router.push({ pathname: "/detail", params: { id: meal.idMeal } });
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 32 }}
        >
          <Text style={styles.title}>Discover Best Recipes</Text>
          <TextInput
            style={styles.input}
            onChangeText={setSearch}
            value={search}
            placeholder="Search..."
            keyboardType="web-search"
            onSubmitEditing={onSubmitSearch}
          />

          <View style={{ marginBottom: 32 }}>
            <Text style={styles.sectionTitle}>Search Results</Text>
            {loading && <ActivityIndicator size="large" color="#25AE87" />}

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {meals.length > 0 ? (
                meals.map((meal, i) => (
                  <Pressable key={meal.idMeal} onPress={() => gotoDetails(meal)} style={meals.length !== i + 1 ? { marginRight: 16 } : {}}>
                    <View style={listCard.container}>
                      <ImageBackground
                        source={{ uri: meal.strMealThumb }}
                        style={listCard.trandingMeal}
                        resizeMode="cover"
                      >
                        <View style={listCard.textContainer}>
                          <Text style={listCard.mealText}>{meal.strMeal}</Text>
                          <View style={listCard.rating}>
                            <Image source={require('@/assets/images/Star.png')} />
                            <Text style={{ color: 'white' }}>4.8</Text>
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </Pressable>
                ))
              ) : !loading ? (
                <Text style={{ color: '#555', alignSelf: 'center' }}>No results found</Text>
              ) : null}
            </ScrollView>
          </View>

          <View style={{ marginBottom: 32 }}>
            <Text style={styles.sectionTitle}>Just For You</Text>
            <Pressable onPress={() => gotoDetails({ idMeal: "52771" })}>
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

          <View style={{ marginBottom: 32 }}>
            <Text style={styles.sectionTitle}>Trending Recipes</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {
                trandingRecipes.map((meal) => (
                  <Pressable key={meal.idMeal} onPress={() => gotoDetails(meal)} style={{ marginBottom: 16 }}>
                    <View style={[listCard.container, { marginRight: 16 }]}>
                      <ImageBackground
                        source={{ uri: meal.image }}
                        style={listCard.trandingMeal}
                        resizeMode="cover"
                      >
                        <View style={listCard.textContainer}>
                          <Text style={listCard.mealText}>{meal.name}</Text>
                          <View style={listCard.rating}>
                            <Image
                              source={require('@/assets/images/Star.png')}
                            />
                            <Text style={{ color: 'white' }}>4.8</Text>
                          </View>
                        </View>
                      </ImageBackground>
                    </View>
                  </Pressable>
                ))
              }
            </ScrollView>
          </View>
        </ScrollView>

        {/* Bottom Category Bar */}
        <View style={styles.bottomBar}>
          {bottomList.map((meal) => (
            <Pressable key={meal.idMeal} onPress={() => gotoDetails(meal)}>
              <View style={styles.bottomItem}>
                <Image source={{ uri: meal.image }} style={styles.bottomImage} />
                <Text style={styles.bottomText}>{meal.name}</Text>
              </View>
            </Pressable>
          ))}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const trandingRecipes = [
  {
    idMeal: '52805',
    name: 'Lamb Biryani',
    image: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg"
  },
  {
    idMeal: '52795',
    name: 'Chicken Handi',
    image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
  },
  {
    idMeal: '52956',
    name: 'Chicken Congee',
    image: "https://www.themealdb.com/images/media/meals/1529446352.jpg"
  },
  {
    idMeal: '52936',
    name: 'Saltfish and Ackee',
    image: "https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg",
  },
  {
    idMeal: '52914',
    name: 'Boulangère Potatoes',
    image: "https://www.themealdb.com/images/media/meals/qywups1511796761.jpg"
  },
  {
    idMeal: '52955',
    name: 'Egg Drop Soup',
    image: "https://www.themealdb.com/images/media/meals/1529446137.jpg",
  },
]

const bottomList = [
  {
    idMeal: '53014',
    name: 'Pizza',
    image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg"
  },
  {
    idMeal: '53010',
    name: 'Burger',
    image: "https://www.themealdb.com/images/media/meals/k420tj1585565244.jpg"
  },
  {
    idMeal: '52960',
    name: 'Salad',
    image: "https://www.themealdb.com/images/media/meals/1549542994.jpg"
  },
  {
    idMeal: '52953',
    name: 'Sea food',
    image: "https://www.themealdb.com/images/media/meals/1529445434.jpg"
  }
]

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  innerContainer: { flex: 1, padding: 16 },
  title: { fontSize: 28, fontWeight: "700", color: "#25AE87", marginBottom: 16 },
  sectionTitle: { fontSize: 22, fontWeight: "600", color: "#000", marginBottom: 12 },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 14,
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  imageContainer: { borderRadius: 14, height: 160, overflow: "hidden" },
  firstMeal: { flex: 1, justifyContent: "flex-end", borderRadius: 14 },
  gradient: {
    position: "absolute", bottom: 0, left: 0, right: 0,
    height: "50%", justifyContent: "flex-end", padding: 12,
  },
  mealText: { color: "#fff", fontSize: 18, fontWeight: "600" },
  searchMeal: { height: 160, borderRadius: 14, overflow: "hidden", justifyContent: "flex-end" },

  bottomBar: {
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
    position: "absolute", bottom: 0, left: 0, right: 0, padding: 12, backgroundColor: "#fff"
  },
  bottomItem: { alignItems: "center", gap: 4 },
  bottomImage: { height: 50, width: 50, borderRadius: 32 },
  bottomText: { fontSize: 12, fontWeight: "600" },
});

const listCard = StyleSheet.create({
  container: {
    borderRadius: 14,
    height: 250,
    width: 205,
    overflow: "hidden",
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
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10
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
