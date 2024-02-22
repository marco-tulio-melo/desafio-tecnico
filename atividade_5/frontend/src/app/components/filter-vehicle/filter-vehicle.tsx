"use client";

import React, { useState } from "react";
import { brandVehicles } from "../../utils/brand-vehiches";
import { colorVehicles } from "@/app/utils/color-vehiches";
import { GetVehiclesFilter } from "@/app/types/vehicles.type";
import { yearVehicles } from "@/app/utils/year-vehiches";

type FilterVehicleProps = {
  onFilter: (data: GetVehiclesFilter) => void;
};

export const FilterVehicle = ({ onFilter }: FilterVehicleProps) => {
  const [brand, setBrand] = useState<string | undefined>();
  const [color, setColor] = useState<string | undefined>();
  const [year, setYear] = useState<string | undefined>();
  const [onlyLastWeek, setOnlyLastWeek] = useState<boolean | undefined>(false);

  const handleBrand = (e: {
    target: { value: React.SetStateAction<string | undefined> };
  }) => {
    setBrand(e.target.value);
  };
  const handleColor = (e: {
    target: { value: React.SetStateAction<string | undefined> };
  }) => {
    setColor(e.target.value);
  };

  const handleYear = (e: {
    target: { value: React.SetStateAction<string | undefined> };
  }) => {
    setYear(e.target.value);
  };

  const handleFilterClick = () => {
    onFilter({ brand, color, year, onlyLastWeek });
  };

  const handleClearClick = () => {
    setBrand(undefined);
    setColor(undefined);
    setYear(undefined);
    setOnlyLastWeek(false);
    onFilter({});
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-end w-full max-w-lg">
        <div className="p-4 min-w-64">
          <label htmlFor="brand" className="block font-bold">
            Marca:
          </label>
          <select
            id="brand"
            value={brand || ""}
            onChange={handleBrand}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-r-md"
          >
            <option>Nenhum</option>
            {brandVehicles.map((option: string, index: number) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="p-4 min-w-64">
          <label htmlFor="color" className="block font-bold">
            Cor:
          </label>
          <select
            id="color"
            value={color || ""}
            onChange={handleColor}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-r-md"
          >
            <option>Nenhum</option>
            {colorVehicles.map((option: { label: string }, index: number) => (
              <option key={index} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="p-4 min-w-64">
          <label htmlFor="year" className="block font-bold">
            Ano:
          </label>
          <select
            id="year"
            value={year || ""}
            onChange={handleYear}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm rounded-r-md"
          >
            <option>Nenhum</option>
            {yearVehicles().map((option, index: number) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="px-4 py-6 items-end min-w-64">
          <input
            type="checkbox"
            id="onlyLastWeek"
            value={String(onlyLastWeek)}
            onChange={(e) => setOnlyLastWeek(e.target.checked)}
            className="form-checkbox h-4 w-4 text-indigo-600 pr-1"
          />
          <label htmlFor="onlyLastWeek" className="ml-2 text-gray-700">
            Apenas da última semana
          </label>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="py-4">
          <button
            onClick={handleClearClick}
            className="ml-2 min-w-24 px-4 py-2 border border-indigo-500 text-sm font-medium rounded-md text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Limpar
          </button>
        </div>

        <div className="py-4 ">
          <button
            onClick={handleFilterClick}
            className="ml-2 min-w-24 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Filtrar
          </button>
        </div>
      </div>
    </div>
  );
};
