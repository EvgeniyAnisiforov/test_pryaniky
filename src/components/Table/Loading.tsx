import { CircularProgress } from "@mui/material"

export const LoadingComponent = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress style={{ margin: "50px" }} />
  </div>
)
