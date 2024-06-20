import FullPageLoader from "@/components/Loader/FullPageLoader";
import dynamic from "next/dynamic";

const TechnologiesPage = dynamic(() => import("@/screens/technologies"), {
  loading: () => <FullPageLoader />,
});
const Technologies = () => {
  return <TechnologiesPage />;
};

export default Technologies;
