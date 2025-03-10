import type {FC} from "react"
import productServices from "@/shared/services/productServices";
import {useQuery} from "@tanstack/react-query";
import Product from "@/shared/ui/Product";
import "./Preview.pcss"

const Preview: FC = () => {
  const {
    data: products
  } = useQuery({
    queryKey: ["matches"],
    queryFn: productServices.getProducts,
  })

  console.log(products)

  return (
    <section className="preview">
      <div className="preview__inner container">
        <h1 className="preview__title title title--big">Специализированные дисциплины</h1>
        <div className="preview__body">
          {products && (
            <>
              <Product product={products[0]}/>
              <Product product={products[1]}/>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Preview