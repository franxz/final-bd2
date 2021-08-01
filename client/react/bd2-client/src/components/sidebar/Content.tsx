import React from 'react';
import '../../index.css';
import Action from './Action';
import Title from './Title';

interface Props {
}

export default function Content(props: Props) {
  return (
    <div className="p-2 pt-4 space-y-4">

      <div>
        <p>
          <Title text="Franco" />
        </p>

        <ul className="space-y-2 text-sm">
          <Action name="Consultas guardadas" />
          <Action name="Historial" />
          <Action name="Cerrar sesión" />
        </ul>
      </div>

      <div>
        <p>
          <Title text="Bases de datos" />
        </p>

        <ul className="space-y-2 text-sm">
          <Action name="Base de datos 1" />
          <Action name="Base de datos 2" />
          <Action name="Crear nueva base de datos" />
        </ul>
      </div>
    </div>
  );
}