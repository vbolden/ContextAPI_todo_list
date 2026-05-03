import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

function FilterButtons() {
    const filterContext = useContext(FilterContext);

    const filter = filterContext.filter;
    const setFilter = filterContext.setFilter;

    return (
        <div>
            <div>
                <button onClick={setFilter("all")} >All</button>
                <button onClick={setFilter("active")} >Active</button>
                <button onClick={setFilter("completed")} >Completed</button>
            </div>
            <p>Current filter: {filter}</p>
        </div>
    )
}

export default FilterButtons;