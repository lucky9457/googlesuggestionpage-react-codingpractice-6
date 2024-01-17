// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchinput: '',
    List: '',
  }

  onchange = event => {
    const searchinputval = event.target.value

    this.setState({
      searchinput: searchinputval,
    })
  }

  insert = suggestion => {
    const input = document.getElementById('ab')
    input.value = suggestion
  }

  render() {
    const {suggestionsList} = this.props
    this.state.List = suggestionsList
    const {List, searchinput} = this.state

    const searchresults = List.filter(each =>
      each.suggestion.toLowerCase().includes(searchinput),
    )

    return (
      <div className="main">
        <div className="card">
          <img
            className="googleimg"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="searchcard">
            <div className="searchbarContainer">
              <img
                className="searchicon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                id="ab"
                onChange={this.onchange}
                className="searchinput"
                type="search"
              />
            </div>
            <ul className="suggestionscon">
              {searchresults.map(each => (
                <SuggestionItem
                  insertclassfun={this.insert}
                  key={each.id}
                  Lists={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
