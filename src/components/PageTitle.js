import React from 'react';

export default function PageTitle(props) {
  return (
    <>
      {props.title ? (
        <h2 className="text-2xl mb-5"> {props.title}</h2>
      ) : (
        <h2> Title</h2>
      )}
    </>
  );
}
