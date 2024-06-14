import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../Auth/useAuth";
import useAxiosSecure from "../UseSecureHooks/useAxiosSecure";

export const useTeacher = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isTeacher, isLoading: isTeacherLoading } = useQuery({
    queryKey: ["isTeacher", user?.email],
    queryFn: async () => {
      const res = await axiosSecure(`/users/teacher/${user?.email}`);
      return res.data.teacher;
    },
  });
  return [isTeacher, isTeacherLoading];
};
