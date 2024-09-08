import { ReactNode, FC } from "react"
import { Box, Paper, TableContainer, Table } from "@mui/material"

interface TableContainerComponentProps {
  children: ReactNode
  dense: boolean
}

export const TableContainerComponent: FC<TableContainerComponentProps> = ({
  children,
  dense,
}) => (
  <Box sx={{ width: "100%" }}>
    <Paper sx={{ width: "100%", mb: 2, border: "1px solid black" }}>
      <TableContainer>
        <Table
          sx={{
            minWidth: 750,
            borderTop: "1px solid black",
            display: "block",
          }}
          size={dense ? "small" : "medium"}
        >
          {children}
        </Table>
      </TableContainer>
    </Paper>
  </Box>
)
