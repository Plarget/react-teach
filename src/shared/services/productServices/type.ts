import type {TProduct} from "@/shared/types/comon.ts";

export type TProductServices = {
  getProducts: () => Promise<TProduct[]>,
}