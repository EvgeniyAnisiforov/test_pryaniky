import { Data } from "../types/TableData"
import api, { HOST } from "./Api"

export const postUpdateData = async (data: Data) => {
  const result = await api.post(
    `${HOST}ru/data/v3/testmethods/docs/userdocs/set/${data.id}`,
    data
  )
  api.defaults.headers.common["x-auth"] = localStorage.getItem("token")
  return result.data
}
