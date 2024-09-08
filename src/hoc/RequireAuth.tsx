import { FC, ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom"

interface TypeProps {
  children: ReactNode
  isAuthenticated: boolean
}

const RequireAuth: FC<TypeProps> = ({ children, isAuthenticated }) => {
  const location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}

export { RequireAuth }
