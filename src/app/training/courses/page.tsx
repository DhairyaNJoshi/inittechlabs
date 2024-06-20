import FullPageLoader from "@/components/Loader/FullPageLoader";
import dynamic from "next/dynamic";

const CoursesPage = dynamic(() => import("@/screens/courses"), {
  loading: () => <FullPageLoader />,
});

const Courses = () => {
  return <CoursesPage />;
};

export default Courses;
