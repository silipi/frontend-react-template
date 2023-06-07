import Loader from "@/components/Loader";
import { useUser } from "@/store/useUser";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const isInitializing = useUser((state) => state.isFetching);

  if (isInitializing) {
    return <Loader />;
  }

  return (
    <div>
      <h1>PrivateLayout</h1>
      {children}
    </div>
  );
};

export default PrivateLayout;
