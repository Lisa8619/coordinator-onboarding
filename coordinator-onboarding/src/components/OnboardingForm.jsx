import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';

export default function OnboardingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    phone: '',
    altPhone: '',
    email: '',
    languages: '',
    skillSet: '', // Changed from 'skillSets' and now a string
    location: '',
    aadhaar: null,
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // Simplified handler: No special logic needed for the dropdown
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    console.log('Onboarding Data:', formData);
    navigate('/bankinginfo', { state: { onboardingData: formData } });
  };

  return (
    <>
      <AnimatedBackground />
      <div className="relative max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md mt-10 border border-red-600 z-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
            Coordinator Onboarding Form
        </h2>

        <form className="space-y-4" onSubmit={handleNext}>
          {/* ... other form fields remain the same ... */}
          
          {/* Full Legal Name */}
          <label className="block">
            <span className="font-medium text-black">Full Legal Name *</span>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-red-400 rounded-md"
              placeholder="As per official documents"
            />
          </label>

          {/* Date of Birth */}
          <label className="block">
            <span className="font-medium text-black">Date of Birth *</span>
            <input
              type="date"
              name="dob"
              required
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-red-400 rounded-md"
            />
          </label>

          {/* Phone Number */}
          <label className="block">
            <span className="font-medium text-black">Phone Number (WhatsApp) *</span>
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-red-400 rounded-md"
              placeholder="Your primary contact number"
            />
          </label>

          {/* Alternate Phone Number */}
          <label className="block">
            <span className="font-medium text-black">Alternate Phone Number</span>
            <input
              type="tel"
              name="altPhone"
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-red-400 rounded-md"
              placeholder="An alternative contact number"
            />
          </label>

          {/* Email */}
          <label className="block">
            <span className="font-medium text-black">Email *</span>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-red-400 rounded-md"
              placeholder="Your primary email address"
            />
          </label>

          {/* Languages Known */}
          <label className="block">
            <span className="font-medium text-black">Languages Known *</span>
            <input
              type="text"
              name="languages"
              required
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-red-400 rounded-md"
              placeholder="e.g., English, Hindi"
            />
          </label>
          
          {/* MODIFIED: Skill Set Dropdown */}
          <label className="block">
            <span className="font-medium text-black">Primary Skill Set *</span>
            <select
              name="skillSet" // Renamed to singular
              required
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-red-400 rounded-md" // Removed h-40
              defaultValue="" // Set a default value for the placeholder
            >
              <option value="" disabled>Select your primary skill</option>
              <option value="Event Coordination">Event Coordination</option>
              <option value="Artist Management / Hospitality">Artist Management / Hospitality</option>
              <option value="Technical Support (Sound/Stage)">Technical Support (Sound/Stage)</option>
              <option value="Photography / Videography">Photography / Videography</option>
              <option value="Content Creation / Social Media">Content Creation / Social Media</option>
              <option value="Communication & People Management">Communication & People Management</option>
              <option value="Crisis Management / Troubleshooting">Crisis Management / Troubleshooting</option>
              <option value="Others">Others</option>
            </select>
          </label>

          {/* Location */}
          <label className="block">
            <span className="font-medium text-black">Location *</span>
            <input
              type="text"
              name="location"
              required
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-red-400 rounded-md"
              placeholder="Your City, State"
            />
          </label>

          {/* Aadhaar Card Upload */}
          <label className="block">
            <span className="font-medium text-black">Aadhaar Card Upload *</span>
            <input
              type="file"
              name="aadhaar"
              accept="image/*,application/pdf"
              required
              onChange={handleChange}
              className="mt-2 block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-100 file:text-red-700 hover:file:bg-red-200"
            />
          </label>

          {/* Recent Picture Upload */}
          <label className="block">
            <span className="font-medium text-black">Recent Picture Upload *</span>
            <input
              type="file"
              name="picture"
              accept="image/*"
              required
              onChange={handleChange}
              className="mt-2 block w-full text-sm text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-100 file:text-red-700 hover:file:bg-red-200"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-700 font-semibold"
          >
            Proceed
          </button>
        </form>
      </div>
    </>
  );
}
