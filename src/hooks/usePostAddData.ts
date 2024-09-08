import { useMutation } from "react-query"
import { postAddData } from "../services/postAddData"
import { useQueryClient } from "react-query"

export const usePostAddData = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationKey: ["addData"],
    mutationFn: postAddData,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["dataUser"])

      const currentData = JSON.parse(
        localStorage.getItem("cachedDataUser") || "[]"
      )
      const updatedData = [...currentData, data]
      localStorage.setItem("cachedDataUser", JSON.stringify(updatedData))
    },
  })

  return { mutate }
}
