import React, { Component } from 'react'
import './search-person.css'
/* Components */
import Loading from './loading'
import TextField, { HelperText, Input } from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'
/* Data */
import PersonHttp from '../pages/@data/person-http'


class SearchPerson extends Component {
  constructor(props) {
    super()
    this.state = {
      query: '',
      personList: [],
      personResult: [],
      completed: false,
      person: false
    }
  }
  handleChange = (query) => {
    let self = this
    console.log(query)
    if (query.query !== "") {
      this.setState(query, () => {
        self.searchQuery(this.state.query)
      })
    } else {
      this.changeItem()
    }
  }
  componentDidMount() {
    let self = this
    PersonHttp.getAll(
      (data) => {
        self.setState({
          personList: data.result,
          personResult: data.result,
          completed: true
        })
      },
      (error) => {
        console.log(error)
        self.setState({
          completed: true
        })
      }
    )
  }
  searchQuery = (query) => {
    let personResult = []
    let queryLower = String(query).toLowerCase()
    if (queryLower !== "") {
      this.state.personList.map(p => {
        if (String(p.first_name).toLowerCase().indexOf(queryLower) >= 0 || String(p.last_name).toLowerCase().indexOf(queryLower) >= 0) {
          personResult.push(p)
        }
      })
      this.setState({
        personResult
      })
    } else {
      this.setState({
        personResult: this.state.personList
      })
    }
  }
  searchId = (id) => {
    let personResult = {}
    this.state.personList.map(p => {
      if (p.person_id === id) {
        personResult = p
      }
    })
    return personResult
  }
  selectedItem = (id) => {
    this.props.selected(id)
    let person = this.searchId(id)
    console.log(person)
    this.setState({
      query: `${person.first_name} ${person.last_name}`,
      person
    })
  }
  changeItem = () => {
    this.props.selected(-1)
    this.setState({
      query: '',
      personResult: this.state.personList,
      person: false
    })
  }
  render() {
    return (
      <div className="SearchPerson-container">
        {
          this.state.completed ?
            <aside>
              <div className="SearchPerson-search">

                <div className="SearchPerson-form--control">
                  <TextField
                    label='Buscar Persona'
                    helperText={<HelperText>Help Me!</HelperText>}
                    onTrailingIconSelect={() => this.handleChange({ query: '' })}
                    trailingIcon={<MaterialIcon role="button" icon="close " />}
                    className='app-form--input'
                  ><Input
                      required
                      id="query"
                      value={this.state.query}
                      onChange={(e) => this.handleChange({ query: e.currentTarget.value })} />
                  </TextField>
                </div>
              </div>
              {
                this.state.person ?
                  <div
                    className="SearchPerson-list--item"
                    onClick={(e) => { this.changeItem() }}
                  >
                    <h5>{this.state.person.first_name} {this.state.person.last_name}
                      <small>Haga click para cambiar persona</small>
                    </h5>
                  </div>
                  :
                  <div className="SearchPerson-list">
                    {
                      this.state.personResult.map((p, i) =>
                        <div
                          className="SearchPerson-list--item"
                          key={i}
                          onClick={(e) => { this.selectedItem(p.person_id) }}
                        >
                          <h5>{p.first_name} {p.last_name} </h5>
                        </div>
                      )
                    }
                  </div>
              }
            </aside>
            :
            <Loading />

        }

      </div>
    )
  }
}

export default SearchPerson