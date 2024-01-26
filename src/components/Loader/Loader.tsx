import { BounceLoader } from "react-spinners";

export const Loader = () => {
  return (
    <BounceLoader
      color={"red"}
      // loading={loading}
      // cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
