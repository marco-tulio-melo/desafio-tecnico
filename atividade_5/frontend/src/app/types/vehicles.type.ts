export type GetVehiclesFilter = {
  brand?: string | undefined;
  color?: string | undefined;
  year?: string | undefined;
  onlyLastWeek?: boolean | undefined;
};

export type Vehicle = {
  id?: string | undefined;
  vehicle: string | undefined;
  brand: string | undefined;
  year: number | undefined;
  description: string | undefined;
  color: string | undefined;
  sold: boolean | undefined;
  created?: Date | undefined;
  updated?: Date | undefined;
};
