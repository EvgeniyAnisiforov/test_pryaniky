import api, { HOST } from "./Api"

export const getDataUser = async () => {
  return api.get(`${HOST}ru/data/v3/testmethods/docs/userdocs/get`)
}
