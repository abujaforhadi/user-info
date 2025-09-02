'use client';

import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Phone,
  Globe,
  Building,
  MapPin,
  User as UserIcon,
  Briefcase,
} from "lucide-react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng: string };
  };
  company: { name: string; catchPhrase: string; bs: string };
};

export default function UserDetails({ user }: { user: User }) {
  const seed = encodeURIComponent(user.name);
  const avatarUrl = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}`;

  const formatAddress = (address: User["address"]) =>
    `${address.suite} ${address.street}, ${address.city} ${address.zipcode}`;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center space-x-6 p-6 bg-gradient-primary/10 rounded-xl"
      >
        <Avatar className="h-20 w-20 ring-4 ring-primary/30">
          <AvatarImage src={avatarUrl} alt={`${user.name} avatar`} />
        </Avatar>

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-foreground">{user.name}</h2>
          <p className="text-lg text-muted-foreground">@{user.username}</p>
          <Badge variant="secondary" className="mt-2">
            <UserIcon className="h-3 w-3 mr-1" />
            User ID: {user.id}
          </Badge>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-glass-border">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Mail className="h-5 w-5 mr-2 text-primary" />
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{user.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{user.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {user.website}
                </a>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-glass-border">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary" />
              Address
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-foreground">
                {formatAddress(user.address)}
              </p>
              <div className="pt-2 text-xs text-muted-foreground">
                <p>Coordinates:</p>
                <p>Lat: {user.address.geo.lat}</p>
                <p>Lng: {user.address.geo.lng}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-2"
        >
          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-glass-border">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-primary" />
              Company Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Building className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{user.company.name}</span>
              </div>
              <div className="pl-7">
                <p className="text-sm text-muted-foreground italic">
                  &quot;{user.company.catchPhrase}&quot;
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Business: {user.company.bs}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
