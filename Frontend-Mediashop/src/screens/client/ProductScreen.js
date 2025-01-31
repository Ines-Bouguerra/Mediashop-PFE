import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { getProductDetails } from "../../actions/product";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match]);
  return (
    <div className="single_product">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item Link to="/">{product.category}</Breadcrumb.Item>
            <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
          </Breadcrumb>
          <div className="row">
            {/* Images */}
            <div className="col-lg-2 order-lg-1 order-2">
              <ul className="image_list">
                <li data-image="images/single_4.jpg">
                  <img src={product.image} alt="" />
                </li>
                <li data-image="images/single_2.jpg">
                  <img src={product.image} alt="" />
                </li>
                <li data-image="images/single_3.jpg">
                  <img src={product.image} alt="" />
                </li>
              </ul>
            </div>

            {/* Selected Image */}
            <div className="col-lg-5 order-lg-2 order-1">
              <div className="image_selected">
                <img src={product.image} alt={product.name} />
              </div>
            </div>
            {/* Description */}
            <div className="col-lg-5 order-3">
              <div className="product_description">
                <div className="product_category">{product.category}</div>
                <div className="product_name">{product.name} wishlist</div>
                <div className="rating_r rating_r_4 product_rating">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className="product_text">
                  <p>
                    {product.marketplace}
                    <br></br>
                    <br></br>
                    {product.description}
                    <br></br>
                    <br></br>
                    {product.short_description}
                    <br></br>
                  </p>
                </div>
                <div className="product_price">
                  {product.price} {product.currency}
                </div>
                <div className="">chart Evolution prix</div>
              </div>
            </div>
          </div>
        </div>
      )}
      <br></br><br></br>
      <div className="container">

      </div>
    </div>
  );
};

export default ProductScreen;
