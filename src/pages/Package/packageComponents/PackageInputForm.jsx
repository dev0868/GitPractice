/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchAllDestinationData } from "../packageApi";
import "../package.css";
import PackagePriceForm from "./PackagePriceForm";
import PackageCategoryTypeForm from "./PackageCategory&TypeForm";
const PackageInputForm = ({ Value, Onchange }) => {
  const [destinationList, setDestinationList] = useState(null);

  useEffect(() => {
    const fetchDestinationList = async () => {
      const [res] = await fetchAllDestinationData();
      setDestinationList(res.map((ele) => ele.DestinationName));
    };
    fetchDestinationList();
  }, []);

  return (
    <>
      <main>
        <label>Package Details</label>
        <select
          name="DestinationName"
          onChange={Onchange}
          value={Value?.DestinationName || ""}
        >
          {destinationList?.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </main>
      <main>
        <legend>Durations</legend>
        <br />
        <div className="flex-container input-group">
          <div>
            <label>Days</label>
            <input
              type="number"
              value={Value?.Days}
              name="Days"
              onChange={Onchange}
            />
          </div>
          <div>
            <label>Nights</label>
            <input
              type="number"
              value={Value?.Nights}
              name="Nights"
              onChange={Onchange}
            />
          </div>
        </div>
      </main>

      <main>
        <legend>Pax/Child</legend>
        <br />
        <div className="flex-container input-group">
          <div>
            <label>Pax</label>
            <input
              type="text"
              value={Value?.Pax}
              name="Days"
              onChange={Onchange}
            />
          </div>
          <div>
            <label>Childs</label>
            <input
              type="text"
              value={Value?.Child}
              name="Child"
              onChange={Onchange}
            />
          </div>
        </div>
      </main>
      <PackagePriceForm Value={Value} Onchange={Onchange} />
      <main>
        <legend>Discount</legend>
        <br />
        <div className="flex-container input-group">
          <div>
            <label>Discount Code</label>
            <input
              type="text"
              value={Value?.DiscountCode}
              name="DiscountCode"
              onChange={Onchange}
            />
          </div>
          <div>
            <label>Discount Price</label>
            <input
              type="text"
              value={Value?.DiscountedAmount}
              name="DiscountedAmount"
              onChange={Onchange}
            />
          </div>
        </div>
      </main>
      <PackageCategoryTypeForm Value={Value} Onchange={Onchange} />
    </>
  );
};

export default PackageInputForm;
