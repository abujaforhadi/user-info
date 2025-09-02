"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Building2, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { User } from "@/APIs/api";

interface Props {
  user: User;
  index: number;
  onUserClick: (u: User) => void;

}

export default function UserCard({ user, index, onUserClick }: Props) {
  const seed = encodeURIComponent(user.name);
  const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`;

  return (
    <Link href={`/users/${user.id}`} className="block">
     onClick={() => onUserClick(user)}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.1 * index,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          y: -8,
          rotateY: 5,
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
        className="cursor-pointer group"
      >
        <Card className="border-0 overflow-hidden">
          <CardHeader className="pb-4 relative">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-16 h-16 rounded-2xl mx-auto mb-4 overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600"
            >
              <Image
                src={avatarUrl}
                alt={`${user.name} avatar`}
                width={64}
                height={64}
                className="rounded-lg"
                unoptimized
              />
            </motion.div>

            <CardTitle className="text-center text-gray-900 group-hover:text-blue-600 transition-colors">
              {user.name}
            </CardTitle>
            <p className="text-center text-gray-500 text-sm">
              @{user.username}
            </p>
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4 text-blue-500" />
              <span className="truncate">{user.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Building2 className="w-4 h-4 text-green-500" />
              <span className="truncate">{user.company.name}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-red-500" />
              <span className="truncate">{user.address.city}</span>
            </div>

            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <Badge
                variant="secondary"
                className="bg-blue-100 text-blue-700 border-blue-200"
              >
                View Details
              </Badge>
              <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
