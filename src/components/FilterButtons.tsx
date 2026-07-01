import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

function FilterButtons() {
    const filterContext = useContext(FilterContext);

    if (!filterContext) return null;

    const { filter, setFilter } = filterContext;

    return (
        <div>
            <div className="filter-buttons">
                <button
                    className={`control-btn ${filter === "all" ? "active-filter" : ""}`}
                    onClick={() => setFilter("all")} >
                    All
                </button>
                <button
                    className={`control-btn ${filter === "active" ? "active-filter" : ""}`}
                    onClick={() => setFilter("active")} >
                    Active
                </button>
                <button
                    className={`control-btn ${filter === "completed" ? "active-filter" : ""}`}
                    onClick={() => setFilter("completed")} >
                    Completed
                </button>
            </div>
        </div>
    );
}

export default FilterButtons;