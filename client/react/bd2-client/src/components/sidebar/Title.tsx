import React from 'react';
import '../../index.css';

interface Props {
  text: String,
}

export default function Title(props: Props) {
  return (
    <span className="pl-2 text-lg font-semibold text-gray-400">
      { props.text }
    </span>
  );
}