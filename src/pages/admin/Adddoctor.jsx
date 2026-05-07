import React, { useState } from 'react'
import img from '../../assets/assets_admin/upload_area.svg'
// import img from '../../assets/assets_admin/upload_area.svg'

const Adddoctor = () => {

  const [docimg, setdocimg] = useState(false)
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [exp, setexp] = useState('1 year')
  const [fee, setfee] = useState('')
  const [about, setabout] = useState('')
  const [spe, setspe] = useState('General Physician')
  const [degree, setdegree] = useState('')
  const [address1, setaddress1] = useState('')
  const [address2, setaddress2] = useState('')

  return (

    <div className="m-5 w-full">

      <h2 className="text-lg font-medium text-gray-700 mb-4">Add New Doctor</h2>

      <div className="bg-white border rounded-xl p-6 w-full max-h-[85vh] overflow-y-auto">

        {/* Image Upload */}
        <label htmlFor="docimage" className="flex items-center gap-4 mb-6 cursor-pointer w-fit">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 border flex items-center justify-center">
            <img src={img} alt="Upload" className="w-32 h-32  opacity-50" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Upload Doctor Picture</p>
            <p className="text-xs text-gray-400">JPG or PNG, max 2MB</p>
          </div>
          <input onChange={(e) => setdocimg(e.target.files[0]) } type="file" id="docimage" accept="image/*" hidden />
        </label>

        {/* Basic Info */}
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Basic Information</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Doctor Name</label>
            <input type="text" placeholder="Dr. Sarah Johnson"
              className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Email Address</label>
            <input type="email" placeholder="doctor@clinic.com"
              className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Password</label>
            <input type="password" placeholder="Set a secure password"
              className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Consultation Fee (₹)</label>
            <input type="number" placeholder="500" min="0"
              className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
          </div>
        </div>

        {/* Professional Details */}
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Professional Details</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Speciality</label>
            <select className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 bg-white">
              <option value="">Select speciality</option>
              <option value="general_physician">General Physician</option>
              <option value="gynecologist">Gynecologist</option>
              <option value="dermatologist">Dermatologist</option>
              <option value="pediatrician">Pediatrician</option>
              <option value="neurologist">Neurologist</option>
              <option value="gastroenterologist">Gastroenterologist</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Experience</label>
            <select className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 bg-white">
              <option value="">Select years</option>
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years</option>
              <option value="5">5 years</option>
              <option value="6">6 years</option>
              <option value="7">7 years</option>
              <option value="8">8 years</option>
              <option value="9">9 years</option>
              <option value="10">10+ years</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Education / Degree</label>
            <input type="text" placeholder="MBBS, MD – AIIMS Delhi"
              className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
          </div>
        </div>

        {/* Address */}
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Clinic Address</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Address Line 1</label>
            <input type="text" placeholder="Building / Street"
              className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Address Line 2</label>
            <input type="text" placeholder="City, State, PIN"
              className="border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
          </div>
        </div>

        {/* About */}
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">About the Doctor</p>
        <textarea placeholder="Write a short bio covering expertise, approach, and notable achievements…"
          rows={4}
          className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 resize-none mb-6" />

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button type="button"
            className="px-5 py-2 text-sm border rounded-lg text-gray-600 hover:bg-gray-50 transition">
            Clear
          </button>
          <button type="submit"
            className="px-6 py-2 text-sm bg-[#5f6fff] text-white rounded-lg hover:opacity-90 transition">
            Add Doctor
          </button>
        </div>

      </div>
    </div>
  )
}

export default Adddoctor
