import { MouseEvent, FC } from "react"
import { headCells } from "./headCells"
import { visuallyHidden } from "@mui/utils"
import TableSortLabel from "@mui/material/TableSortLabel"
import TableHead from "@mui/material/TableHead"
import { Data } from "../../types/TableData"
import { Order } from "./comparatorFunction"
import { Box, TableCell, TableRow } from "@mui/material"

interface TableHeadProps {
  order: Order
  orderBy: keyof Data
  onRequestSort: (event: MouseEvent<unknown>, property: keyof Data) => void
}

export const TableHeadComponent: FC<TableHeadProps> = ({
  order,
  orderBy,
  onRequestSort,
}) => {
  const createSortHandler =
    (property: keyof Data) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property)
    }

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
