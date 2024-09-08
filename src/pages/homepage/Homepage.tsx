import LogoutIcon from '@mui/icons-material/Logout'
import style from "./Homepage.module.css"
import { IoIosAddCircleOutline } from "react-icons/io"
import { Table } from "../../components/Table/Table"
import { FC, useState } from "react"
import ModalWindow from "../../components/ModalWindow/ModalWindow"
import AddDataForm from "./Form/AddDataForm"
import EditDataForm from "./Form/UpdateDataForm"
import { Data } from "../../types/TableData"

interface PropsHomePage {
  onLogout: () => void
}

const Homepage: FC<PropsHomePage> = ({ onLogout }) => {
  const [visibleModalWindow, SetVisibleModalWindow] = useState<boolean>(false)
  const [visibleEditModalWindow, setVisibleEditModalWindow] =
    useState<boolean>(false)
  const [dataRow, setDataRow] = useState<Data>()
  return (
    <>
      {visibleModalWindow && (
        <ModalWindow close={() => SetVisibleModalWindow(false)}>
          <AddDataForm close={() => SetVisibleModalWindow(false)} />
        </ModalWindow>
      )}
      {visibleEditModalWindow && (
        <ModalWindow close={() => setVisibleEditModalWindow(false)}>
          <EditDataForm
            dataRow={dataRow}
            close={() => setVisibleEditModalWindow(false)}
          />
        </ModalWindow>
      )}
      <div
        onClick={() => onLogout()}
        className={style["Homepage__wrapperIconLogout"]}
      >
        <LogoutIcon style={{ fontSize: "40px" }} />
      </div>
      <IoIosAddCircleOutline
        onClick={() => SetVisibleModalWindow(true)}
        style={{ fontSize: "50px", marginTop: "7%", cursor: "pointer" }}
      />
      <div className={style["Homepage__table"]}>
        <Table
          setVisibleEditModalWindow={() => setVisibleEditModalWindow(true)}
          setDataRow={(e) => setDataRow(e)}
        />
      </div>
    </>
  )
}

export { Homepage }
