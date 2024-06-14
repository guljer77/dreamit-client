import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../Auth/useAuth";
import useAxiosSecure from "../UseSecureHooks/useAxiosSecure";

export const useAdmin = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
