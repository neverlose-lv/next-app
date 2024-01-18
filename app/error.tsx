'use client';
import Error from 'next/error';
import React from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log('Error', error);
  return (
    <>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
      <div>An unexpected error has occured.</div>
    </>
  );
};

export default ErrorPage;
