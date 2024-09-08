import { FC } from "react"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { alpha } from "@mui/material/styles"
import { usePostDeleteData } from "../../hooks/usePostDeleteData"

interface TableToolbarProps {
  setVisibleToolbar: (e: boolean) => void
  visibleToolbar: boolean
  selectedId: string | null
  setVisibleEditModalWindow: () => void
  handleSelectionChange: (e: null) => void
}

export const TableToolbarComponent: FC<TableToolbarProps> = ({
  visibleToolbar,
  setVisibleToolbar,
  selectedId,
  setVisibleEditModalWindow,
  handleSelectionChange,
}) => {
  const { mutate } = usePostDeleteData({ id: selectedId })
  return (
    <>
      <Toolbar
        sx={[
          {
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          },
          visibleToolbar === true && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          },
        ]}
      >
        {visibleToolbar === true ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            Выбрано
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Документы
          </Typography>
        )}
        {visibleToolbar === true && (
          <>
            <Tooltip title="Редактировать">
              <IconButton
                onClick={() => {
                  setVisibleEditModalWindow()
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Удалить">
              <IconButton
                onClick={() => {
                  setVisibleToolbar(false)
                  handleSelectionChange(null)
                  mutate()
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Toolbar>
    </>
  )
}
