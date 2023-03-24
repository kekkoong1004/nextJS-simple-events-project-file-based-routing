import React from 'react';
import ErrorAlert from './error-alert';
import Button from '../Button';

function ErrorPage(props) {
  const { message, action, actionLink } = props;
  return (
    <>
      <ErrorAlert>{message}</ErrorAlert>
      <div className="center">
        <Button link={actionLink}>{action}</Button>
      </div>
    </>
  );
}

export default ErrorPage;
