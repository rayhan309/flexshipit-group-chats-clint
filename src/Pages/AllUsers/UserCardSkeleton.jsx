const UserCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 animate-pulse">
      <div className="w-16 h-16 rounded-full bg-gray-300" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-2 bg-gray-200 rounded w-1/3" />
      </div>
    </div>
  );
};

export default UserCardSkeleton;
