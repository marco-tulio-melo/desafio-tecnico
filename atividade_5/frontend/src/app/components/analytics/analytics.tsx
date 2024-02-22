import React from "react";
import { AnalyticsItem, AnalyticsType } from "../../types/analytics.type";

type AnalyticsProps = AnalyticsType;

const AnalyticsCardNotSold = ({
  title,
  value,
}: {
  title: string;
  value: number;
}) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-2 py-5 sm:p-4">
        <div className="flex items-center">
          <div className="ml-2 w-0 flex-1">
            <dt className="text-sm font-medium text-indigo-500">{title}</dt>
            <dd className="flex items-baseline ml-2">
              <div className="text-2xl font-semibold text-gray-900">
                {value}
              </div>
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnalyticsCard = ({
  title,
  items,
}: {
  title: string;
  items: AnalyticsItem[];
}) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-2 py-5 sm:p-4">
        <div className="flex items-center">
          <div className="ml-2 w-0 flex-1">
            <dt className="text-sm font-medium text-indigo-500 truncate">
              {title}
            </dt>
            <dd className="flex flex-col items-baseline ml-2 overflow-y-auto max-h-32">
              <ul className="bg-white shadow-md rounded-md min-w-full">
                {items.map((item) => (
                  <li
                    className="border-b border-gray-200 p-2 pr-4 flex justify-between items-center"
                    key={item.name}
                  >
                    <strong>{item.name}</strong>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Analytics = ({
  notSold,
  groupedDecade,
  groupedBrand,
}: AnalyticsProps) => {
  return (
    <div className="flex flex-col min-w-64 space-y-5 mt-1 mr-1">
      <AnalyticsCardNotSold title="Não vendidos" value={notSold || 0} />
      <AnalyticsCard title="Década de fabricação" items={groupedDecade || []} />
      <AnalyticsCard title="Marca" items={groupedBrand || []} />
    </div>
  );
};
