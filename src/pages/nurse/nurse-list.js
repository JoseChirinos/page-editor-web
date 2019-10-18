import React, { Component } from 'react';
import '../@style/tables.css';
/* Components */
import Header from '../../common/header';
/* Data */
import NurseHttp from '../@data/nurse-http';
/* React Table Component */
import ReactTable from "react-table";
import "react-table/react-table.css";

class NurseList extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      redirect: ''
    }
  }

  showDetail = (e, handleOriginal, rowInfo) => {
    if (typeof (rowInfo) !== "undefined") {
      if (rowInfo.original.id_nurse !== null) {
        this.props.history.push('' + this.props.match.url + '/' + rowInfo.original.id_nurse);
      } else {
        console.error('Existe un error en ShowDetail el objeto no existe');
      }
    }
  }
  addFilterPlaceholder = () => {
    const filters = document.querySelectorAll("div.rt-th > input");
    for (let filter of filters) {
      filter.placeholder = "Buscar..";
    }
  }
  componentDidMount() {
    this.addFilterPlaceholder();
    let self = this;
    NurseHttp.getAll(
      (data) => {
        self.setState({
          data: data.result
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  render() {
    const { data } = this.state;
    return (
      <section>
        <Header
          title="Enfermeras"
          match={this.props.match}
          history={this.props.history}
          actions={[
            {
              on: `${this.props.match.path}/nuevo`,
              title: 'Añadir',
              theme: 'Header-btn'
            },
            {
              on: `${this.props.match.path}/bajas`,
              title: 'Ver Bajas',
              theme: 'Header-btn-more'

            },
          ]}
          theme={{
            background: "#6200ee",
            color: "#fff"
          }}
        />
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) => {
            return String(row[filter.id]).toLowerCase().indexOf(String(filter.value).toLowerCase()) !== -1;
          }}
          previousText='Anterior'
          nextText='Siguiente'
          loadingText='Cargando Datos'
          noDataText='No se encontraron datos'
          pageText='Página'
          ofText='de'
          rowsText='filas'

          getTdProps={(state, rowInfo, column, instance) => {
            let self = this;
            return {
              onClick: (e, handleOriginal) => {
                self.showDetail(e, handleOriginal, rowInfo);
              }
            };
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
                  Header: "Carnet de Identidad",
                  accessor: "ci"
                },
                {
                  Header: "Número de Celular",
                  accessor: "cellphone"
                }
              ]
            },
            {
              Header: "Historial",
              columns: [
                {
                  Header: "Registrado",
                  accessor: "created",
                  className: "table-created"
                },
                {
                  Header: "Modificado",
                  accessor: "updated",
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

export default NurseList;