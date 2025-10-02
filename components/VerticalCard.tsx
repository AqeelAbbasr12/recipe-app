import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
type VCardTypes = {
  meal: mealTypes
  onPress: () => void;
  style: object
}

type mealTypes = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}
export default function VerticalCard({ meal, style, onPress }: VCardTypes) {
  return (<>

    {console.log('style', style)}
    <Pressable key={meal.idMeal} onPress={onPress} style={style}>
      <View style={listCard.container}>
        <ImageBackground
          source={{ uri: meal.strMealThumb }}
          style={listCard.trandingMeal}
          resizeMode="cover"
        >
          <View style={listCard.textContainer}>
            <Text style={listCard.mealText} numberOfLines={1} ellipsizeMode="tail">{meal.strMeal}</Text>
            <View style={listCard.rating}>
              <Image source={require('@/assets/images/Star.png')} />
              <Text style={{ color: 'white' }}>4.8</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  </>
  )
}

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