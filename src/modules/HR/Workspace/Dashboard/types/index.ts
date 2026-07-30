export interface Application {
  id: number;
  type: string;
  dates: string;
  days: string;
  status: string;
  statusStyle: string;
  dot: string;
  dateApplied: string;
}

export interface Policy {
  id: number;
  title: string;
  category: string;
  date: string;
  size: string;
  code: string;
}

export interface Notice {
  id: number;
  title: string;
  date: string;
  category: string;
  dot: string;
  badge: string;
  content: string;
}

export interface CalendarDay {
  date: string | null;
  status: string;
  type?: string;
}

export interface DailyLog {
  date: string;
  hours: string;
  checkIn: string;
  checkOut: string;
  active: boolean;
  empty?: boolean;
}

export interface LeaveFormData {
  leaveType: string;
  startDate: string;
  endDate: string;
  reason: string;
}
