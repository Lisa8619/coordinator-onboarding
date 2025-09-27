import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function BankingInfo() {
  const location = useLocation();
  const initialData = location.state?.formData || {};

  const [bankData, setBankData] = useState({
    upi: '',
    account: '',
    ifsc: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBankData({
      ...bankData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullData = { ...initialData, ...bankData };

    const response = await fetch('http://localhost:5000/api/onboarding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fullData),
    });

    const result = await response.json();
    console.log(result);

    alert('🎉 Congratulations, you are a QALAKAAR now! A copy of your responses will be emailed to you.');
  };

  return (
    <div className="relative max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md mt-10 border border-red-600 z-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
        Banking / Payment Information
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="font-medium text-black">UPI Number *</span>
          <input
            type="text"
            name="upi"
            required
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-red-400 rounded-md"
            placeholder="yourname@upi"
          />
        </label>

        <label className="block">
          <span className="font-medium text-black">Bank Account Number *</span>
          <input
            type="text"
            name="account"
            required
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-red-400 rounded-md"
            placeholder="Your account number"
          />
        </label>

        <label className="block">
          <span className="font-medium text-black">IFSC Code *</span>
          <input
            type="text"
            name="ifsc"
            required
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-red-400 rounded-md"
            placeholder="Your IFSC code"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-700 font-semibold"
        >
          Submit & Finish
        </button>
      </form>
    </div>
  );
}
