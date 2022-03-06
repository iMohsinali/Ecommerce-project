import Axios from 'axios';
import {
  PRODUCT_DETAIL_SCCESS,
  PRODUCT_DETAIL_FAIL,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/api/product');
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const detailsproduct = (productid) => async (dispatch) => {
  console.log(productid)
  dispatch({
    type: PRODUCT_DETAIL_REQUEST,payload:productid
  });
  try {
    const { data } = await Axios.get(`/api/product/${productid}`);
    dispatch({ type: PRODUCT_DETAIL_SCCESS, payload: data });
  } 
  
  catch (error) {
    dispatch({ type: PRODUCT_DETAIL_FAIL, payload: error.response && error.response.message?error.response.data.message:error.message });
  }
};
