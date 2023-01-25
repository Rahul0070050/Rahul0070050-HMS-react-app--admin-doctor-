import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

import './style.scss'

function Sidebar() {
  const location = useNavigate()
  useEffect(() => {
    const doctor = localStorage.getItem('admin-jwt')
    if(!doctor) {
      location('/login')
    }
  }, [])

  return (
    <Card className='admin-sidebar'>
      <Card>
        <div className="sidebar-heard">
          <div className="image">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAACACAMAAAC80455AAAAsVBMVEX///8EPV23JDIAMlYAOlsAKlGOmaYANFfi5ukALFIAL1QAJU4AKFAANlivAADw2tv79ve2HCyzABzDV18AIEvu8PK0ECOyABEAEET3+Pnfr7H47/Dz4uOxAAadqLMAFEazu8PGzNJAWXKGkZ+srrjS19xOY3oAGEfjurzAUla+RE7s0NHFYWfnw8XWlZm8OkXMen7Sio3JbXNndokgR2QzTmp5h5ddan8ABkG5MDraoKNq1G24AAADv0lEQVRoge2X2ZaiMBCGgyRsAW0VRFxoQLF72l5mxmWW93+wqVShIvbNHHMx50y+qyKEv5ZUOAljBoPBYDAYDAaDwfA/8IDc2vfz3Fc80wPaX3RJvwx7veEL2bNRr9dLt5qUt0ptNKMHMHtDbUG/DpUelfctVUE/a1IeTEBt8k4Pqja9D12r+BWl52hvVdCj35qU5yrOyVd6+I61mWuS/qaCThdoL9SCTr5pUp5jS7zSA9VmoUn6twp0SX2MtRl+16T88GsIfNDDewp2OtAkvX0Zj8cvb+TmFeyxrqD/VTwiU3ZCdnIZBivzCsdZe83sMnfyMrt8XRd5nhd18pnyNAB8gQ+7WACPa8bKR2XJPUvySoaBLWIHnBQbX8Ls+ECOknzjxsIPgjDmu/pG+uhagJ+jm1DZ3FVOcNjOHe5zCwm84hBGZPtHNd2JBLzjnD6SZUc5i3GuwBSPNumBE0kaPI59qzEPsZSNdLSDkCsBloyqyo65FQnhdKQdUlthfmhb03MuVrzJ66KRtu1VWe5IOyxYtscpBcSU1Yfppsg6yoyCDnEVcgzQhWQTQcpYvx8RDatvS5zC9wllyCtSSbzbRVyTRrVW7LFqU3DjBCcn8FlT3uSSZOCwhMLnYVQd2x1zwWrWyIZ1t/mpjIzKMe3kwk6CtsdqYZ3WwLXFtOquISvPE86oIlAu6ARqisPSuyTpqkV0efsr/rTqSFcYBRchQFOxelQZqnSBvRJtcP4BX/jqReGKK3X7utyUFT+UCvpMFpBLfHbC2KbtJmy5yYpjdeC+OPXjtfSuvV2ecMb+rKacnN3sW258rCv+GTLY5zTY+DvhoTK3cLUuu9J7pFxwDnVeiG5qeX5RH/0fp9SxacLrfb7CFgtou9D24+CGtoWgXKjvo3aSa7aupGvZVV7XdemoheHx+ko5oc5zsUiXXUlOOO/kAm5oywcwGYvHfSngbwUiQdTpvTy2gZBaDNoaUC22kmC4knL5qUbtmP4w0lVT1K8il35EfyXuBk97p7tlckexwqDrFT6otBwaxqBLGsZKZ+0XSb47RFK6+80xv/2bGv6Ch546+TeHjxleA940ST/jIbpR+2hdCe4HLxgfn7i5m22/dfIf47FXkzKp/aKTP53VZ5qUB/3WyR/P6hNNyqQ2pJP/Ytm6x9zNvN86+eNZPdV6wRjRyX+e6rxgsLR18n9XbpbaLhgY9ODWzf3gGo7Jxvv4UtcFY9afTCbLZvOlYI/GmpTZYqAg+wFtXe1hMBgMBoPBYDAYDAaDocsfKvZKN8QUmUsAAAAASUVORK5CYII=" alt="" />
          </div>
          <div className="text">
            <span><h2>Admin panel</h2></span>
            <span><h4>Admin panel</h4></span>
          </div>
        </div>
      </Card>
      <Card className='options'>
        <Typography className="link">
          <NavLink to="/">
            <h4>
              <strong>Home</strong>
            </h4>
          </NavLink>
        </Typography>
        <Typography className="link">
          <NavLink to="/admin/doctors">
            <h4>
              <strong>Doctors</strong>
            </h4>
          </NavLink>
        </Typography>
        <Typography className="link">
          <NavLink to="/admin/receptionists">
            <h4>
              <strong>Receptionist</strong>
            </h4>
          </NavLink>
        </Typography>
        <Typography className="link">
          <NavLink to="/admin/patients">
            <h4>
              <strong>Patients</strong>
            </h4>
          </NavLink>
        </Typography>
        <Typography className="link">
          <NavLink to="/admin/doctor">
            <h4>
              <strong>Chat</strong>
            </h4>
          </NavLink>
        </Typography>
        <Typography className="link">
          <NavLink to="/admin/doctor">
            <h4>
              <strong>Ty</strong>
            </h4>
          </NavLink>
        </Typography>
        <Typography className="link">
          <NavLink to="/admin/doctor">
            <h4>
              <strong>Ty</strong>
            </h4>
          </NavLink>
        </Typography>
      </Card>
    </Card>
  )
}

export default Sidebar
