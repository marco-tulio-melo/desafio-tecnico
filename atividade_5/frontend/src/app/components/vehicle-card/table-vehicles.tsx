import { Vehicle } from "@/app/types/vehicles.type";
import { colorVehicles } from "@/app/utils/color-vehiches";
import { format } from "date-fns";

type TableVehiclesProps = {
  vehicles?: Vehicle[];
  handleEdit: (vehicle: Vehicle) => void;
  handleDelete: (id?: string) => void;
  handleUpdateSold: (id?: string, sold?: boolean) => void;
};

export const TableVehicles = ({
  vehicles = [],
  handleEdit,
  handleDelete,
  handleUpdateSold,
}: TableVehiclesProps) => {
  return (
    <div className="container mx-auto px-4 mr-1 overflow-auto max-h-[400px]">
      <table className="table-auto min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 sticky top-0">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Marca
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  text-gray-500 uppercase tracking-wider"
            >
              Modelo
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Ano
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Cor
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Descrição
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Criado em
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Vendido?
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {vehicles?.map((vehicle) => (
            <tr key={vehicle.id}>
              <td className="px-6 py-4 whitespace-nowrap">{vehicle.brand}</td>
              <td className="px-6 py-4 whitespace-nowrap">{vehicle.vehicle}</td>
              <td className="px-6 py-4 whitespace-nowrap">{vehicle.year}</td>
              <td className="px-6 py-4 whitespace-nowrap flex items-center ">
                <div
                  className="h-4 w-4 mr-2 rounded border border-gray-300"
                  style={{
                    background: colorVehicles.find(
                      ({ label }) => label === vehicle.color
                    )?.hex,
                  }}
                ></div>
                {vehicle.color}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {vehicle.description || "-"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {format(vehicle.created || new Date(),'dd/MM/yyyy')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="mb-4 flex items-center justify-center">
                  <input
                    type="checkbox"
                    id="sold"
                    checked={vehicle.sold}
                    onChange={(e) =>
                      handleUpdateSold(vehicle?.id, e.target.checked)
                    }
                    className="form-checkbox h-4 w-4 text-indigo-600 pr-1"
                  />
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
                <button
                  className="flex items-center px-2 py-2 bg-yellow-500 text-white rounded-lg"
                  onClick={() => handleEdit(vehicle)}
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14v5m0 0V14m0 0h-3m3 0h3M9 3a2 2 0 012-2h2a2 2 0 012 2v1m-6 0h8v16H3V4m2-1a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-2"
                    />
                  </svg>
                </button>
                <button
                  className="flex items-center bg-red-500 text-white px-2 py-2 rounded-lg"
                  onClick={() => handleDelete(vehicle?.id)}
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
          {vehicles?.length === 0 && (
            <tr>
              <td colSpan={5} className="px-6 py-4 whitespace-nowrap">
                Nenhum veículo encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
