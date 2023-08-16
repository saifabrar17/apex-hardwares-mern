import React, { useState } from "react";
import bkash from "../../../images/logoBkash.PNG";
const BkashPortal = ({ order, handlePaymentSuccess }) => {
  const [bkashNumber, setBkashNumber] = useState("");
  const [pin, setPin] = useState("");
  const [step, setStep] = useState(1); // 1 for number, 2 for pin
  const total = order.orderQuantity * order.price;

  const isBkashNumberValid =
    bkashNumber.length === 11 && bkashNumber.startsWith("01");
  const isPinValid = pin.length === 4;

  const handleNextStep = () => {
    if (step === 1 && isBkashNumberValid) {
      setStep(2);
    }
  };

  const handleConfirmPayment = () => {
    if (step === 2 && isPinValid) {
      handlePaymentSuccess(order._id);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] ">
      <div className="w-[400px] shadow-xl rounded-xl">
        <div className="p-10 text-center">
          <img src={bkash} alt="" />
        </div>
        <div className="bg-[#E3156F] py-5 text-white">
          <div className="text-center">
            <div className="m-5 p-5 shadow-xl rounded-xl">
              <p className="text-base font-medium">
                Merchant Name: Apex Warehouse
              </p>
              <p className="text-base font-medium">Order: {order._id} </p>
              <p className="text-base font-medium">{total} Taka</p>
            </div>
          </div>

          <div className="text-center">
            {step === 1 && (
              <div>
                <p className="text-base font-medium">
                  Your Bkash Account number
                </p>
                <input
                  type="text"
                  id="bkashNumber"
                  className="my-3 text-[#737373] rounded-md h-10 px-3 text-base font-medium outline-none"
                  placeholder="e.g 01XXXXXXXXX"
                  value={bkashNumber}
                  onChange={(e) => setBkashNumber(e.target.value)}
                />
                <button
                  className={`bg-[#BD1E5D] ml-2 text-white py-2 px-4 rounded-md shadow-white shadow-sm text-base font-medium ${
                    isBkashNumberValid ? "" : "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={handleNextStep}
                  disabled={!isBkashNumberValid}
                >
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <p className="text-base font-medium">Enter your 4-digit PIN</p>
                <input
                  type="password"
                  id="bkashPin"
                  className="my-3 text-[#737373] rounded-md h-10 px-3 text-base font-medium outline-none"
                  placeholder="Enter PIN"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  maxLength="4"
                />
                <button
                  className={`bg-[#BD1E5D] ml-2 text-white py-2 px-4 rounded-md shadow-white shadow-sm text-base font-medium ${
                    isPinValid ? "" : "opacity-50 cursor-not-allowed"
                  }`}
                  onClick={handleConfirmPayment}
                  disabled={!isPinValid}
                >
                  Confirm
                </button>
                <p className="text-base py-3 font-medium">
                  By clicking Confirm you are agree to the{" "}
                  <a href="https://www.bkash.com/en/page/terms-of-use-app-policy" target="_blank" className="underline">
                    Terms and Conditions
                  </a>
                </p>
              </div>
            )}
          </div>
          {/* <div className="text-center space-y-2 gap-3">
            <button className="bg-[#BD1E5D] mr-2 text-white py-2 px-4 rounded-md shadow-white shadow-sm text-base font-medium">
              Close
            </button>
            <button
              className="bg-[#BD1E5D] ml-2 text-white py-2 px-4 rounded-md shadow-white shadow-sm text-base font-medium"
              onClick={() => handlePaymentSuccess(order._id)}
            >
              Confirm
            </button>
          </div> */}
          <div className="flex justify-center  py-5">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <p className="text-base font-medium">16247</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BkashPortal;
