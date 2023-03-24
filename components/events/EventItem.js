import React from 'react';
import Button from '@/components/ui/Button';
import styles from './EventItem.module.css';
import AddressIcon from '@/public/icons/address-icon';
import ArrowRightIcon from '@/public/icons/arrow-right-icon';
import DateIcon from '@/public/icons/date-icon';

function EventItem(props) {
  const { title, location, date, image, id } = props.data;
  const humanReadableDate = new Date(date).toLocaleDateString('en-sg', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const readableLocation = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{readableLocation}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore more</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
