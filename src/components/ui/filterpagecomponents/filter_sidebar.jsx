import { useSearchParams } from "react-router-dom";
import { useFilterSidebarData } from "../../../hooks/useFilterSidebarData";
import { useEffect, useState } from "react";

const SidebarFilter = () => {
  // Getting All Required Datas
  const { Package_Type, Destination, Activities, Days } =
    useFilterSidebarData();

  const [, setSearchParam] = useSearchParams();

  const [selectedFilter, setSelectedFilters] = useState({});

  function handleFilterSelection(e, path) {
    const { checked, value } = e.target;

    // Doing operation if checked is false then remove that falsechecked value from list
    // elseif true then add
    if (!checked) {
      const filter = selectedFilter[path].filter((ele) => ele !== value);
      setSelectedFilters((prev) => ({
        ...prev,
        [path]: filter,
      }));
    } else {
      setSelectedFilters((prev) => ({
        ...prev,
        [path]: [...(prev[path] || []), value], //just because at time of creation nothing is that why if not available then emty array
      }));
    }
  }
  function renderFilter(data, path) {
    return data?.map((ele, id) => {
      return (
        <li key={id}>
          <label className="flex gap-2">
            <input
              value={path.includes("Days") ? [ele, ele + 1] : ele}
              onChange={(e) => handleFilterSelection(e, path)}
              type="checkbox"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            />
            {path.includes("Days") ? `${ele}Days and ${ele + 1}Nights` : ele}
          </label>
        </li>
      );
    });
  }

  useEffect(() => {
    // map all filterobject value to setsearch params
    let updaetedParams = {};
    for (const key in selectedFilter) {
      updaetedParams[key] = selectedFilter[key];
    }
    setSearchParam(updaetedParams);
  }, [selectedFilter, selectedFilter.category, setSearchParam]);

  return (
    <>
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <div className="my-8">
              Package Type
              <div className="max-h-[12rem] overflow-scroll">
                {renderFilter(Package_Type, "Package Type")}
              </div>
            </div>
            <div className="my-8">
              Destination
              <div className="max-h-[12rem] overflow-scroll">
                {renderFilter(Destination, "DestinationName")}
              </div>
            </div>
            <div className="my-8">
              Activities
              <div className="max-h-[12rem] overflow-scroll">
                {renderFilter(Activities, "Activities")}
              </div>
            </div>
            <div className="my-8">
              Days & Nights
              <div className="max-h-[12rem] overflow-scroll">
                {renderFilter(Days, ["Days", "nights"])}
              </div>
            </div>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarFilter;
