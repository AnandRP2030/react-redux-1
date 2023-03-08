import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "semantic-ui-css/semantic";
const ProductComponenent = () => {
  const productsArr = useSelector((state) => state.allProducts.products);

  const container = {
    backgroundColor: "#eee",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
  };

  const imgStyle = {
    margin: "auto",
    width: "240px",
     height: "284px",
  };

  const card = {
    padding: "5%",
  };

  return (
    <div>
      <div className="four wide columns">
        <div style={container} className="ui link cards">
          {productsArr.map((elem) => {
            const { id, price, title, category, image } = elem;
            return (
                <div style={card} className="card" key={id}>
              <Link to={`/product/${id}`}  >
                  <div className="image">
                    <img style={imgStyle} src={image} alt="" />{" "}
                  </div>
                  <div className="content">
                    <div className="header"> {title}</div>
                    <div className="meta price"> {price}</div>
                    <div> {category} </div>
                  </div>
              </Link>
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProductComponenent;
