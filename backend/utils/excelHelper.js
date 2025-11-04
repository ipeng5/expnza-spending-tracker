import ExcelJS from "exceljs";

export async function generateExcelFile(
  data,
  columns,
  sheetName,
  filename,
  res
) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(sheetName);

  worksheet.columns = columns;

  data.forEach((item) => {
    const row = {};
    columns.forEach((col) => {
      const value = item[col.key];
      row[col.key] = value instanceof Date ? value : value;
    });
    worksheet.addRow(row);
  });

  const buffer = await workbook.xlsx.writeBuffer();

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
  res.send(Buffer.from(buffer));
}
