import { View, Image, FlatList, Pressable } from "react-native";
import { productScreenStyle } from "../styles/productScreenStyle";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../reduxToolkit/products/productSlice";
const ProductScreen = ({ navigation }) => {
  const { productsList } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={productsList}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(setSelectedProduct(item));
            navigation.navigate("Product Details");
          }}
          key={item.id}
          style={productScreenStyle.itemContainer}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={productScreenStyle.image}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

export default ProductScreen;
