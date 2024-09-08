import { Data } from "./TableData"

export interface PropsInputValidation {
  nameInput: string
  control: any
  message: string
  errors: any
  typeInput?: string
  defaultValue?: Data | string
}
