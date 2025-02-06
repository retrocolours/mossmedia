import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/Animation/cat.json";

const ConfirmationPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="confirmation-page">
      <Lottie options={defaultOptions} height={300} width={300} />
      <h1>Thank You!</h1>
      <p>Your form was submitted successfully. We'll be in touch soon.</p>
    </div>
  );
};
export default ConfirmationPage;
