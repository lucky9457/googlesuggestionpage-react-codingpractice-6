// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {Lists, insertclassfun} = props
  const {suggestion} = Lists
  const insert = () => {
    insertclassfun(suggestion)
  }

  return (
    <li className="sug-card">
      <p onClick={insert} className="para">
        {Lists.suggestion}
      </p>
      <img
        onClick={insert}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        className="imgar"
        alt="arrow"
      />
    </li>
  )
}
export default SuggestionItem
