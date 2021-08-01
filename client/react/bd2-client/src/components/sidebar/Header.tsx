import React from 'react';
import '../../index.css';

interface Props {
}

export default function Header(props: Props) {
  return (
    <div className="bg-blue-500 bg-opacity-25 p-2">
      <img className="w-1/4" src="https://www.postgresqltutorial.com/wp-content/uploads/2021/04/postgresql-tutorial-homepage.svg" alt="" />
    </div>
  );
}