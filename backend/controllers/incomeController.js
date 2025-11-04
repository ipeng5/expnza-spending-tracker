import Income from "../models/Income.js";
import { generateExcelFile } from "../utils/excelHelper.js";

export const addIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const { icon, source, amount, date } = req.body;

    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newIcome = new Income({
      userId,
      icon,
      source,
      amount,
      date: new Date(date),
    });

    await newIcome.save();
    res.status(200).json(newIcome);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllIncome = async (req, res) => {
  const userId = req.user.id;

  try {
    const income = await Income.find({ userId }).sort({ date: -1 });
    res.json(income);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteIncome = async (req, res) => {
  try {
    await Income.findByIdAndDelete(req.params.id);
    res.json({ message: "Income deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const downloadIncomeExcel = async (req, res) => {
  const userId = req.user.id;

  try {
    const income = await Income.find({ userId }).sort({ date: -1 });

    const columns = [
      { header: "Source", key: "source", width: 30 },
      { header: "Amount", key: "amount", width: 15 },
      { header: "Date", key: "date", width: 20 },
    ];

    await generateExcelFile(
      income,
      columns,
      "Income",
      "income_details.xlsx",
      res
    );
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
