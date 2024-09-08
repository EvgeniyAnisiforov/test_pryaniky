import TypeDataUserAuth from "../types/DataUserAuth"
import api, { HOST } from "./Api"

export const postUser = async (data: TypeDataUserAuth) => {
  const response = await api.post(
    `${HOST}ru/data/v3/testmethods/docs/login`,
    data
  )
  if (response.data.data && response.data.data.token) {
    localStorage.setItem("token", response.data.data.token)

    api.defaults.headers.common["x-auth"] = response.data.data.token
    return response.data
  } else if (response.data.error_text === "Access deny") {
    throw new Error("Неправильное имя пользователя или пароль")
  } else {
    throw new Error("Произошла ошибка при регистрации. Попробуйте позже.")
  }
}
