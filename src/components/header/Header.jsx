import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./header.css";

const iconItems = [
  { icon: faBed, name: "Stays" }, { icon: faPlane, name: "Flights" }, { icon: faCar, name: "Car rentals" }, { icon: faBed, name: "Attractions" }, { icon: faTaxi, name: "Airport taxis" }
]

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({
    adult: 1, children: 2, room: 0
  })
  const handelCount = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? option[name] + 1 : option[name] - 1,
      }
    })
  }

  return (
    <div className="header">
      <div className={type === "list" ? "container HContainer listHeader" : "container HContainer"}>
        <div className="headerList">
          {iconItems.map((item, index) => (
            <div className="headerListItem active" key={index}>
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        {type !== "list" &&
          <>
            <h1 className="headerTitle">A lifetime of discount? It's Genius.</h1>
            <p className="headerDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, odio provident? Odio, nobis necessitatibus.</p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch container">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="searchIcon" />
                <input type="text" placeholder="Where are you going??" className="searchInput" />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="searchIcon" />
                <span onClick={() => setOpenDate(!openDate)} className="searchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate && <DateRange
                  editableDateInputs={true}
                  onChange={item => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="dateRange"
                />}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="searchIcon" />
                <span className="searchText" onClick={() => setOpenOption(!openOption)}>{`${option.adult} adult ${option.children} children ${option.room} room`}</span>
                {openOption && <div className="option">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCount">
                      <button disabled={option.adult <= 0} className="countBtn" onClick={() => handelCount("adult", "dec")}>-</button>
                      <span className="countNumber">{option.adult}</span>
                      <button className="countBtn" onClick={() => handelCount("adult", "inc")}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCount">
                      <button disabled={option.children <= 0} className="countBtn" onClick={() => handelCount("children", "dec")}>-</button>
                      <span className="countNumber">{option.children}</span>
                      <button className="countBtn" onClick={() => handelCount("children", "inc")}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCount">
                      <button disabled={option.room <= 0} className="countBtn" onClick={() => handelCount("room", "dec")}>-</button>
                      <span className="countNumber">{option.room}</span>
                      <button className="countBtn" onClick={() => handelCount("room", "inc")}>+</button>
                    </div>
                  </div>
                </div>}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Header
