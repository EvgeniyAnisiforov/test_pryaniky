import { Data } from "../../types/TableData"

interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
}

export const headCells: readonly HeadCell[] = [
  {
    id: "documentName",
    numeric: false,
    disablePadding: true,
    label: "Название документа",
  },
  {
    id: "documentType",
    numeric: false,
    disablePadding: false,
    label: "Тип документа",
  },
  {
    id: "documentStatus",
    numeric: false,
    disablePadding: false,
    label: "Статус",
  },
  {
    id: "companySigDate",
    numeric: false,
    disablePadding: false,
    label: "Дата подписи компании",
  },
  {
    id: "employeeNumber",
    numeric: false,
    disablePadding: false,
    label: "Номер сотрудника",
  },
  {
    id: "employeeSigDate",
    numeric: false,
    disablePadding: false,
    label: "Дата подписи сотрудника",
  },
  {
    id: "companySignatureName",
    numeric: false,
    disablePadding: false,
    label: "Название файла подписи компанией",
  },
  {
    id: "employeeSignatureName",
    numeric: false,
    disablePadding: false,
    label: "Название файла подписи сотрудником",
  },
]
