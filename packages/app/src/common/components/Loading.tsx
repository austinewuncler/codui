import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

const Loading = (): JSX.Element => {
  return (
    <div className="grid h-full place-content-center">
      <PuffLoader color="#0EA7E9" />
    </div>
  );
};

export default Loading;
