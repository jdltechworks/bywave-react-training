const Product = (state = {
  collection: [],
  isFetching: false,
  isScrolling: false
}, action) => {
  const { type, payload } = action;
  switch(type) {
    case 'IS_FETCHING_PRODUCTS': return {
      ...state,
      isFetching: true
    }
    case 'PRODUCT_FETCH_COMPLETE': return {
      ...state,
      isFetching: false,
      collection: payload
    }
    default: return state;
  }
}

export default Product;