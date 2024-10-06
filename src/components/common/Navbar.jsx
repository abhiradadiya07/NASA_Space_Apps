import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-black text-white sticky top-0 z-50 border-b-2 ">
      <div className="container mx-auto flex justify-evenly items-center h-28">
        <img src="/public/Images/file.png" alt="Logo" className="h-48" />
        <img src="/public/Images/Untitled.png" alt="Logo" className="h-24" />
      </div>
    </div>
  );
}

export default Navbar;
