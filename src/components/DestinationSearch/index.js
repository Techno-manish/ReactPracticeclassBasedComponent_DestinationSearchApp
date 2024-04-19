// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    inputElement: '',
  }

  onInputChange = event => {
    this.setState({inputElement: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {inputElement} = this.state

    const newList = destinationsList.filter(each =>
      each.name.toLowerCase().includes(inputElement.toLowerCase()),
    )
    console.log(destinationsList)
    return (
      <div className="bgContainer">
        <div className="innerContainer">
          <h1 className="mainHeading">Destination Search</h1>
          <div className="searchBarContainer">
            <input
              type="search"
              className="input form-control"
              placeholder="  search"
              value={inputElement}
              onChange={this.onInputChange}
              id="searchBar"
            />

            <img
              className="searchImage"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="contentContainer">
            {newList.map(each => (
              <DestinationItem key={each.id} destination={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
