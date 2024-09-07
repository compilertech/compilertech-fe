export interface SubChild {
  time: string,
  heading: string,
  description: string,
  subDescription?: string,
  link?: string
  color: string
}

export interface ScheduleTableChild {
  mainTime: string,
  leading: string,
  trailing: string,
  subChildren: SubChild[]
  color: string
}


export interface ScheduleTable {
  date: string,
  scheduleTableChildren: ScheduleTableChild[]
}




