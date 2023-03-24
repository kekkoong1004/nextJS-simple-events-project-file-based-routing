import React from 'react';
import { getFilteredEvents } from '@/DUMMY_DATA';
import { useRouter } from 'next/router';
import EventList from '@/components/events/EventList';
import ResultsTitle from '@/components/events/results-title';
import ErrorPage from '@/components/ui/error/ErrorPage';

function FilterEvents() {
  const router = useRouter();
  const slug = router.query.slug;

  if (!slug) {
    return <p>Loading...</p>;
  }

  if (!+slug[0] || !+slug[1] || +slug[1] > 12 || +slug[1] < 1) {
    const message = 'Not a valid date. Please try again';
    const action = 'Return to All Events';
    return <ErrorPage message={message} action={action} actionLink="/events" />;
  }

  const year = +slug[0];
  const month = +slug[1];
  const filterEvents = getFilteredEvents({ year, month });
  const date = new Date(year, month - 1);

  if (!filterEvents || filterEvents.length === 0) {
    const message = 'No events found on the specific date.';
    const action = 'Return to All Events';
    return <ErrorPage message={message} action={action} actionLink="/events" />;
  }

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filterEvents} />
    </>
  );
}

export default FilterEvents;
