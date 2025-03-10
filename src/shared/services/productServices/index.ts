import {TProductServices} from "./type";
import axios from "axios"

const BASE_URL = "https://api.moscow.mba"

const productServices: TProductServices = {
  getProducts: async () => (
    axios.get(`${BASE_URL}/products`)
      .then(({data}) => data)
  ),
}

export default productServices