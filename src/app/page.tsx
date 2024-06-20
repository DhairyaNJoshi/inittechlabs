import FullPageLoader from "@/components/Loader/FullPageLoader";
import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/screens/home"), {
  loading: () => <FullPageLoader />,
});

export default function Home() {
  return <HomePage />;
}
