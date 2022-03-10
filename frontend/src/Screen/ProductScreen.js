import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { detailsproduct } from "../Action/ProductAction";
import Loading from "../components/Loading";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";

const ProductScreen = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [qty, setqty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const dispatch = useDispatch();
  const productid = params.id;
  useEffect(() => {
    dispatch(detailsproduct(productid));
  }, [dispatch, productid]);

  const addtoCartHandler = () => {
    navigate(`/cart/${productid}?qty={qty}`);
  };
  return (
    <div>
      {loading ? (
        <Loading> </Loading>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row top">
          <Link to="/"> Back to the result</Link>
          <div className="col-2">
            <img className="large" src={product.image} alt={product.name} />
          </div>
          <div className="col-1">
            <ul>
              <li>{product.name}</li>
              <li>
                <Rating rating={product.rating} rewives={product.rewives} />{" "}
              </li>
              <li>Price :${product.price}</li>
              <li>
                Descrpition
                <p>{product.descrpition}</p>
              </li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">{product.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>status</div>
                    <div className="status">
                      {product.countInstack > 0 ? (
                        <span className="suceess">Stock In</span>
                      ) : (
                        <span className="danger">Stouck Out</span>
                      )}
                    </div>
                  </div>
                </li>
                {product.countInstack > 0 && (
                  <>
                    <li>
                      <div className="row">
                        <div>Qty</div>
                        <div>
                          <select
                            value={qty}
                            onChange={(e) => setqty(e.target.value)}
                          >
                            {[...Array(product.countInstack).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button
                        onClick={addtoCartHandler}
                        className="primary block"
                      >
                        Add to card
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
