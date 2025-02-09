import { PlusCircleIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

const EventSection = () => {
  return (
    <section className="flex flex-col items-start gap-6 p-8">
      <header className="flex flex-col items-start gap-4">
        <CalendarDaysIcon className="h-12 w-12" />
        <h2 className="border-b-2 border-dotted pb-1 text-3xl/normal font-bold">
          Unsere Veranstaltungen
        </h2>
        <p className="font-medium">Die Veranstaltungen im Maijahr 2025</p>

        <button className="btn btn-accent">
          <PlusCircleIcon className="h-6 w-6" />
          Alle im Kalender eintragen
        </button>
      </header>
    </section>
  );
};

export default EventSection;
