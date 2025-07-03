import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t py-6">
      <div className="container mx-auto text-center text-gray-500">
        <p>Form Template Builder &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}