import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "react-query"
const client = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <BrowserRouter basename="/test_pryaniky">
      <App />
    </BrowserRouter>
  </QueryClientProvider>
)
