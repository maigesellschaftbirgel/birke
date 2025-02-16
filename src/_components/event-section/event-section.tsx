import { CalendarDaysIcon, PlusIcon } from "@heroicons/react/24/outline";
import EventCard from "./event-card";
import * as CalendarEvents from "@/_assets/TEMP_DB/CALENDAR_EVENTS.json";

const EventSection = () => {
  return (
    <section className="mb-10 flex flex-col items-start gap-6">
      <header className="flex flex-col items-start gap-4 p-8">
        <CalendarDaysIcon className="h-12 w-12" />
        <h2 className="border-b-2 border-dotted pb-1 text-3xl/normal font-bold">
          Unsere Veranstaltungen
        </h2>
        <p className="font-medium">Die Veranstaltungen im Maijahr 2025</p>

        <button className="btn btn-accent">
          <PlusIcon className="h-5 w-5" />
          Alle im Kalender eintragen
        </button>
      </header>

      <div className="flex flex-col gap-24">
        {CalendarEvents.map((event) => (
          <EventCard key={event.id} calendarEvent={event} />
        ))}
      </div>
    </section>
  );
};

export default EventSection;
