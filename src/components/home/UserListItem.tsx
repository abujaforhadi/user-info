'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { User } from '@/APIs/api';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

interface Props {
  user: User;
  index: number;
  onClick: (u: User) => void;
}

export default function UserListItem({ user, index, onClick }: Props) {
  const avatarUrl = useMemo(
    () =>
      `https://api.dicebear.com/9.x/pixel-art/svg?seed=${encodeURIComponent(
        user.name
      )}`,
    [user.name]
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ x: 10, scale: 1.01 }}
    >
      <Link
        href={`/users/${user.id}`}
        onClick={() => onClick(user)}
        className="block group cursor-pointer"
      >
        <Card className="border-0 overflow-hidden transition-shadow hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 6 }}
                className="w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
              >
                <Image
                  src={avatarUrl}
                  alt={`${user.name} avatar`}
                  width={56}
                  height={56}
                  className="rounded-md"
                  unoptimized
                  sizes="56px"
                />
              </motion.div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 gap-y-2">
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-500">@{user.username}</p>
                </div>

                <div className="flex items-center space-x-2 min-w-0">
                  <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                  <span className="text-sm text-gray-600 truncate w-40 md:w-auto">
                    {user.email}
                  </span>
                </div>

                <div className="flex items-center space-x-2 min-w-0">
                  <Building2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-sm text-gray-600 truncate w-40 md:w-auto">
                    {user.company.name}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700 border-green-200"
                  >
                    View Details
                  </Badge>
                  <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
