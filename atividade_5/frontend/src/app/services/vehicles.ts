import { GetVehiclesFilter, Vehicle } from "../types/vehicles.type";
import queryString from "query-string";

const URL_API = "http://localhost:8081/vehicles";

export const getVehicles: any = async (data: GetVehiclesFilter) => {
  const params = queryString.stringify(data);
  return new Promise((resolve, reject) => {
    fetch(`${URL_API}${params ? `?${params}` : ""}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao fazer a requisição");
        }
        return response.json();
      })
      .then((data: Vehicle[]) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const createVehicle = async (data: Vehicle) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return new Promise((resolve, reject) => {
    fetch(URL_API, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao fazer a requisição");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateVehicle = async (data: Vehicle) => {
  const { id } = data;
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  return new Promise((resolve, reject) => {
    fetch(`${URL_API}/${id}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao fazer a requisição");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updateVehicleSold = async (id: string, sold: boolean) => {
  const requestOptions = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sold }),
  };

  return new Promise((resolve, reject) => {
    fetch(`${URL_API}/${id}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao fazer a requisição");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getAnalytics: any = async () => {
  return new Promise((resolve, reject) => {
    fetch(`${URL_API}/analytics`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar o dados");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deleteVehicle = async (id: string) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  return new Promise((resolve, reject) => {
    fetch(`${URL_API}/${id}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao fazer a requisição");
        }
        return response;
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
