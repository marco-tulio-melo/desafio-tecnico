export type GetVehiclesFilter = {
  brand?: string | undefined;
  color?: string | undefined;
  year?: string | undefined;
  onlyLastWeek?: boolean | undefined
};

export type AnalyticsItem ={
  name: string,
  value: number
}

export type AnalyticsType = {
  groupedBrand?: AnalyticsItem[]
  groupedDecade?: AnalyticsItem[];
  notSold?: number
 
};
