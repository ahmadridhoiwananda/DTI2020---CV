import { useState, useEffect } from 'react';

const useTitle = () => {
  const [title, setTitle] = useState(`Ahmad RI`);

  useEffect(() => {
    document.title = `CV - ${title}`;
  }, [title]);

  return [title, setTitle];
};

export default useTitle;
