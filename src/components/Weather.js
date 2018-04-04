import React from 'react';

// stateless functional components
// output only - no need for extending React.Component
// if only returning single element (div) can explicitly return
const Weather = props => (
  <div>
    { props.city && props.country && <p>Location: { props.city}, { props.country}</p>}
    { props.temperature && <p>Temperature: { props.temperature}</p>}
    { props.humidity && <p>Humidity: { props.humidity}</p>}
    { props.description && <p>Conditions: { props.description}</p>}

    { props.error && <p>Error: { props.error}</p>}
  </div>
);

export default Weather;
