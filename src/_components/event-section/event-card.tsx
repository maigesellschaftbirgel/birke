"use client";

import React from "react";
import Image from "next/image";
import {
  MapPinIcon,
  CurrencyEuroIcon,
  PlusIcon,
  ShareIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import {
  atcb_action,
  ATCBActionEventConfig,
} from "add-to-calendar-button/no-pro";
import { DateTime } from "luxon";
import { CalendarEvent } from "@/_models";

interface EventCardProps {
  calendarEvent: CalendarEvent;
}

const EventCard: React.FC<EventCardProps> = ({ calendarEvent }) => {
  const {
    title,
    description,
    date,
    image,
    location,
    entryFee,
    highlights,
    ticketLink,
  } = calendarEvent;

  const dt = DateTime.fromISO(date);
  const imageSrc = "/TEMP_DB/CALENDAR_EVENTS/IMAGES/" + image;

  const handleDownload = () => {
    const config: ATCBActionEventConfig = {
      name: title + " - Maigesellschaft Birgel",
      description: description,
      startDate: dt.toISODate()?.toString(),
      startTime: dt.toLocaleString(DateTime.TIME_SIMPLE),
      location: "Beythaler Str. 2, 52355 Düren",
      endTime: "23:59",
      organizer: "Maigesellschaft Birgel|vorstand@maigesellschaftbirgel.de",
      options: ["Apple", "Google"],
      timeZone: "Europe/Berlin",
      language: "de",
    };
    atcb_action(config);
  };

  return (
    <article className="bg-card text-huntergreen-900 flex flex-col pb-4 shadow-lg">
      {image ? (
        <div className="h-64">
          <Image
            src={imageSrc}
            alt={title}
            width="500"
            height="256"
            className="h-64 object-cover"
          ></Image>
        </div>
      ) : (
        <div className="flex h-24 flex-col justify-end">
          <div className="divider"></div>
        </div>
      )}

      <div className="flex flex-row gap-6 px-8 py-6">
        <div>
          <div className="bg-primary text-primary-content -mt-20 flex w-32 flex-col gap-3 px-6 py-8 text-right font-bold">
            <p className="text-3xl">
              {dt.toLocaleString({ day: "numeric", month: "long" })}
            </p>
            <p className="text-xs font-light">•••••••</p>
            <div className="">
              <p className="">{dt.toLocaleString({ weekday: "long" })}</p>
              <p className="">{dt.toLocaleString(DateTime.TIME_SIMPLE)}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="badge badge-outline badge-accent badge-sm font-bold">
            {dt.toRelative()}
          </div>
          <h3 className="text-3xl/normal font-bold">{title}</h3>
          <div className="flex flex-row items-center gap-1">
            <MapPinIcon className="h-6 w-6" />
            <p>{location}</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <CurrencyEuroIcon className="h-6 w-6" />
            <p>{entryFee ? entryFee : "Eintritt frei"}</p>
          </div>
        </div>
      </div>
      <p className="px-8 py-2 text-sm/relaxed">{description}</p>

      <div className="flex flex-row flex-wrap gap-2 px-8 py-4">
        {highlights.map((highlight) => (
          <div
            key={highlight}
            className="badge badge-sm badge-primary badge-soft font-semibold"
          >
            {highlight}
          </div>
        ))}
      </div>
      <div className="divider"></div>
      <div className="flex flex-col gap-3 px-8 py-4">
        {ticketLink && (
          <div className="flex flex-row justify-end gap-3">
            <a className="btn btn-accent" href={ticketLink} target="_blank">
              <ShoppingCartIcon className="h-5 w-5" />
              Tickets kaufen
            </a>
          </div>
        )}
        <div className="flex flex-row justify-end gap-3">
          <button
            className="btn btn-accent btn-outline"
            onClick={handleDownload}
          >
            <PlusIcon className="h-5 w-5" />
            Eintragen
          </button>
          <button className="btn btn-accent btn-outline">
            Teilen
            <ShareIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
