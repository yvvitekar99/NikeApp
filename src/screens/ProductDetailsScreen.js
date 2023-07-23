import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Text,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { ProductDetailsScreenStyles } from "../styles/ProductDetailsScreenStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../reduxToolkit/cart/cartSlice";
import { useState } from "react";
import { useEffect } from "react";
const ProductDetailsScreen = () => {
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const { selectedProduct } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const [added, setAdded] = useState(
    cart.find((ele) => ele.product.id === selectedProduct.id) ? true : false
  );
  const addToCart = () => {
    dispatch(setCart([...cart, { product: selectedProduct, quantity: 1 }]));
    setAdded(true);
  };
  const deleteFromCart = () => {
    dispatch(
      setCart(cart.filter((ele) => ele.product.id !== selectedProduct.id))
    );
    setAdded(false);
  };
  useEffect(() => {
    console.log(cart, "cart");
    console.log(cart, "cart");
  }, [cart]);
  return (
    <View
      style={{
        paddingTop: 20,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image Carousel */}
        <FlatList
          data={selectedProduct.images}
          renderItem={({ item }) => (
            <Image
              source={{
                uri: item,
              }}
              style={{ width: width, aspectRatio: 1 }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View>
          {/* Title */}
          <Text style={ProductDetailsScreenStyles.title}>
            {selectedProduct.name}
          </Text>
          <Text style={ProductDetailsScreenStyles.price}>
            ${selectedProduct.price}
          </Text>
          <Text style={ProductDetailsScreenStyles.description}>
            {selectedProduct.description}
          </Text>

          {/* Price */}

          {/* Description */}

          {/* Add to cart button */}

          {/* Navigation icon */}
        </View>
      </ScrollView>
      {!added ? (
        <Pressable
          onPress={addToCart}
          style={ProductDetailsScreenStyles.button}
        >
          <Text style={ProductDetailsScreenStyles.buttonText}>Add to Cart</Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={deleteFromCart}
          style={{ ...ProductDetailsScreenStyles.button, color: "red" }}
        >
          <Text style={ProductDetailsScreenStyles.buttonText}>Remove</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductDetailsScreen;
