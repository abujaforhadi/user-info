export type User = {
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

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export const fetchUser = async (id: string | number): Promise<User> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
};
