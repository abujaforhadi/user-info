'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: 'blue' | 'green' | 'purple';
}

export default function ContactItem({ icon: Icon, label, value, color }: Props) {
  const colorMap = {
    blue: 'text-blue-600 bg-blue-50 border-blue-100',
    green: 'text-green-600 bg-green-50 border-green-100',
    purple: 'text-purple-600 bg-purple-50 border-purple-100',
  } as const;

  return (
    <motion.div
      whileHover={{ x: 10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`flex items-center space-x-4 p-4 rounded-xl border ${colorMap[color]}`}
    >
      <Icon className="w-5 h-5" />
      <div className="flex-1">
        <p className="text-sm text-gray-500 font-medium">{label}</p>
        <p className="text-gray-900 font-semibold">{value}</p>
      </div>
    </motion.div>
  );
}
