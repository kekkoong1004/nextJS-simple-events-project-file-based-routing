import React from 'react';
import { getAllEvents } from '@/DUMMY_DATA';
import EventList from '@/components/events/EventList';
import EventSearch from '@/components/events/EventSearch';
import { useRouter } from 'next/router';

function AllEventsPage() {
  const router = useRouter();
  const allEvents = getAllEvents();
  const onSearchHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <EventSearch onSearch={onSearchHandler} />
      <EventList events={allEvents} />
    </>
  );
}

export default AllEventsPage;
