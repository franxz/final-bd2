import React from 'react';
import '../../index.css';
import Title from './Title';

interface Props {
}

export default function Footer(props: Props) {
  return (
    <div className="mt-auto p-2 pb-6 bg-gray-900">
      <p className="mb-2">
        <Title text="Consumo" />
        <span className="ml-16 align-baseline text-sm font-light text-gray-600">
          Se renueva en 2h 45m
        </span>
      </p>

      <ul className="space-y-2 text-sm">
        <li className="text-gray-500 ml-2 font-medium">
          <span>Cantidad de consultas 97%</span>
        </li>
        
        <li className="text-gray-500 ml-2 font-medium">
          <span>Espacio 49%</span>
        </li>
      </ul>
    </div>
  );
}