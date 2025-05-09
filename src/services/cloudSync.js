import axios from "axios";

const CLOUD_BASE_URL = "https://www.googleapis.com/drive/v3/files";
const ACCESS_TOKEN = "TuTokenDeAcceso"; // Cambia por tu token obtenido con OAuth 2.0

export const updateExcelFile = async (fileId, updatedData) => {
  try {
    // Actualizar el contenido del archivo
    const response = await axios.patch(
      `${CLOUD_BASE_URL}/${fileId}`,
      { data: updatedData },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        }
      }
    );
    console.log("Archivo actualizado:", response.data);
  } catch (error) {
    console.error("Error al actualizar el archivo:", error);
  }
};



const DRIVE_API_BASE_URL = "https://www.googleapis.com/drive/v3/files";

// Función para agregar permisos a un usuario en el archivo de Excel
export const setFilePermissions = async (fileId, userEmail) => {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    alert("No se encontró el token de acceso. Inicia sesión nuevamente.");
    return;
  }

  try {
    const response = await axios.post(
      `https://www.googleapis.com/drive/v3/files/${fileId}/permissions`,
      {
        role: "writer", // Puede ser "reader" (solo lectura) o "writer" (edición)
        type: "user",
        emailAddress: userEmail
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        }
      }
    );
    console.log("Permiso asignado:", response.data);
    alert(`Permiso concedido a ${userEmail}.`);
  } catch (error) {
    console.error("Error al asignar permisos:", error);
  }
};


