import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Animated, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const IMAGE_HEIGHT = 300;

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [meal, setMeal] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const scrollY = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const ingredients: { name: string; measure: string }[] = [];
  if (meal) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`]?.trim();
      const measure = meal[`strMeasure${i}`]?.trim();

      if (ingredient && ingredient !== "") {
        ingredients.push({ name: ingredient, measure: measure || "" });
      }
    }
  }

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        setMeal(data.meals[0]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading)
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" />
        </SafeAreaView>
      </SafeAreaProvider>
    );

  if (!meal) return <Text>No meal found</Text>;

  const imageTranslateY = scrollY.interpolate({
    inputRange: [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
    outputRange: [IMAGE_HEIGHT / 2, 0, -IMAGE_HEIGHT / 4],
    extrapolate: "clamp",
  });

  const imageScale = scrollY.interpolate({
    inputRange: [-IMAGE_HEIGHT, 0],
    outputRange: [2, 1],
    extrapolate: "clamp",
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Animated.ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
            useNativeDriver: true,
          })}
          contentContainerStyle={{ paddingBottom: 0 }}
        >
          <Animated.View
            style={{
              height: IMAGE_HEIGHT,
              transform: [{ translateY: imageTranslateY }, { scale: imageScale }],
            }}
          >
            <ImageBackground source={{ uri: meal.strMealThumb }} style={styles.image} resizeMode="cover">
              <Pressable onPress={() => router.back()} style={{ position: "absolute", top: 10, padding: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 400, color: '#fff', backgroundColor: "rgba(0, 0, 0, 0.5)", padding: 10, borderRadius: 8 }}> Back</Text>
              </Pressable>
              <View style={styles.imageOverlay}>
                <Text style={styles.chefName}>Chef John</Text>
              </View>
            </ImageBackground>
          </Animated.View>

          {/* Instructions */}
          <View style={styles.content}>
            <Text style={styles.mealTitle}>{meal.strMeal}</Text>
            <Text style={styles.instructions}>{meal.strInstructions}</Text>

            <View style={{ flex: 1, flexDirection: 'row' }}>

              <Text style={styles.sectionTitle}>Ingredients </Text>
              <Text style={styles.IngredientCount}>({ingredients.length}) </Text>
            </View>
            {ingredients.map((item, index) => (
              <View key={index} style={styles.ingredientItem}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
                  <Image
                    source={{ uri: meal.strMealThumb }}
                    style={styles.ingredientImage}
                  />
                  <Text style={styles.ingredientName}>{item.name}</Text>
                </View>
                <Text style={styles.ingredientAmount}>{item.measure}</Text>
              </View>
            ))}
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  image: { flex: 1, justifyContent: "flex-end" },
  imageOverlay: {
    padding: 16,
    backgroundColor: "rgba(0,0,0,0.4)",
    borderRadius: 10,
    margin: 16,
  },
  chefName: { color: "#fff", fontSize: 22, fontWeight: "600" },

  content: { padding: 16, backgroundColor: '#FCFCFC' },
  mealTitle: { fontSize: 24, fontWeight: "700", marginBottom: 12, position: 'sticky', top: 0 },
  instructions: { fontSize: 16, lineHeight: 24, marginBottom: 16 },
  sectionTitle: { fontSize: 22, fontWeight: "600", marginVertical: 12 },
  IngredientCount: { fontSize: 22, fontWeight: "600", marginVertical: 12, color: "#25AE87" },

  ingredientItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  ingredientImage: { width: 56, height: 56, borderRadius: 28 },
  ingredientName: { fontSize: 16, fontWeight: "500" },
  ingredientAmount: { fontSize: 16, fontWeight: "500" },
});
