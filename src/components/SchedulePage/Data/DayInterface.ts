export interface SubChild {
  time: string;
  heading: string;
  ytLink?: string|null;
  presenters?: {
    name: string;
    link?: string;
  }[];
  color: string;
}

export interface ScheduleTableChild {
  mainTime: string | null;
  leading: string | null;
  sessionLink?: string | null;
  presenters?: {
    name: string;
    link?: string;
  }[];
  subChildren: SubChild[];
  color: string;
}

export interface ScheduleTable {
  date: string;
  scheduleTableChildren: ScheduleTableChild[];
}
