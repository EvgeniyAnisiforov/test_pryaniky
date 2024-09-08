import api, { HOST } from "./Api"

export const postDeleteData = async (id: string | null) => {
  const result = await api.post(
    `${HOST}ru/data/v3/testmethods/docs/userdocs/delete/${id}`
  )
  api.defaults.headers.common["x-auth"] = localStorage.getItem("token")
  return result.data
}
