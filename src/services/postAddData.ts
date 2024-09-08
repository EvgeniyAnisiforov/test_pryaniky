import { DataWithoutId } from "../types/TableData"
import api, { HOST } from "./Api"

export const postAddData = async (data: DataWithoutId) => {
  const result = await api.post(
    `${HOST}ru/data/v3/testmethods/docs/userdocs/create`,
    data
  )
  api.defaults.headers.common["x-auth"] = localStorage.getItem("token")
  return result.data
}
