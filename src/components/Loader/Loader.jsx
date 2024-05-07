import { BallTriangle } from "react-loader-spinner";
import { StyledLoaderBackdrop } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoaderBackdrop>
      <BallTriangle
        height={80}
        width={80}
        radius={5}
        color="rgb(246, 184, 61)"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledLoaderBackdrop>
  );
};

export default Loader;