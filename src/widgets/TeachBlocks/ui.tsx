import type {FC} from "react"
import "./TeachBlocks.pcss"

const TeachBlocks: FC = () => {
  return (
    <section className="teach-blocks">
      <div className="teach-blocks__inner container">
        <article className="teach-blocks__block is-red">
          <h3 className="teach-blocks__block-title title title--big title--main-2">Практические модули</h3>
          <div className="teach-blocks__block-description text text--big text--main-2">
            Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе
          </div>
        </article>
        <article className="teach-blocks__block">
          <h3 className="teach-blocks__block-title title title--big title--main-2">Итоговая аттестация</h3>
          <ul className="teach-blocks__block-list list">
            <li className="teach-blocks__block-item text text--big text--main-2" >
              Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по
              бизнес-проектированию)
            </li>
            <li className="teach-blocks__item text text--big text--main-2">
              Защита итоговой аттестационной работы
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default TeachBlocks