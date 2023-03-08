import { useSelector, useDispatch } from "react-redux";
import ProductComponenent from "./ProductComponenet";
import { useEffect } from "react";
import  {setProducts} from "../Redux/Action/productAction"

const ProductList = () => {
  const products = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  const fetchData = async () => {
    let res = await fetch ('https://fakestoreapi.com/products')
    let jsonData = await res.json();
    dispatch(setProducts(jsonData));
}
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="ui grid container">
      <ProductComponenent/>
    </div>
  );
};

export default ProductList;
