import { Route, Routes } from "react-router-dom"
import { useState } from "react"

import { Homepage } from "./pages/homepage/Homepage"
import { Authorization } from "./pages/Authorization/Authorization"
import { NotFoundPage } from "./pages/NotFoundPage"

import { RequireAuth } from "./hoc/RequireAuth"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  )

  const exit = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("cachedDataUser")
    setIsAuthenticated(false)
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth isAuthenticated={isAuthenticated}>
            <Homepage onLogout={exit} />
          </RequireAuth>
        }
      />
      <Route
        path="/login"
        element={
          <Authorization isAuthenticated={() => setIsAuthenticated(true)} />
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
