import FullPageLoader from "@/components/Loader/FullPageLoader";
import dynamic from "next/dynamic";

const ContactUsPage = dynamic(() => import("@/screens/contact-us"), {
  loading: () => <FullPageLoader />,
});

const Services = () => {
  return <ContactUsPage />;
};

export default Services;
