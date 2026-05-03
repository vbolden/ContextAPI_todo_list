import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

function FilterButtons() {
    const filterContext = useContext(FilterContext);

    const setFilter = filterContext.setFilter;

    return (
        <div>
            <div className="filter-buttons">
                <button onClick={() => setFilter("all")} >All</button>
                <button onClick={() => setFilter("active")} >Active</button>
                <button onClick={() => setFilter("completed")} >Completed</button>
            </div>
        </div>
    )
}

export default FilterButtons;