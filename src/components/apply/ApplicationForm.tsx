"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Send } from "lucide-react";
import type { FormData } from "@/types";

const stepTitles = [
  "Personal Information",
  "Your Experience",
  "Your Interests",
  "Review & Submit",
];

const licenseOptions = [
  "Life & Health",
  "Property & Casualty",
  "Series 6",
  "Series 7",
  "Series 63",
  "Series 65/66",
  "None yet",
];

const interestOptions = [
  "Insurance",
  "Commercial P&C",
  "Advisory / Wealth Management",
  "Health Insurance",
  "Ancillary Products",
  "Alternative Investments",
  "Marketing Support",
];

export default function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentRole: "",
    yearsExperience: "",
    licenses: [],
    interests: [],
    message: "",
  });

  function updateField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function toggleArrayField(field: "licenses" | "interests", value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  }

  function nextStep() {
    if (step < 3) setStep(step + 1);
  }

  function prevStep() {
    if (step > 0) setStep(step - 1);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClasses =
    "w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-medallion text-gray-900 bg-transparent text-sm";
  const labelClasses =
    "block text-xs font-medium text-denim tracking-wider uppercase mb-2";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-10 text-center py-20"
      >
        <div className="w-16 h-16 rounded-full bg-medallion/10 flex items-center justify-center mx-auto mb-6">
          <Check className="text-medallion" size={32} />
        </div>
        <h3 className="text-2xl font-semibold text-denim mb-3">
          Application Received
        </h3>
        <p className="text-gray-500 max-w-md mx-auto">
          Thank you for your interest in Valor. We&apos;ll review your
          information and reach out within 48 hours to schedule a conversation.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white p-8 sm:p-10">
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between mb-3">
          {stepTitles.map((title, index) => (
            <span
              key={title}
              className={`text-xs font-medium tracking-wider hidden sm:block ${
                index <= step ? "text-medallion" : "text-gray-300"
              }`}
            >
              {index + 1}
            </span>
          ))}
        </div>
        <div className="h-0.5 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-medallion rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((step + 1) / 4) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </div>
        <p className="text-sm font-medium text-denim mt-3">
          {stepTitles[step]}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className={labelClasses}>
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    className={inputClasses}
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClasses}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    className={inputClasses}
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className={inputClasses}
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className={inputClasses}
                  placeholder="(555) 123-4567"
                />
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label htmlFor="currentRole" className={labelClasses}>
                  Current Role / Title
                </label>
                <input
                  type="text"
                  id="currentRole"
                  value={formData.currentRole}
                  onChange={(e) => updateField("currentRole", e.target.value)}
                  className={inputClasses}
                  placeholder="e.g. Insurance Agent, Financial Advisor, Career Changer"
                />
              </div>
              <div>
                <label htmlFor="yearsExperience" className={labelClasses}>
                  Years of Experience in Financial Services
                </label>
                <select
                  id="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={(e) => updateField("yearsExperience", e.target.value)}
                  className={`${inputClasses} cursor-pointer`}
                >
                  <option value="">Select</option>
                  <option value="0">None — I&apos;m new to the industry</option>
                  <option value="1-3">1–3 years</option>
                  <option value="3-5">3–5 years</option>
                  <option value="5-10">5–10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              <div>
                <label className={labelClasses}>
                  Current Licenses (select all that apply)
                </label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {licenseOptions.map((license) => (
                    <button
                      key={license}
                      type="button"
                      onClick={() => toggleArrayField("licenses", license)}
                      className={`text-xs px-4 py-2 rounded-full border transition-colors ${
                        formData.licenses.includes(license)
                          ? "bg-medallion text-white border-medallion"
                          : "border-gray-200 text-gray-500 hover:border-medallion hover:text-medallion"
                      }`}
                    >
                      {license}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div>
                <label className={labelClasses}>
                  Areas of Interest (select all that apply)
                </label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {interestOptions.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => toggleArrayField("interests", interest)}
                      className={`text-xs px-4 py-2 rounded-full border transition-colors ${
                        formData.interests.includes(interest)
                          ? "bg-medallion text-white border-medallion"
                          : "border-gray-200 text-gray-500 hover:border-medallion hover:text-medallion"
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="message" className={labelClasses}>
                  Tell Us About Yourself
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className={`${inputClasses} resize-none`}
                  placeholder="What are you looking for in a firm? What are your goals?"
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-pearl/50 p-6 rounded-lg space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Name</p>
                    <p className="text-sm text-denim font-medium mt-1">
                      {formData.firstName} {formData.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                    <p className="text-sm text-denim font-medium mt-1">{formData.email}</p>
                  </div>
                  {formData.phone && (
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Phone</p>
                      <p className="text-sm text-denim font-medium mt-1">{formData.phone}</p>
                    </div>
                  )}
                  {formData.currentRole && (
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Current Role</p>
                      <p className="text-sm text-denim font-medium mt-1">{formData.currentRole}</p>
                    </div>
                  )}
                  {formData.yearsExperience && (
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider">Experience</p>
                      <p className="text-sm text-denim font-medium mt-1">{formData.yearsExperience}</p>
                    </div>
                  )}
                </div>
                {formData.licenses.length > 0 && (
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Licenses</p>
                    <div className="flex flex-wrap gap-1">
                      {formData.licenses.map((l) => (
                        <span key={l} className="text-xs bg-medallion/10 text-medallion px-2 py-1 rounded-full">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {formData.interests.length > 0 && (
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Interests</p>
                    <div className="flex flex-wrap gap-1">
                      {formData.interests.map((i) => (
                        <span key={i} className="text-xs bg-denim/10 text-denim px-2 py-1 rounded-full">
                          {i}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {formData.message && (
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Message</p>
                    <p className="text-sm text-gray-600">{formData.message}</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-10">
          {step > 0 ? (
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-denim transition-colors"
            >
              <ArrowLeft size={16} />
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="flex items-center gap-2 bg-denim text-white font-medium px-8 py-3 rounded-full hover:bg-denim-light transition-colors tracking-wide text-sm"
            >
              Continue
              <ArrowRight size={16} />
            </button>
          ) : (
            <button
              type="submit"
              className="flex items-center gap-2 bg-medallion text-white font-medium px-8 py-3 rounded-full hover:bg-medallion-dark transition-colors tracking-wide text-sm"
            >
              Submit Application
              <Send size={16} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
