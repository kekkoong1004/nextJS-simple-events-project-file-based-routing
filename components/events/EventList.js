import React from 'react';
import EventItem from './EventItem';
import styles from './EventList.module.css';

function EventList(props) {
  return (
    <ul className={styles.list}>
      {props.events.map(event => (
        <EventItem key={event.id} data={event} />
      ))}
    </ul>
  );
}

export default EventList;
