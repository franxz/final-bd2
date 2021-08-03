import React from 'react';
import '../index.css';
import CodeEditor from '@uiw/react-textarea-code-editor';

interface Props {
}

export default function Sidebar(props: Props) {
  const [code, setCode] = React.useState(
    `SELECT *\nFROM empleados e\nWHERE e.salario > 48000 AND e.ciudad <> 'Mar del Plata'`
  );

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

      <button className="transition duration-500 ease-in-out p-4 w-64 bg-blue-500 hover:bg-green-400 transform hover:-translate-y-1 hover:scale-110 text-gray-900 text-xl font-medium shadow-xl rounded-3xl">
        Realizar consulta
      </button>
    </div>
  );
}