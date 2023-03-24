import React from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '@/DUMMY_DATA';
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';
import ErrorPage from '@/components/ui/error/ErrorPage';

function EventDetail() {
  const router = useRouter();
  const eventId = router.query.id;
  const eventData = getEventById(eventId);

  if (!eventData) {
    const message = 'No events found on given Id.';
    const action = 'Return to Home page';
    return <ErrorPage message={message} action={action} actionLink="/" />;
  }

  return (
    <>
      <EventSummary title={eventData.title} />
      <EventLogistics
        date={eventData.date}
        address={eventData.location}
        image={eventData.image}
        imageAlt={eventData.title}
      />
      <EventContent>
        <p>{eventData.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetail;
