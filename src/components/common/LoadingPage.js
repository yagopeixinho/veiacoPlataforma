import Lottie from "react-lottie";
import loadingAnimation from "../../assets/lotties/loading-files.json";

export default function LoadingPage({ loading, children }) {
  debugger;
  const defaultLoginAnimationSettings = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (loading) {
    return (
      <div className="loading-container">
        <Lottie
          options={defaultLoginAnimationSettings}
          isClickToPauseDisabled={true}
          width="100%"
          height={400}
        />
      </div>
    );
  } else {
    return children;
  }
}
