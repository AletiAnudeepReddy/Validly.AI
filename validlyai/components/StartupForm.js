'use client';
import { useState } from 'react';
import { Lightbulb, Info, Users, AlertCircle, Star } from 'lucide-react';
import { Rocket } from "lucide-react";

export default function StartupForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        audience: '',
        problem: '',
        features: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const body = JSON.stringify(formData);

            // SWOT request
            const swotRes = await fetch('/api/swot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body,
            });

            const swotData = await swotRes.json();

            // Competitors request
            const compRes = await fetch('/api/competitors', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body,
            });
            const trendRes = await fetch('http://localhost:5000/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body,
            });

            const trendData = await trendRes.json();
            console.log(trendData);

            const compData = await compRes.json();

            if (swotRes.ok && compRes.ok) {
                // Send BOTH data back to parent via onSubmit
                onSubmit({ swot: swotData, competitors: compData, trend: trendData }); // ✅

            } else {
                console.error('API error:', swotData, compData);
            }

        } catch (err) {
            console.error('Network error:', err);
        }
    };


    const inputClass =
        'w-full p-2 bg-[#10151D] border-[1.5px] border-[#1E2A37] text-gray-400 placeholder-gray-500 rounded-md focus:outline-none focus:ring-[0.1px] focus:ring-[#12EAB5] focus:border-[#12EAB5] text-sm';

    const labelClass = 'block mb-1 font-medium text-gray-300 flex items-center gap-2';

    return (
        <div className="max-w-5xl mx-auto bg-[#0C0F15] shadow-md rounded-xl p-6 border-2 border-[#1E2A37] h-[46vh] overflow-y-auto text-sm">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="space-y-3">
                    <div>
                        <label data-aos="fade-right"
                            data-aos-delay="200" className={labelClass}>
                            <Lightbulb className="w-4 h-4 text-[#12EAB5]" /> Startup Name
                        </label>
                        <input data-aos="zoom-in"
                            data-aos-delay="200"
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="e.g., CampusEats"
                        />
                    </div>

                    <div>
                        <label data-aos="fade-right"
                            data-aos-delay="300" className={labelClass}>
                            <Info className="w-4 h-4 text-[#12EAB5]" /> One-liner Description
                        </label>
                        <input
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            type="text"
                            name="description"
                            required
                            value={formData.description}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="e.g., Uber for campus food delivery"
                        />
                    </div>

                    <div>
                        <label data-aos="fade-right"
                            data-aos-delay="400" className={labelClass}>
                            <Users className="w-4 h-4 text-[#12EAB5]" /> Target Audience
                        </label>
                        <input data-aos="zoom-in"
                            data-aos-delay="400"
                            type="text"
                            name="audience"
                            required
                            value={formData.audience}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="e.g., Hostel students"
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-3">
                    <div>
                        <label data-aos="fade-right"
                            data-aos-delay="450" className={labelClass}>
                            <AlertCircle className="w-4 h-4 text-[#12EAB5]" /> Problem It Solves
                        </label>
                        <textarea data-aos="zoom-in"
                            data-aos-delay="450"
                            name="problem"
                            required
                            value={formData.problem}
                            onChange={handleChange}
                            className={inputClass}
                            rows="3"
                            placeholder="e.g., Long wait times for hostel food"
                        ></textarea>
                    </div>

                    <div>
                        <label data-aos="fade-right"
                            data-aos-delay="550" className={labelClass}>
                            <Star className="w-4 h-4 text-[#12EAB5]" /> Key Features
                        </label>
                        <textarea data-aos="zoom-in"
                            data-aos-delay="550"
                            name="features"
                            required
                            value={formData.features}
                            onChange={handleChange}
                            className={inputClass}
                            rows="3"
                            placeholder="e.g., Live tracking, wallet support"
                        ></textarea>
                    </div>
                </div>

                <div className=" col-span-1 md:col-span-2">


                    <button data-aos="fade-down"
                        data-aos-delay="200"
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-2 text-sm bg-gradient-to-r from-[#12EAB5] to-[#0EDDB8] text-black rounded-2xl hover:scale-102 transition duration-200 font-semibold shadow-md hover:shadow-lg"
                    >
                        <Rocket className="w-4 h-4" />
                        Analyze My Idea
                    </button>

                </div>
            </form>
        </div>
    );
}
