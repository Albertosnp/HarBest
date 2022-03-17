import { getProductsAPI } from "../../services/getProducts.service";

const initialState = {
  products: [],
  totalCount: 0,
};

//Reducers
export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "@products/products":
      return { ...state, ...payload };
    case "@products/modifyProduct":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product._id === payload._id) {
            return payload;
          } 
          return product;
        }),
      };
    default:
      return state;
  }
};

//Actions
export const getProductsAction = ({ page = 0, active = true }) => {
  return async (dispatch) => {
    try {
      const { list, totalCount } = await getProductsAPI({ page, active });
      dispatch({
        type: "@products/products",
        payload: {
          products: list,
          totalCount,
        },
      });
    } catch (error) {
      console.log({ error });
    }
  };
};

export const setProductAction = (newProduct) => {
  return {
    type: "@products/modifyProduct",
    payload: {
      ...newProduct,
    },
  };
};
