import { Vehicle } from "@/app/types/vehicles.type";
import { brandVehicles } from "@/app/utils/brand-vehiches";
import { colorVehicles } from "@/app/utils/color-vehiches";
import { yearVehicles } from "@/app/utils/year-vehiches";
import React, { useEffect, useState } from "react";

type FormCreateVehicleProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (vehicle: Vehicle) => void;
  vehicleEdit?: Vehicle;
};

export const FormCreateVehicle = ({
  isOpen,
  onClose,
  onSubmit,
  vehicleEdit,
}: FormCreateVehicleProps) => {
  const [vehicle, setVehicle] = useState<string | undefined>("");
  const [brand, setBrand] = useState<string | undefined>("");
  const [year, setYear] = useState<number | undefined>();
  const [description, setDescription] = useState<string | undefined>("");
  const [color, setColor] = useState<string | undefined>("");
  const [sold, setSold] = useState<boolean | undefined>(false);

  const reset = () => {
    setVehicle(undefined);
    setBrand(undefined);
    setYear(undefined);
    setDescription(undefined);
    setColor(undefined);
    setSold(false);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const data: Vehicle = {
      vehicle,
      brand,
      year,
      description,
      color,
      sold,
    };
    if (vehicleEdit) {
      data.id = vehicleEdit.id;
    }

    onSubmit(data);
    reset();
    onClose();
  };

  useEffect(() => {
    if (vehicleEdit) {
      setVehicle(vehicleEdit.vehicle);
      setBrand(vehicleEdit.brand);
      setYear(vehicleEdit.year);
      setDescription(vehicleEdit.description);
      setColor(vehicleEdit.color);
      setSold(vehicleEdit.sold);
    }
  }, [vehicleEdit]);

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <form onSubmit={handleSubmit}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="w-full">
                  <div className="mb-4">
                    <label
                      htmlFor="vehicle"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Modelo:
                    </label>
                    <input
                      type="text"
                      id="vehicle"
                      value={vehicle || ""}
                      required
                      maxLength={100}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="brand"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Marca:
                    </label>
                    <select
                      id="brand"
                      name="brand"
                      value={brand || ""}
                      onChange={(e) => setBrand(e.target.value)}
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-r-md"
                    >
                      <option value={""}>Nenhum</option>
                      {brandVehicles.map((option: string, index: number) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="year"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Ano:
                    </label>

                    <select
                      id="year"
                      name="year"
                      value={year || ""}
                      required
                      onChange={(e) => setYear(Number(e.target.value))}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-r-md"
                    >
                      <option value={""}>Nenhum</option>
                      {yearVehicles().map((option, index: number) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="color"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Cor:
                    </label>
                    <select
                      id="color"
                      name="color"
                      value={color || ""}
                      required
                      onChange={(e) => setColor(e.target.value)}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-r-md"
                    >
                      <option value={""}>Nenhum</option>
                      {colorVehicles.map(
                        (option: { label: string }, index: number) => (
                          <option key={index} value={option.label}>
                            {option.label}
                          </option>
                        )
                      )}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Descrição:
                    </label>
                    <textarea
                      id="description"
                      value={description || ""}
                      rows={3}
                      maxLength={1000}
                      onChange={(e) => setDescription(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>

                  <div className="mb-4 flex items-center">
                    <input
                      type="checkbox"
                      id="sold"
                      checked={sold}
                      onChange={(e) => setSold(e.target.checked)}
                      className="form-checkbox h-4 w-4 text-indigo-600 pr-1"
                    />
                    <label htmlFor="sold" className="ml-2 text-gray-700">
                      Vendido
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Save
              </button>

              <button
                onClick={onClose}
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
