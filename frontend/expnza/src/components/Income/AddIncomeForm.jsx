import { useState } from "react";
import Input from "../Inputs/Input";

function AddIncomeForm({ onAddIncome }) {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
    icon: "",
  });

  function handleChange(key, value) {
    setIncome({ ...income, [key]: value });
  }

  return (
    <div>
      <Input
        value={income.source}
        onChange={({ target }) => handleChange("source", target.value)}
        label="Income Source"
        placeholder="Freelance, Salary, etc"
        type="text"
      />
      <Input
        value={income.amount}
        onChange={({ target }) => handleChange("source", target.value)}
        label="Amount"
        placeholder=""
        type="number"
      />
      <Input
        value={income.date}
        onChange={({ target }) => handleChange("source", target.value)}
        label="Date"
        placeholder=""
        type="date"
      />
      <div className="mt-6 flex justify-end">
        <butto
          classNamen="add-btn add-btn-fill"
          type="button"
          onClick={() => onAddIncome(income)}
        >
          Add Income
        </butto>
      </div>
    </div>
  );
}

export default AddIncomeForm;
