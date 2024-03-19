import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ProductCard({
  image,
  category,
  title,
  price,
  description,
}) {
  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const [count, setCount] = React.useState(1);
  const { colorScheme } = useColorScheme();
  return (
    <View className="flex-grow bg-white dark:bg-gray-50/10 rounded-3xl p-5 m-5">
      <View className="bg-white rounded-xl overflow-hidden">
        <Image
          source={{ uri: image }}
          className="w-full h-72"
          style={{ resizeMode: "cover" }}
        />
      </View>
      <View className="mt-5">
        <Text className="text-sm text-black/60 dark:text-white/70">
          {category}
        </Text>
        <Text className="text-lg font-semibold dark:text-white">{title}</Text>
        <View className="flex-row justify-between my-3">
          <View className="flex-row gap-3 items-center">
            <TouchableOpacity onPress={decreaseCount} disabled={count === 1}>
              <AntDesign
                name="minuscircleo"
                size={24}
                color={
                  count === 1
                    ? "grey"
                    : colorScheme === "light"
                    ? "black"
                    : "white"
                }
              />
            </TouchableOpacity>
            <Text className="text-xl dark:text-white">{count}</Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count + 1)}
            />
          </View>
          <Text className="text-2xl font-extrabold dark:text-white">
            {price * count} Fcfa
          </Text>
        </View>
        <Text
          className="text-sm text-black/60 dark:text-white/70"
          numberOfLines={2}
        >
          {description}
        </Text>
        <TouchableOpacity className="flex-row justify-center w-10/12 self-center mt-5 bg-black dark:bg-white p-3 rounded-full">
          <Text className="text-white dark:text-black font-bold">
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
