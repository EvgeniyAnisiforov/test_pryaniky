import { useMutation, useQueryClient } from "react-query"
import { Data } from "../types/TableData"
import { postUpdateData } from "../services/postUpdateData"

export const usePostUpdateData = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationKey: ["updateData"],
    mutationFn: postUpdateData,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["dataUser"])

      const cachedData = localStorage.getItem("cachedDataUser")
      if (cachedData) {
        const currentData = JSON.parse(cachedData) as Data[]
        const updatedData = currentData.map((item) =>
          item.id === data.id ? data : item
        )
        localStorage.setItem("cachedDataUser", JSON.stringify(updatedData))
      }
    },
  })

  return { mutate }
}
