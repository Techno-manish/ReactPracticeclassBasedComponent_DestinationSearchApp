// Write your code here
import './index.css'

function DestinationItem(props) {
  const {destination} = props
  const {name, imgUrl} = destination
  return (
    <li className="card">
      <img className="image" src={imgUrl} alt={name} />
      <p className="place">{name}</p>
    </li>
  )
}
export default DestinationItem
