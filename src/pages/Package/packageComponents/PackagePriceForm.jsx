/* eslint-disable react/prop-types */
import "../package.css";
const PackagePriceForm = ({ Value, Onchange }) => {
  return (
    <main>
      <legend>Price</legend>
      <br />
      <div className="flex-container input-group">
        <div>
          <label>Base Price</label>
          <input
            type="text"
            value={Value.BasePrice}
            name="BasePrice"
            onChange={Onchange}
          />
        </div>
        <div>
          <label>Selling Price</label>
          <input
            type="text"
            value={Value?.SellingPrice}
            name="SellingPrice"
            onChange={Onchange}
          />
        </div>
        <div>
          <label>Percentage off</label>
          <input
            type="text"
            value={Value?.PercentageOff}
            name="PercentageOff"
            onChange={Onchange}
          />
        </div>
        <div>
          <label>Percentage off</label>
          <select name="PriceType" value={Value.PriceType} onChange={Onchange}>
            <option value="" disabled>
              Select Price Type
            </option>
            <option value="Per Person">per Person</option>
            <option value="Per Couple">per Couple</option>
          </select>
        </div>
      </div>
    </main>
  );
};

export default PackagePriceForm;
