import React, { Component } from 'react';
import '../@style/tables.css';
/* Components */
import Header from '../../common/header';
/* Data */
import DemandHttp from '../@data/demand-http';
/* React Table Component */
import ReactTable from "react-table";
import "react-table/react-table.css";

class DemenadList extends Component {
  constructor(props){
    super();
    this.state = {
      data: [],
      redirect: ''
    }
  }

  showDetail = (e, handleOriginal, rowInfo)=>{
    if(typeof(rowInfo)!=="undefined"){
      if( rowInfo.original.id_nurse !== null){
        if(rowInfo.original.nurseEnabled){
          this.props.history.push('enfermeras/'+rowInfo.original.id_nurse);
        }else{
          alert('No esta habilitada');
        }
      }else{
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
    DemandHttp.getAll(
      (data)=>{
        self.setState({
          data: data.result
        });
      },
      (error)=>{
      console.log(error);
      }
    );
  }
  render() {
    const { data } = this.state;
    return (
      <section>
        <Header
          title = "Historial"
          match = { this.props.match }
          history = { this.props.history }
          theme = {{
            background: "#008000",
            color: "#fff"
          }}
        />
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>{
            return String(row[filter.id]).toLowerCase().indexOf(String(filter.value).toLowerCase()) !== -1;
          }}
          previousText = 'Anterior'
          nextText = 'Siguiente'
          loadingText = 'Cargando Datos'
          noDataText = 'No se encontraron datos'
          pageText = 'Página'
          ofText = 'de'
          rowsText = 'filas'

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
              Header: "Datos Enfermera",
              columns: [
                {
                  Header: "ID",
                  accessor: "id_demand",
                  className: "table-id"
                },
                {
                  Header: "Nombre",
                  accessor: "first_name"
                },
                {
                  Header: "Apellido",
                  accessor: "last_name"
                }
              ]
            },
            {
              Header: "Lugar Requerido",
              className: "table-created",
              columns: [
                {
                  Header: "Sala",
                  accessor: "labelRoom"
                },
                {
                  Header: "Cama",
                  accessor: "labelBed"
                }
              ]
            },
            {
              Header: "Hora Atención",
              columns: [
                {
                  Header: "Petición",
                  accessor: "time_request",
                  className: "table-created"
                },
                {
                  Header: "Atendido",
                  accessor: "time_attend",
                  className: "table-updated"
                }
              ]
            },
            {
              Header: "Cuenta",
              columns: [
                {
                  Header: "Acceso",
                  id: "nurseEnabled",
                  accessor: d => d.nurseEnabled ? 'Habilitada':'Deshabilitada'
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

export default DemenadList;