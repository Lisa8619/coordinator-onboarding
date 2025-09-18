import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';

export default function OnboardingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    location: '',
    profile: '',
    genre: '',
    skills: '',
    portfolio: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/bankinginfo', { state: { formData } }); // ✅ lowercase route
  };

  return (
    <>
      <AnimatedBackground />
      <div className="relative max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-md mt-10 border border-red-600 z-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
          Qalakaar Onboarding Form
        </h2>

        <form className="space-y-4" onSubmit={handleNext}>
          {/* Email */}
          <label className="block">
            <span className="font-medium text-black">Email *</span>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-red-400 rounded-md"
              placeholder="Your email address"
            />
          </label>

          {/* Full Legal Name */}
          <label className="block">
            <span className="font-medium text-black">Full Legal Name *</span>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-red-400 rounded-md"
              placeholder="Your answer"
            />
          </label>

          {/* Phone Number */}
          <label className="block">
            <span className="font-medium text-black">
              Phone Number (WhatsApp) *
            </span>
            <input
              type="tel"
              name="phone"
              required
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-red-400 rounded-md"
              placeholder="Your answer"
            />
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
              placeholder="Your answer"
            />
          </label>

          {/* Profile */}
          <label className="block">
            <span className="font-medium text-black">
              Music Profile / Social Media Handle *
            </span>
            <input
              type="text"
              name="profile"
              required
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-red-400 rounded-md"
              placeholder="Your answer"
            />
          </label>

          {/* Genre */}
          <label className="block">
            <span className="font-medium text-black">Genre(s) *</span>
            <select
              name="genre"
              required
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-red-400 rounded-md"
              defaultValue=""
            >
              <option value="" disabled>
                Select your genre
              </option>
              <option value="Pop">Pop</option>
              <option value="Classical">Classical</option>
              <option value="Jazz">Jazz</option>
              <option value="Rock">Rock</option>
              <option value="Hip-Hop">Hip-Hop</option>
              <option value="Folk">Folk</option>
              <option value="Electronic">Electronic</option>
              <option value="Other">Other</option>
            </select>
          </label>

          {/* Skills */}
          <label className="block">
            <span className="font-medium text-black">
              Music Related Skill Set(s) - Mention All *
            </span>
            <input
              type="text"
              name="skills"
              required
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-red-400 rounded-md"
              placeholder="Your answer"
            />
          </label>

          {/* Portfolio Upload */}
          <label className="block">
            <span className="font-medium text-black">
              Mini-Portfolio (Video Upload, max 100 MB) *
            </span>
            <input
              type="file"
              name="portfolio"
              accept="video/*"
              required
              onChange={handleChange}
              className="mt-2 block w-full text-sm text-black
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-full file:border-0
                         file:text-sm file:font-semibold
                         file:bg-red-100 file:text-red-700
                         hover:file:bg-red-200"
            />
          </label>

          {/* Submit button */}
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
