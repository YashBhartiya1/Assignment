import React, { useState } from "react";

const Pricing = () => {
  // initialize state with the table data
  const [pricingData, setPricingData] = useState([
    { api: "OpenAI", model: "GPT-3.5", price: "$0.002" },
    { api: "OpenAI", model: "GPT-4", price: "$0.03" },
    { api: "TogetherAI", model: "Llama-2-70b", price: "$0.0008" },
    { api: "TogetherAI", model: "Llama-2-13b", price: "$0.0006" },
  ]);

  // initialize mode state
  const [mode, setMode] = useState("dark");

  // function to toggle mode
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`w-full min-h-screen flex justify-center items-center px-2 ${
        mode === "dark" ? "bg-[#0f172a] text-white" : "bg-[#f9f9f9] text-black"
      }`}
    >
      <div
        className={`relative w-full max-w-4xl rounded p-4 shadow-lg ${
          mode === "dark"
            ? "bg-[#1e293b] text-white"
            : "bg-[#ffffff] text-black"
        }`}
      >
        <div className="mb-4">
          <h1 className="font-bold text-[#a5b4fc] text-2xl pt-10">
            API Pricing
          </h1>
          <p className="text-base md:text-lg">
            Our API pricing is based on the model used and the number of tokens
            processed. Here's a breakdown of the costs:
          </p>
        </div>
        <div className="mb-4">
          <table className="w-full bg-transparent border rounded-t-lg">
            <thead
              className={`${
                mode === "dark" ? "bg-[#6366f1]" : "bg-[#4b6eaf]"
              } border-b
               ${
                 mode === "dark" ? "border-[#334155]" : "border-[#d1d5db]"
               } uppercase`}
            >
              <tr>
                <th
                  className={`px-4 py-2 md:py-4 border-b ${
                    mode === "dark" ? "border-[#334155]" : "border-[#d1d5db]"
                  } text-left text-xs md:text-base`}
                >
                  API
                </th>
                <th
                  className={`px-4 py-2 md:py-4 border-b ${
                    mode === "dark" ? "border-[#334155]" : "border-[#d1d5db]"
                  } text-left text-xs md:text-base`}
                >
                  Model
                </th>
                <th
                  className={`px-4 py-2 md:py-4 border-b ${
                    mode === "dark" ? "border-[#334155]" : "border-[#d1d5db]"
                  } text-left text-xs md:text-base`}
                >
                  Price per 1K Tokens
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, index) => (
                <tr key={index}>
                  <td
                    className={`px-4 py-2 md:py-4 border ${
                      mode === "dark" ? "border-[#334155]" : "border-[#d1d5db]"
                    }`}
                  >
                    {item.api}
                  </td>
                  <td
                    className={`px-4 py-2 md:py-4 border ${
                      mode === "dark" ? "border-[#334155]" : "border-[#d1d5db]"
                    }`}
                  >
                    {item.model}
                  </td>
                  <td
                    className={`px-4 py-2 md:py-4 border ${
                      mode === "dark" ? "border-[#334155]" : "border-[#d1d5db]"
                    }`}
                  >
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mb-4">
          <h2 className="font-bold text-[#a5b4fc] text-xl">Token Estimation</h2>
          <p className="text-base md:text-lg">
            On average, 1 token is approximately 4 characters or 0.75 words. For
            precise pricing, we recommend using our token calculator tool.
          </p>
        </div>
        <div>
          <h2 className="font-bold text-[#a5b4fc] text-xl">Billing</h2>
          <p className="text-base md:text-lg">
            You will only be charged for the tokens used in generating the book.
            The API tracks token usage and bills accordingly. Detailed usage
            reports are available in your account dashboard.
          </p>
        </div>
        {/* Toggle button */}
        <button
          className="absolute top-12 right-8 flex items-center"
          onClick={toggleMode}
        >
          <i
            className={`ri-toggle-fill text-4xl ${
              mode === "dark" ? "text-blue-400" : "hidden"
            }`}
          ></i>
          <i
            className={`ri-toggle-line text-4xl ${
              mode === "dark" ? "hidden" : "text-gray-800"
            }`}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Pricing;
