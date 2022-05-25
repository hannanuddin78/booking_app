import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"

const iconItems = [
  { icon: faBed, name: "Stays" }, { icon: faPlane, name: "Flights" }, { icon: faCar, name: "Car rentals" }, { icon: faBed, name: "Attractions" }, { icon: faTaxi, name: "Airport taxis" }
]

const Header = () => {
  return (
    <div className="header">
      <div className="container HContainer">
        <div className="headerList">
          {iconItems.map((item, index) => (
            <div className="headerListItem active" key={index}>
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <h1 className="headerTitle">A lifetime of discount? It's Genius.</h1>
        <p className="headerDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odio provident? Odio, nobis necessitatibus.</p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch container">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="searchIcon"/>
            <input type="text" placeholder="Where are you going??" className="searchInput" />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="searchIcon" />
            <span className="searchText">date to date</span>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="searchIcon" />
            <span className="searchText">2 adult 2 children 1 room</span>
          </div>
          <div className="headerSearchItem">
            <button className="searchButton">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
