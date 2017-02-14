export const isFetchingProducts = () => {
  return { type: 'IS_FETCHING_PRODUCTS', payload: null };
}

export const fetchProducts = () => {
  return dispatch => {
    dispatch(isFetchingProducts());
    fetch('http://matrix.f45.info/v1/franchisees', {
      method: 'GET'
    }).then((res) => {
      return res.json();
    }).then((json) => {
      dispatch({
        type: 'PRODUCT_FETCH_COMPLETE', 
        payload: json.data
      });
    }).catch(err => console.log(err));
  }
}