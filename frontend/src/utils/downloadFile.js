import axiosInstance from "./axiosInstance";

export async function downloadExcelFile(url, filename) {
  const response = await axiosInstance.get(url, {
    responseType: "blob",
  });

  const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  link.parentNode.removeChild(link);
  window.URL.revokeObjectURL(downloadUrl);
}
