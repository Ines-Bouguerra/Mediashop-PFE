import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import { getCategories } from '../../actions/category'
import { getProduct } from "../../actions/product"

const ProductList = ({ getProduct, product, getCategories, category }) => {
  const [setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [setCategories] = useState([])
  useEffect(() => {
    loadAllProducts()
    loadCategories()
  }, [])

  const loadAllProducts = () => {
    setLoading(true)
    getProduct()
      .then((res) => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }
  const loadCategories = () => {
    setLoading(true)
    getCategories()
      .then((res) => {
        setCategories(res.data)
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }


  return (
    <div class="super_container">
      {/* Home */}
      <div class="home">
        <div
          class="home_background parallax-window"
          data-parallax="scroll"
          data-image-src="images/shop_background.jpg"
        ></div>
        <div class="home_overlay"></div>
        <div class="home_content d-flex flex-column align-items-center justify-content-center">
          <h2 class="home_title">Smartphones & Tablets</h2>
        </div>
      </div>

      {/* Shop */}
      <div className="shop">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              {/* Shop Sidebar */}
              <div className="shop_sidebar">
                <div className="sidebar_section">
                  <div className="sidebar_title">Categories</div>
                  <ul className="sidebar_categories">
                    {category.categories.map((category) => (
                      <li>
                        <a href="#!">{category.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar_section filter_by_section">
                  <div className="sidebar_title">Filter By</div>
                  <div className="sidebar_subtitle">Price</div>
                  <div className="filter_price">
                    <div id="slider-range" className="slider_range" />
                    <p>Range: </p>
                    <p>
                      <input
                        type="text"
                        id="amount"
                        className="amount"
                        readOnly
                        style={{ border: 0, fontWeight: "bold" }}
                      />
                    </p>
                  </div>
                </div>
                <div className="sidebar_section">
                  <div className="sidebar_subtitle color_subtitle">Color</div>
                  <ul className="colors_list">
                    <li className="color">
                      <a href="#!" style={{ background: "#b19c83" }}>
                        {" "}
                      </a>{" "}
                    </li>
                    <li className="color">
                      <a href="#!" style={{ background: "#000000" }}>
                        {" "}
                      </a>{" "}
                    </li>
                    <li className="color">
                      <a href="#!" style={{ background: "#999999" }}>
                        {" "}
                      </a>
                    </li>
                    <li className="color">
                      <a href="#!" style={{ background: "#0e8ce4" }}>
                        {" "}
                      </a>
                    </li>
                    <li className="color">
                      <a href="#!" style={{ background: "#df3b3b" }}>
                        {" "}
                      </a>
                    </li>
                    <li className="color">
                      <a
                        href="#!"
                        style={{
                          background: "#ffffff",
                          border: "solid 1px #e1e1e1",
                        }}
                      >
                        {" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar_section">
                  <div className="sidebar_subtitle brands_subtitle">Brands</div>
                  <ul className="brands_list">
                    <li className="brand">
                      <a href="#!">Apple</a>
                    </li>
                    <li className="brand">
                      <a href="#!">Beoplay</a>
                    </li>
                    <li className="brand">
                      <a href="#!">Google</a>
                    </li>
                    <li className="brand">
                      <a href="#!">Meizu</a>
                    </li>
                    <li className="brand">
                      <a href="#!">OnePlus</a>
                    </li>
                    <li className="brand">
                      <a href="#!">Samsung</a>
                    </li>
                    <li className="brand">
                      <a href="#!">Sony</a>
                    </li>
                    <li className="brand">
                      <a href="#!">Xiaomi</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              {/* Product Content */}
              <div className="shop_content">
                <div className="shop_bar clearfix">
                  <div className="shop_product_count">
                    <span>{product.products.length}</span> products found
                  </div>
                  <div className="shop_sorting">
                    <span>Sort by:</span>
                    <ul>
                      <li>
                        <span className="sorting_text">
                          highest rated
                          <i className="fas fa-chevron-down" />
                          <ul>
                            <li
                              className="shop_sorting_button"
                              data-isotope-option='{ "sortBy": "original-order" }'
                            >
                              highest rated
                            </li>
                            <li
                              className="shop_sorting_button"
                              data-isotope-option='{ "sortBy": "name" }'
                            >
                              name
                            </li>
                            <li
                              className="shop_sorting_button"
                              data-isotope-option='{ "sortBy": "price" }'
                            >
                              price
                            </li>
                          </ul>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="product_grid ">
                  <div className="product_grid_border" />
                  {/* Product Item */}
                  {loading ? (
                    <>
                      <Spinner animation="border" variant="info" size="sm" />
                      <Spinner animation="border" variant="info" />
                      <Spinner animation="grow" variant="info" size="sm" />
                      <Spinner animation="grow" variant="info" />
                    </>
                  ) : (
                    <div class="row">
                      {product.products.map((product) => (
                        <div className="product_item is_new col-md-3 mt-3 product" key={product._id}>
                          <div className="product_border" />
                          <div className="product_image d-flex flex-column align-items-center justify-content-center">
                            <Link to={`/product/${product._id}`}>
                              <img src={product.image} alt="" />
                            </Link>
                          </div>
                          <div className="product_content">
                            <div className="product_price">
                              {product.price} TN
                            </div>
                            <div className="product_name">
                              <div>
                                <Link to={`/product/${product._id}`}>
                                  {product.name}
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="product_fav">
                            <i className="fas fa-heart" />
                          </div>
                          <ul className="product_marks">
                            <li className="product_mark product_new product_discount">
                              {product.discount}
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}{" "}
                </div>
                {/* Product Page Navigation */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductList.propTypes = {
  getProduct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  getCategories: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  product: state.product,
  category: state.category,
})

export default connect(mapStateToProps, { getProduct, getCategories })(ProductList)