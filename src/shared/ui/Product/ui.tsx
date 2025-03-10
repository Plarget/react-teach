import {FC, useState} from "react"
import type {TProductComponent} from "./types";
import classNames from "classnames";
import "./Product.pcss"

const Product: FC<TProductComponent> = (props) => {
  const {
    product,
    className,
  } = props
  const [modulesActive, setModulesActive] = useState([false, false])

  const firstModule = product.specializedSubjects[0].skills.slice(0, 5)
  const secondModule = product.specializedSubjects[0].skills.slice(5, 10)

  const onClick = (module: number) => {
    setModulesActive((state) => {
      const newState = [...state]
      newState[module] = !newState[module]

      return newState
    })
  }

  return (
    <article className={classNames(className, "product")}>
      <h3 className="product__title title">{product.title}</h3>
      <div className="product__body">
        <div
          className={classNames("product__module", {
            "is-active": modulesActive[0]
          })}
        >
          <button className="product__module-accordion visible-mobile" type="button" onClick={() => onClick(0)}>
            <h4 className="product__module-accordion-title text text--big">1 модуль</h4>
          </button>
          <h4 className="product__module-title label hidden-mobile">1 модуль</h4>
          <ul className="product__module-list list">
            {firstModule.map((element) => (
              <li key={element.id} className="product__module-item text">
                {element.title}
              </li>
            ))}
          </ul>
        </div>
        <div
          className={classNames("product__module", {
            "is-active": modulesActive[1]
          })}
        >
          <button className="product__module-accordion visible-mobile" type="button" onClick={() => onClick(1)}>
            <h4 className="product__module-accordion-title text text--big">2 модуль</h4>
          </button>
          <h4 className="product__module-title label hidden-mobile">2 модуль</h4>
          <ul className="product__module-list list">
            {secondModule.map((element) => (
              <li key={element.id} className="product__module-item text">
                {element.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default Product