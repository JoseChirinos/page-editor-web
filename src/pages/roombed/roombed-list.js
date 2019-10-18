import React, { Component } from 'react';
/* Components */
import Header from '../../common/header';
/* Data */
import RoomBedHttp from '../@data/roombed-http';
/* React Table Component */
import ReactTable from "react-table";
import "react-table/react-table.css";

class PositionList extends Component {
  constructor(props){
    super();
    this.state = {
      data: [],
      redirect: ''
    }
  }

  showDetail = (e, handleOriginal, rowInfo)=>{
    if(typeof(rowInfo)!=="undefined"){
      if( rowInfo.original.person_id !== null){
        this.props.history.push(''+this.props.match.url+'/'+rowInfo.original.person_id);
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
    RoomBedHttp.getAll(
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
          title = "Roles"
          match = { this.props.match }
          history = { this.props.history }
          actions={[
              {
                on: `${this.props.match.path}/nuevo`,
                title: 'Añadir'
              }
          ]}
          theme = {{
            background: "#6200EE",
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
                  Header: "Cargo",
                  accessor: "appointment"
                },
                {
                  Header: "Profesión",
                  accessor: "profession"
                },
                {
                  Header: "Especialidad",
                  accessor: "specialty"
                },
                {
                  Header: "Carrera",
                  accessor: "career_direction"
                },
              ]
            }
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
        />
      </section>
    )
  }
}

export default PositionList;