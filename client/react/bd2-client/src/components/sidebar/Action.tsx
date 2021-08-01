import React from 'react';
import '../../index.css';

interface Props {
  name: String,
}

export default function Action(props: Props) {
  return (
    <li>
      <a href="#" className="flex items-center space-x-3 text-gray-500 p-2 rounded-md font-medium hover:text-gray-200 focus:text-gray-200 border-2 border-opacity-0 focus:border-blue-500 focus:border-opacity-100 focus:shadow-outline">
        <span className="text-gray-600">
            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
        </span>
        <span>{ props.name }</span>
      </a>
    </li>
  );
}