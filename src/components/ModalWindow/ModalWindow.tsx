import { FC, ReactNode } from "react"
import style from "./ModalWindow.module.css"
import { RxCross2 } from "react-icons/rx"

interface PropsModalWindow {
  children: ReactNode
  close: () => void
}

const ModalWindow: FC<PropsModalWindow> = ({ children, close }) => {
  return (
    <>
      <div onClick={() => close()} className={style["ModalWindow__blur"]}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={style["ModalWindow__container"]}
        >
          <div className={style["ModalWindow__wrapperIconCross"]}>
            <RxCross2
              onClick={() => close()}
              className={style["ModalWindow__iconCross"]}
            />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  )
}

export default ModalWindow
