import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function BankingInfo() {
  const navigate = useNavigate();
  const location = useLocation();

  const onboardingData = location.state?.onboardingData || null;

  const [bankData, setBankData] = useState({
    upi: '',
    account: '',
    ifsc: '',
    bankCheque: null,
  });

  useEffect(() => {
    if (!onboardingData) {
      console.warn("No onboarding data found. Redirecting to the start.");
      navigate('/'); 
    }
  }, [onboardingData, navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setBankData({
      ...bankData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalData = new FormData();

    for (const key in onboardingData) {
      finalData.append(key, onboardingData[key]);
    }

    finalData.append('upi', bankData.upi);
    finalData.append('account', bankData.account);
    finalData.append('ifsc', bankData.ifsc);
    if (bankData.bankCheque) {
      finalData.append('bankCheque', bankData.bankCheque);
    }

    try {
      const response = await fetch('http://localhost:5000/api/onboarding', {
        method: 'POST',
        body: finalData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Submission successful:', result);

      alert('🎉 Congratulations, you are a QALAKAAR now! A copy of your responses will be emailed to you.');
      navigate('/success');

    } catch (error) {
      console.error("Submission failed:", error);
      alert("There was an error submitting your form. Please try again.");
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md mt-10 border border-red-600 z-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
        Banking / Payment Information
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* UPI Input */}
        <label className="block">
          <span className="font-medium text-black">UPI ID *</span>
          <input
            type="text"
            name="upi"
            required
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-red-400 rounded-md"
            placeholder="yourname@upi"
          />
        </label>

        {/* Bank Account Input */}
        <label className="block">
          <span className="font-medium text-black">Bank Account Number *</span>
          <input
            type="text"
            name="account"
            required
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-red-400 rounded-md"
            placeholder="Your bank account number"
          />
        </label>

        {/* IFSC Code Input */}
        <label className="block">
          <span className="font-medium text-black">IFSC Code *</span>
          <input
            type="text"
            name="ifsc"
            required
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-red-400 rounded-md"
            placeholder="Bank IFSC Code (e.g. HDFC0000123)"
          />
        </label>

        {/* Bank Cheque Upload */}
        <label className="block">
          <span className="font-medium text-black">Cancelled Bank Cheque Upload *</span>
          <input
            type="file"
            name="bankCheque"
            required
            accept="image/*,application/pdf"
            onChange={handleChange}
            className="mt-2 block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-100 file:text-red-700 hover:file:bg-red-200"
          />
        </label>

        {/* Back + Submit buttons */}
        <div className="flex justify-between items-center gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)} // CORRECTED: Navigates back one step in history
            className="w-1/2 bg-gray-300 text-gray-800 p-3 rounded-md hover:bg-gray-400 font-semibold"
          >
            ← Back
          </button>
          <button
            type="submit"
            className="w-1/2 bg-red-600 text-white p-3 rounded-md hover:bg-red-700 font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
