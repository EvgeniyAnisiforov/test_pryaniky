import { useQuery } from "react-query"
import { getDataUser } from "../services/getDataUser"

export const useGetDataUser = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dataUser"],
    queryFn: getDataUser,
    onSuccess: (data) => {
      localStorage.setItem("cachedDataUser", JSON.stringify(data))
    },
    initialData: () => {
      const cachedData = localStorage.getItem("cachedDataUser")
      return cachedData ? JSON.parse(cachedData) : undefined
    },
    staleTime: Infinity,
    cacheTime: Infinity,
  })

  return { data, isLoading, isError }
}
