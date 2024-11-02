import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterApi from "../../../api/filterApi/FilterApi";
const FilterContentArea = () => {
  const [searchParams] = useSearchParams();
  const [paramss, setParamss] = useState({});

  useEffect(() => {
    const params = {};
    for (let [key, value] of searchParams.entries()) {
      params[key] = [...(params[key] || []), value];
    }
    setParamss(params);
    console.log("Updated query parameters:", params);
  }, [searchParams]);

  useEffect(() => {
    const resultApi = async () => {
      const queryString = Object.entries(paramss)
        .map(([key, values]) => `${key}=${values.join(",")}`)
        .join("&");
      const [data, err] = await FilterApi(
        `https://2rltmjilx9.execute-api.ap-south-1.amazonaws.com/DataTransaction/SearchPackages?${queryString} `
      );
      console.log(data, err);
    };
    resultApi();
  }, [paramss]);

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
