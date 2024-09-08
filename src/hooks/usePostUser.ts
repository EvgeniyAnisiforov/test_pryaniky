import { useMutation } from "react-query"
import { postUser } from "../services/postUser"

export const usePostUser = () => {
  const {
    mutate,
    isError,
    isLoading,
    error: apiError,
    isSuccess,
  } = useMutation({
    mutationKey: ["userAuth"],
    mutationFn: postUser,
    onError: (apiError: Error) => {
      console.error(apiError)
    },
  })

  return { mutate, isError, isLoading, apiError, isSuccess }
}
