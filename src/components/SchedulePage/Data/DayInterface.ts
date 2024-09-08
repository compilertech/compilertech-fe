export interface SubChild {
  time: string;
  heading: string;
  description?: string;
  link?: string;
  color: string;
}

export interface ScheduleTableChild {
  mainTime: string | null;
  leading: string | null;
  subLeading?: string;
  subChildren: SubChild[];
  color: string;
}

export interface ScheduleTable {
  date: string;
  scheduleTableChildren: ScheduleTableChild[];
}
