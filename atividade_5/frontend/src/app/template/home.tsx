"use client";

import { TableVehicles } from "../components/vehicle-card/table-vehicles";
import { Analytics } from "../components/analytics/analytics";
import { FilterVehicle } from "../components/filter-vehicle/filter-vehicle";
import { useCallback, useEffect, useState } from "react";
import { FormCreateVehicle } from "../components/form-create-vehicle/form-create-vehicle";
import {
  createVehicle,
  deleteVehicle,
  getVehicles,
  updateVehicle,
  updateVehicleSold,
  getAnalytics,
} from "../services/vehicles";
import { GetVehiclesFilter, Vehicle } from "../types/vehicles.type";
import { AnalyticsType } from "../types/analytics.type";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsType>({});
  const [vehicleEdit, setVehicleEdit] = useState<Vehicle | undefined>(
    undefined
  );

  const handleSubmit = async (data: Vehicle) => {
    if (!data.id) {
      await createVehicle(data);
    } else {
      await updateVehicle(data);
    }
    await getVehiclesAPI({});
    setIsModalOpen(false);
  };

  const getVehiclesAPI = useCallback(async (data: GetVehiclesFilter) => {
    const vehiclesresponse = await getVehicles(data);
    const analyticsResponse = await getAnalytics();
    setVehicles(vehiclesresponse);
    setAnalytics(analyticsResponse);
  }, []);

  const onFilter = async (data: GetVehiclesFilter) =>
    await getVehiclesAPI(data);

  const handleEdit = (vehicle: Vehicle) => {
    setVehicleEdit(vehicle);
    setIsModalOpen(true);
  };

  const handleDelete = async (id?: string) => {
    await deleteVehicle(String(id));
    await getVehiclesAPI({});
  };

  const handleUpdateSold = async (id?: string, sold?: boolean) => {
    await updateVehicleSold(String(id), Boolean(sold));
    await getVehiclesAPI({});
  };

  useEffect(() => {
    getVehiclesAPI({});
  }, [getVehiclesAPI]);

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded-md p-4 min-w-[1200px] mx-auto">
        <FilterVehicle onFilter={onFilter} />
        <hr className="mt-4 border-t-2 border-indigo-100"></hr>
        <div className="flex ">
          <Analytics
            groupedBrand={analytics.groupedBrand}
            groupedDecade={analytics.groupedDecade}
            notSold={analytics.notSold}
          />
          <div className="border-l-2 border-indigo-100 h-auto mx-2"></div>
          <TableVehicles
            vehicles={vehicles}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleUpdateSold={handleUpdateSold}
          />
        </div>
        <hr className="border-t-2 border-indigo-100"></hr>

        <div className="flex justify-end mt-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="ml-2 min-w-24 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Adicionar veículo
          </button>
          <FormCreateVehicle
            isOpen={isModalOpen}
            vehicleEdit={vehicleEdit}
            onClose={() => {
              setVehicleEdit(undefined);
              setIsModalOpen(false);
            }}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </main>
  );
};
