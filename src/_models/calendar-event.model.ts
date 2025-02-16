type CalendarEvent = {
  id: number;
  title: string;
  date: string;
  description: string;
  entryFee?: string;
  location: string;
  image?: string;
  ticketLink?: string;
  highlights: string[];
};

export default CalendarEvent;
