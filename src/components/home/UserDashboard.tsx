'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Grid3X3,
  List,
  Filter,
  TrendingUp,
  Activity,
  Users as UsersIcon,
  Loader2
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { User } from '@/APIs/api';
import Pagination from './Pagination';
import UserCard from './UserCard';
import UserListItem from './UserListItem';

interface Props {
  users: User[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (p: number) => void;
  onUserClick: (u: User) => void;
  loading: boolean;
  totalUsers: number;
  viewMode: 'grid' | 'list';
  setViewMode: (m: 'grid' | 'list') => void;
}

export default function UserDashboard({
  users,
  searchQuery,
  setSearchQuery,
  currentPage,
  totalPages,
  setCurrentPage,
  onUserClick,
  loading,
  totalUsers,
  viewMode,
  setViewMode,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-12"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="mb-6 lg:mb-0">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center space-x-3 mb-4"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <UsersIcon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <div>
                <h1 className=" text-4xl font-bold text-gray-900 text-center">User Management</h1>
                <p className="text-gray-600">Enterprise Dashboard</p>
              </div>
            </motion.div>
          </div>

          
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-20"
        >
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 border-gray-200 focus:ring-blue-500 focus:border-blue-500 bg-white/80 backdrop-blur-sm"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4" />
            </Button>
            
          </div>
        </motion.div>
      </motion.div>

      {loading && (
        <div className="flex justify-center items-center py-32">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity }
            }}
            className="relative"
          >
            <Loader2 className="w-16 h-16 text-blue-600" />
            <div className="absolute inset-0 w-16 h-16 border-4 border-blue-200 rounded-full animate-ping"></div>
          </motion.div>
        </div>
      )}

      {!loading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {users.map((u, i) => (
                <UserCard key={u.id} user={u} index={i} onClick={onUserClick} />
              ))}
            </div>
          ) : (
            <div className="space-y-4 mb-12">
              {users.map((u, i) => (
                <UserListItem key={u.id} user={u} index={i} onClick={onUserClick} />
              ))}
            </div>
          )}
        </motion.div>
      )}

      {!loading && totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      )}
    </motion.div>
  );
}
