import React from "react";
import { useLocation } from "react-router-dom";

const PaymentConfirmed = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const amount = searchParams.get("amount");
  const orderId = searchParams.get("orderId");
  return (
    <div class="flex items-center justify-center h-[70vh]">
          <div class="p-8 rounded-lg">
              <p class="text-center text-primary text-2xl pb-5 font-semibold"> Payment Confirmation:</p>
        <p class="text-center text-primary text-xl font-semibold">
          Your payment of{" "}
          <button class="bg-gray-300 hover:bg-gray-400 text-primary font-normal py-1 px-2 rounded">
            Taka {amount}
          </button>{" "}
          has been successfully processed for order{" "}
          <button class="bg-gray-300 hover:bg-gray-400 text-primary font-normal py-1 px-2 rounded">
            #{orderId}
          </button>{" "}
          . Thank you for choosing our services!
          <br />
          You will be contacted shortly to confirm the delivery details.
        </p>
      </div>
    </div>
  );
};

export default PaymentConfirmed;
