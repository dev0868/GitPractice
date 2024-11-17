/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { fetchAllFilters } from "../packageApi";
import Select from "react-select";
import { initialMonths } from "../packageContants";

const PackageCategoryTypeForm = ({ Value, Onchange }) => {
  const [filterData, setFilterData] = useState({ category: [], type: [] });
  const fetchFilters = async () => {
    const [res] = await fetchAllFilters();
    setFilterData({
      category: res.Categories.map((ele) => ele.CategoryName),
      type: res.PackageType,
    });
  };

  const handleSelectedMonth = (selectedOptions) => {
    const months = selectedOptions.map((option) => option.label);
    const syntheticEvent = {
      target: {
        name: "SuitableMonths",
        value: months,
      },
    };
    Onchange(syntheticEvent);
  };

  useEffect(() => {
    fetchFilters();
  }, []);

  return (
    <>
      <main>
        <legend>Package Category</legend>
        <div className="flex gap-4">
          {filterData?.category.map((ele, id) => (
            <div className="flex gap-2" key={id}>
              <input
                name="Category"
                id={ele + id}
                type="radio"
                onChange={Onchange}
                value={ele || Value.Category}
              />
              <label htmlFor={ele + id}>{ele}</label>
            </div>
          ))}
        </div>
      </main>
      <main>
        <legend>Package Type</legend>
        <div className="flex gap-6">
          {filterData?.type.map((ele, id) => (
            <div className="flex gap-4" key={id}>
              <div className="flex gap-2">
                <input
                  name="Type"
                  id={ele + id}
                  type="radio"
                  onChange={Onchange}
                  value={ele || Value.Type}
                />
                <label htmlFor={ele + id}>{ele}</label>
              </div>
            </div>
          ))}
        </div>
      </main>
      <main>
        <br />
        <label>Select Months</label>
        <Select
          onChange={(value) => handleSelectedMonth(value)}
          closeMenuOnSelect={false}
          isMulti
          options={initialMonths}
        />
      </main>

      <main>
        <legend>Package Details</legend>
        <br />
        <div className="flex-container input-group">
          <div>
            <label>Added to Cart</label>
            <input
              type="text"
              value={Value?.AddedIntoCart}
              name="AddedIntoCart"
              onChange={Onchange}
            />
          </div>
          <div>
            <label>Date of Release</label>
            <input
              type="date"
              value={Value?.ReleaseDate}
              name="ReleaseDate"
              onChange={Onchange}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default PackageCategoryTypeForm;
