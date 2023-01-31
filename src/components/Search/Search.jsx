import { useState, useEffect } from "react";
import './search.scss';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";

function Search() {
  const [ value, setValue ] = useState('');
  const state = useSelector((state) => state);
  const dispatch = useDispatch()
  const { udpateSearchValues } = bindActionCreators(actionCreators, dispatch);

  const handleChange = ({target}) => {
    setValue(target.value);
    udpateSearchValues(value);
  }

  useEffect(() => {
    console.log(state);
  }, [state])

  return ( 
    <div className="search expanded">
      <div className="search__types">
        <div className="types__container">
          <p className="types__heading">Select Strain Type:</p>
          <div className="types__checkboxes">
            <ul>
              <li className="types__checkbox-container">
                <input type="radio" id="all" name="type"/>
                <label htmlFor="all">All</label>
              </li>
              <li className="types__checkbox-container">
                <input type="radio" id="indica" name="type"/>
                <label htmlFor="indica">Indica</label>
              </li>
              <li className="types__checkbox-container">
                <input type="radio" id="sativa" name="type"/>
                <label htmlFor="sativa">Sativa</label>
              </li>
              <li className="types__checkbox-container">
                <input type="radio" id="hybrid" name="type"/>
                <label htmlFor="hybrid">Hybrid</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <input type="text" onChange={handleChange} value={value}/>
    </div>
   )
}

export default Search;