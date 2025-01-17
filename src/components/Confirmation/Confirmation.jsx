import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
// import { Player } from '@lottiefiles/react-lottie-player'; // Import Lottie Player
// import './Confirmation.scss';

// const ConfirmationPage = ({ redirectFallback }) => {
//     const location = useLocation();
//     const state = location.state;

//     if (!state?.success) {
//         return redirectFallback;
//     }

//     return (
//         <div className="confirmation-page">
//             <div className="success-animation">
//                 <Player
//                     autoplay
//                     loop
//                     src="../../assets/Animation/cat.json"// Replace with your JSON URL
//                     style={{ height: '300px', width: '300px' }} // Adjust size
//                 />
//             </div>
//             <h1>Thank You!</h1>
//             <p>Your form was submitted successfully. We'll be in touch soon.</p>
//             <button onClick={() => (window.location.href = '/')}>Back to Home</button>
//         </div>
//     );
// };

// export default ConfirmationPage;


import Lottie from 'react-lottie';
import animationData from '../../assets/Animation/cat.json';

const ConfirmationPage = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
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