import React, { Component } from 'react'
/* Components */
import Header from '../../../common/header'
/* Data */
import UserHttp from '../../@data/user-http'
import PASS from '../../@data/@pass'

/* React Table Component */
import ReactTable from "react-table"
import "react-table/react-table.css"

class NurseDown extends Component {
  constructor(props) {
    super()
    this.state = {
      data: [],
      redirect: ''
    }
  }

  showDetail = (e, handleOriginal, rowInfo) => {
    if (typeof (rowInfo) !== "undefined") {
      if (rowInfo.original.id_nurse !== null) {
        this.props.history.push('' + this.props.match.url + '/' + rowInfo.original.idUser)
      } else {
        console.error('Existe un error en ShowDetail el objeto no existe')
      }
    }
  }
  addFilterPlaceholder = () => {
    const filters = document.querySelectorAll("div.rt-th > input")
    for (let filter of filters) {
      filter.placeholder = "Buscar.."
    }
  }
  componentDidMount() {
    this.addFilterPlaceholder()
    let self = this
    UserHttp.getAllDisabled(
      (data) => {
        self.setState({
          data: data.result
        })
      },
      (error) => {
        console.log(error)
      }
    )
  }
  render() {
    const { data } = this.state
    return (
      <section>
        <Header
          title="Bajas"
          theme={{
            background: "#610dd8",
            color: "#fff"
          }}
        />
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) => {
            return String(row[filter.id]).toLowerCase().indexOf(String(filter.value).toLowerCase()) !== -1
          }}
          previousText='Anterior'
          nextText='Siguiente'
          loadingText='Cargando Datos'
          noDataText='No se encontraron datos'
          pageText='Página'
          ofText='de'
          rowsText='filas'

          getTdProps={(state, rowInfo, column, instance) => {
            let self = this
            return {
              onClick: (e, handleOriginal) => {
                self.showDetail(e, handleOriginal, rowInfo)
              }
            }
          }}
          columns={[
            {
              Header: "Datos Básicos",
              columns: [
                {
                  Header: "Nombre",
                  accessor: "first_name"
                },
                {
                  Header: "Apellido",
                  accessor: "last_name"
                },
                {
                  Header: "Correo Electronico",
                  accessor: "email"
                },
                {
                  Header: "Nivel de Usuario",
                  id: "type_user",
                  accessor: (d) => {
                    return PASS[d.type_user].label
                  }
                }
              ]
            },
            {
              Header: "Historial",
              columns: [
                {
                  Header: "Registrado",
                  accessor: "data_start",
                  className: "table-created"
                },
                {
                  Header: "Modificado",
                  accessor: "data_updated",
                  className: "table-updated"
                }
              ]
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight table-main"
        />
      </section>
    )
  }
}

export default NurseDown