import { FC } from "react"
import style from "./Authorization.module.css"
import FormAuthorization from "./FormAuthorization"

interface PropsAuthorization {
  isAuthenticated: () => void
}

const Authorization: FC<PropsAuthorization> = ({ isAuthenticated }) => {
  return (
    <div className={style["Authorization__wrapper"]}>
      <div className={style["Authorization__container"]}>
        <h1>Авторизация</h1>
        <FormAuthorization isAuthenticated={() => isAuthenticated()} />
      </div>
    </div>
  )
}

export { Authorization }
