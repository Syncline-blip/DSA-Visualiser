import React from 'react';

const Visualizer = ({ type }) => {
  switch (type) {
    case 'array':
      return <div>Array Visualization Placeholder</div>;
    case 'linked-list':
      return <div>Linked List Visualization Placeholder</div>;
    default:
      return <div>Visualization not found</div>;
  }
};

export default Visualizer;
