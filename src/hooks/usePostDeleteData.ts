import { useMutation, useQueryClient } from "react-query"
import { postDeleteData } from "../services/postDeleteData"
import { Data } from "../types/TableData"

export const usePostDeleteData = ({ id }: { id: string | null }) => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationKey: ["deleteData", id],
    mutationFn: () => postDeleteData(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["dataUser"])

      const cachedData = localStorage.getItem("cachedDataUser")
      if (cachedData) {
        const currentData = JSON.parse(cachedData) as Data[]
        const updatedData = currentData.filter((item) => item.id !== id)
        localStorage.setItem("cachedDataUser", JSON.stringify(updatedData))
      }
    },
  })

  return { mutate }
}
