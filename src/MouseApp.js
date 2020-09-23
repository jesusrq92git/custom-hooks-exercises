import React from 'react';
import useBackground from './hooks/useBackground';

const MouseApp = () => {
  const { background, position } = useBackground();

  return (
    <div>
      <pre style={{ background, height: '100vh' }}>
        {JSON.stringify(position, null, 2)}
      </pre>
    </div>
  )
}

export default MouseApp;