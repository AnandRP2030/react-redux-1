import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, removeProducts } from "../Redux/Action/productAction";

const ProductDetails = () => {
  const imgStyle = {
    margin: "auto",
    width: "240px",
    height: "284px",
  };

  const card = {
    padding: "5%",
  };

  const { productId } = useParams();
 

  const product = useSelector((state) => state.details);
  const {id, price, category, title, image} = product;

  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    let res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    let jsonData = await res.json();
    dispatch(selectProducts(jsonData));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetails();
      console.log(productId, 'id');
    }

    // when unmount details page, remove the product from dom
    return () => {
      dispatch(removeProducts())
    }

  }, [productId]);
  
  return (
    <div style={card} className="card">
        <div className="image">
          <img style={imgStyle} src={image} alt="" />{" "}
        </div>
        <div className="content">
          <div className="header"> {title}</div>
          <div className="meta price"> {price}</div>
          <div> {category} </div>
        </div>
     
    </div>
  );
};

export default ProductDetails;
