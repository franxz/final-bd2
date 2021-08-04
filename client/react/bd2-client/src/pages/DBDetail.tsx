import React from 'react';
import '../index.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Table from '../components/Table';

interface Props {
}

export default function Sidebar(props: Props) {
  const [code, setCode] = React.useState(
    `SELECT *\nFROM empleados e\nWHERE e.salario > 48000 AND e.ciudad <> 'Mar del Plata'`
  );

  // esto sería la respuesta del server
  const data = [
    { id: 14, nombre: "Juan", salario: "50000", ciudad: "Buenos Aires" },
    { id: 18, nombre: "Pablo", salario: "55000", ciudad: "Rosario" },
    { id: 22, nombre: "Mariano", salario: "49000", ciudad: "Buenos Aires" },
    { id: 23, nombre: "Camila", salario: "75000", ciudad: "Buenos Aires" },
    { id: 31, nombre: "Pedro", salario: "52000", ciudad: "Córdoba" }
  ]

  const columns = [
    {
      Header: "id",
      accessor: "id",
    },
    {
      Header: "nombre",
      accessor: "nombre",
    },
    {
      Header: "salario",
      accessor: "salario",
    },
    {
      Header: "ciudad",
      accessor: "ciudad",
    },
  ]

  return (
    <div className="py-4 pl-16 pr-12">
      <div className="flex items-center mb-2">
      <h1 className="text-3xl font-bold text-gray-900">
        Base de Datos 1
      </h1>

      <button className="ml-8 transition duration-200 ease-in-out py-1 px-4 bg-blue-500 hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-110 text-gray-900 text-sm font-medium shadow-md rounded-3xl">
        Cambiar nombre
      </button>

      <button className="ml-4 transition duration-200 ease-in-out py-1 px-4 bg-blue-500 hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-110 text-gray-900 text-sm font-medium shadow-md rounded-3xl">
        Ver tablas
      </button>
      </div>

      <CodeEditor
        value={code}
        language="sql"
        placeholder="Escribe aquí tu código SQL"
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        minHeight={100}
        style={{
          fontSize: 14,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
        className="mb-4 border border-gray-200 border-opacity-50 shadow-md"
      />

      <button className="mb-8 transition duration-300 ease-in-out px-4 py-3 w-64 bg-blue-500 hover:bg-green-400 transform hover:-translate-y-1 hover:scale-110 text-gray-900 text-xl font-medium shadow-xl rounded-3xl">
        Realizar consulta
      </button>

      <Table columns={columns} data={data} />
    </div>
  );
}