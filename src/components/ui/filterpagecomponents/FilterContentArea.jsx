import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
const FilterContentArea = () => {
  const [searchParams] = useSearchParams();
  const [queryParams, setQueryParams] = useState({});
  console.log(queryParams);
  useEffect(() => {
    const params = {};

    // Loop through each entry in searchParams
    for (let [key, value] of searchParams.entries()) {
      // If the key already exists, convert to array or add to existing array
      if (params[key]) {
        params[key] = Array.isArray(params[key])
          ? [...params[key], value]
          : [params[key], value];
      } else {
        params[key] = value;
      }
    }

    setQueryParams(params);
  }, [searchParams]);

  // useEffect(() => {
  //   console.log(search.get("Destination"));
  // }, [search]);

  return (
    <>
      {" "}
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 18 18">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterContentArea;
