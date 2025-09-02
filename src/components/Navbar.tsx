"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            User Management
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
