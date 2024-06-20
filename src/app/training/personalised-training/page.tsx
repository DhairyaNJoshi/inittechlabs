import FullPageLoader from "@/components/Loader/FullPageLoader";
import dynamic from "next/dynamic";

const PersonalisedTrainingPage = dynamic(
  () => import("@/screens/personalised-training"),
  {
    loading: () => <FullPageLoader />,
  }
);
const PersonalisedTraining = () => {
  return <PersonalisedTrainingPage />;
};

export default PersonalisedTraining;
