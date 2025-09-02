import { fetchUser } from "@/APIs/api";
import UserDetails from '@/components/home/UserDetails';

export default async function UserDetailPage({ params }: { params: { id: string } }) {
  const user = await fetchUser(params.id);
  return <UserDetails user={user} />;
}
