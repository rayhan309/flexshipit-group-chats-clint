import { formatDistanceToNow } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import useAxiosSuer from "../../hooks/useAxiosSuer";
import UserCardSkeleton from "./UserCardSkeleton";

const AllUsers = () => {
  const axiosSquer = useAxiosSuer();
  const [search, setSearch] = useState("");

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSquer.get("/users");
      return res.data;
    },
  });

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">ChatNest Community</h2>
        <p className="text-gray-500 mt-2">
          Connect with people across ChatNest
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Users Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? [...Array(6)].map((_, i) => <UserCardSkeleton key={i} />)
          : filteredUsers.map((user) => (
              <div
                key={user._id}
                className="relative my-bg rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition duration-300 p-6 flex items-center gap-4"
              >
                {/* Online badge (demo logic) */}
                <span
                  className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
                    Math.random() > 0.5 ? "bg-green-500" : "bg-gray-400"
                  }`}
                />

                {/* Avatar */}
                <img
                  src={user?.photo}
                  alt={user?.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-primary"
                />

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-200">
                    {user?.name}
                  </h3>

                  <p className="flex items-center gap-2 text-sm text-gray-500">
                    <FaEnvelope className="text-xs" />
                    {user?.email}
                  </p>

                  <span className="text-xs text-gray-400 block mt-1">
                    Joined{" "}
                    {user?.createAt
                      ? formatDistanceToNow(new Date(user.createAt), {
                          addSuffix: true,
                        })
                      : "recently"}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllUsers;
