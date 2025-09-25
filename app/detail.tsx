import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RecipeDetail() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={listCard.container}>
          <ImageBackground
            source={{ uri: 'https://www.themealdb.com/images/media/meals/1549542994.jpg' }}
            style={listCard.trandingMeal}
            resizeMode="cover"
          >
            <View style={listCard.textContainer}>
              <Text style={listCard.mealText}>Chef John</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={listCard.IngredientListContainer}>
          <Text style={{ fontSize: 22, fontWeight: "600", color: "#000000" }}>
            Tortilla Pizza Recipe
          </Text>
          <Text>
            This tortilla pizza is extremely easy to make. It is light enough to be a snack, serves well as an appetizer, or is so good that it can be devoured alone! You can use any sort of topping variation.
          </Text>

          <Text style={{ fontSize: 22, fontWeight: "600", color: "#000000" }}>
            Ingredients
          </Text>

          {/* independent scroll only for ingredients */}
          <ScrollView
            style={{ flexGrow: 0 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            {Array.from({ length: 20 }, (_, i) => (
              <View key={i} style={listCard.ingredientListItem}>
                <View style={{ flexDirection: "row", gap: 10, alignItems: 'center' }}>
                  <Image
                    source={{ uri: 'https://www.themealdb.com/images/media/meals/1549542994.jpg' }}
                    style={listCard.ingridentImage}
                    resizeMode="cover"
                  />
                  <Text style={listCard.ingredientname}>soft flour tortilla {i}</Text>
                </View>
                <Text>1</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const listCard = StyleSheet.create({
  container: {
    borderRadius: 14,
    height: 400,
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
    bottom: 100,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 22,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  mealText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "500",
  },
  IngredientListContainer: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    borderRadius: 14,
    marginTop: -60,
    padding: 28,
    gap: 10,
  },
  ingridentImage: {
    height: 56,
    width: 56,
    borderRadius: 50
  },
  ingredientListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#ffffff',
    height: 60,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10
  },
  ingredientname: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "500",
  }
});
