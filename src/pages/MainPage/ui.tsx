import type { FC } from "react"
import Preview from "@/widgets/Preview";
import TeachBlocks from "@/widgets/TeachBlocks";

const MainPage: FC = () => {
  return (
    <>
      <Preview/>
      <TeachBlocks/>
    </>
  )
}

export default MainPage