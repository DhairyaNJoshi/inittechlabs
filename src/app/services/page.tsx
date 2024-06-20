import FullPageLoader from "@/components/Loader/FullPageLoader";
import dynamic from "next/dynamic";

const ServicesPage = dynamic(() => import("@/screens/services"), {
  loading: () => <FullPageLoader />,
});

const Services = () => {
  return <ServicesPage />;
};

export default Services;
