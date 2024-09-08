import { FC } from "react"
import { TableBody, TableRow, TableCell, Radio } from "@mui/material"
import { Data } from "../../types/TableData"

interface TableBodyComponentProps {
  rows: Data[]
  visibleRows: Data[]
  selectedId: string | null
  handleSelectionChange: (id: string | null) => void
  dense: boolean
  emptyRows: number
  setVisibleToolbar: (isVisible: boolean) => void
  setDataRow: (e: Data) => void
}

export const TableBodyComponent: FC<TableBodyComponentProps> = ({
  visibleRows,
  selectedId,
  handleSelectionChange,
  dense,
  emptyRows,
  setVisibleToolbar,
  setDataRow,
}) => (
  <TableBody>
    {visibleRows.map((row: Data) => (
      <TableRow
        hover
        key={row.id}
        selected={selectedId === row.id}
        sx={{ cursor: "pointer" }}
      >
        <TableCell padding="checkbox">
          <Radio
            color="primary"
            checked={selectedId === row.id}
            onClick={() => {
              if (selectedId === row.id) {
                handleSelectionChange(null)
                setVisibleToolbar(false)
              }
            }}
            onChange={() => {
              setDataRow(row)
              if (selectedId !== row.id) {
                handleSelectionChange(row.id)
              }
              setVisibleToolbar(row.id === selectedId ? false : true)
            }}
            value={row.id}
          />
        </TableCell>
        <TableCell component="th" scope="row" padding="none">
          {row.documentName}
        </TableCell>
        <TableCell align="left">{row.documentType}</TableCell>
        <TableCell align="left">{row.documentStatus}</TableCell>
        <TableCell align="left">
          {new Date(row.companySigDate).toLocaleDateString()}
        </TableCell>
        <TableCell align="left">{row.employeeNumber}</TableCell>
        <TableCell align="left">
          {new Date(row.employeeSigDate).toLocaleDateString()}
        </TableCell>
        <TableCell align="left">{row.companySignatureName}</TableCell>
        <TableCell align="left">{row.employeeSignatureName}</TableCell>
      </TableRow>
    ))}
    {emptyRows > 0 && (
      <TableRow
        style={{
          height: (dense ? 33 : 53) * emptyRows,
        }}
      >
        <TableCell colSpan={9} />
      </TableRow>
    )}
  </TableBody>
)
