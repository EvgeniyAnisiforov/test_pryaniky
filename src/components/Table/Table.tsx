import {
  useEffect,
  useState,
  MouseEvent,
  ChangeEvent,
  useMemo,
  FC,
} from "react"
import { useGetDataUser } from "../../hooks/useGetDataUser"
import { TableContainerComponent } from "./TableContainer"
import { TableHeadComponent } from "./TableHead"
import { TableBodyComponent } from "./TableBody"

import { LoadingComponent } from "./Loading"
import { TablePagination } from "@mui/material"
import { createData } from "./createDataFunction"
import { getComparator, Order } from "./comparatorFunction"
import { Data } from "../../types/TableData"
import { TableToolbarComponent } from "./TableToolbar"

interface PropsTable {
  setVisibleEditModalWindow: () => void
  setDataRow: (e: Data) => void
}

export const Table: FC<PropsTable> = ({
  setVisibleEditModalWindow,
  setDataRow,
}) => {
  const [order, setOrder] = useState<Order>("desc")
  const [orderBy, setOrderBy] = useState<keyof Data>("documentName")
  const [page, setPage] = useState(0)
  const [dense, __setDense] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [rows, setRows] = useState<Data[]>([])
  const [visibleToolbar, setVisibleToolbar] = useState(false)

  const { data, isLoading } = useGetDataUser()
  useEffect(() => {
    if (data?.data?.data) {
      const newRows = data.data.data.map((item: Data) => {
        return createData(
          item.id,
          item.companySigDate,
          item.companySignatureName,
          item.documentName,
          item.documentStatus,
          item.documentType,
          item.employeeNumber,
          item.employeeSigDate,
          item.employeeSignatureName
        )
      })
      setRows(newRows)
    }
  }, [data])

  const handleRequestSort = (
    __event: MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  const handleChangePage = (__event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const visibleRows = useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, rows]
  )

  return (
    <TableContainerComponent dense={dense}>
      <TableToolbarComponent
        setVisibleEditModalWindow={setVisibleEditModalWindow}
        setVisibleToolbar={setVisibleToolbar}
        visibleToolbar={visibleToolbar}
        selectedId={selectedId}
        handleSelectionChange={() => setSelectedId(null)}
      />
      <TableHeadComponent
        order={order}
        orderBy={orderBy}
        onRequestSort={handleRequestSort}
      />
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <TableBodyComponent
          rows={rows}
          visibleRows={visibleRows}
          selectedId={selectedId}
          handleSelectionChange={setSelectedId}
          dense={false}
          emptyRows={0}
          setVisibleToolbar={setVisibleToolbar}
          setDataRow={(e) => setDataRow(e)}
        />
      )}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Строчки в таблице"
        labelDisplayedRows={({ from, to, count }) =>
          `Страница ${from}-${to} из ${count}`
        }
      />
    </TableContainerComponent>
  )
}
