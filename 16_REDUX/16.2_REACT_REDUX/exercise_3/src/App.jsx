import React from 'react';
import TrafficSignal from './components/TrafficSignal';
import Cars from './components/Cars';
import './App.css';

export default function App() {
  return (
    <div>
      <TrafficSignal />
      <Cars/>
    </div>
  );
}
