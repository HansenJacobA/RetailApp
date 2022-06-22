import create from 'zustand';
import axios from 'axios';

const useZustand = create((set) => ({
  currentProductInfo: {},
  getProductInfo: () => {
    axios.get('/products')
      .then((result) => {
        console.log('in zustand', result);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  },
  allProducts: {},
  getAllProducts: () => { },
}));

export default useZustand;
