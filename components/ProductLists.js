import React from "react";
import { FlatList } from "react-native";
import { products } from "../products";
import ProductCard from "./ProductCard";

export default function ProductLists() {
  return (
    <FlatList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => (
        <ProductCard
          {...item}
          className="mr-5"
          contentContainerStyle={{ paddingHorizontal: 15 }}
        />
      )}
    />
  );
}
