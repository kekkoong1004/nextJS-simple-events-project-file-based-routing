import React from 'react';
import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '../DUMMY_DATA';

function HomePage() {
  const events = getFeaturedEvents();
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

export default HomePage;
