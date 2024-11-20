import React from 'react';
import Visualizer from '../../../components/Visualizer';
import Quiz from '../../../components/Quiz';


const BubbleSort = () => (
  <div>
    <h2>Array Visualization</h2>
    <Visualizer type="bubblesort" />
    <Quiz topic="bubblesort" />
  </div>
);

export default BubbleSort;