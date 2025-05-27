// frontend/components/home/FindUsCard.tsx
import React from 'react'
import { StoreHours } from '../shared/StoreHours'

export function FindUsCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-transparent hover:border-brand-500 transition-all duration-300 hover:shadow-xl h-full">
      <div className="p-6 flex flex-col h-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0">
          <h2 className="text-2xl font-bold text-brand-500">Find Us</h2>
          <p className="text-base text-gray-800">900 Coffman St. Longmont, CO 80501</p>
        </div>

        {/* Store hours section - more compact design */}
        <div className="mb-4 bg-brand-50 p-3 rounded-lg">
          <StoreHours />
        </div>

        <div className="flex-grow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5704709393035!2d-105.10592622309066!3d40.174116171479774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf972bcfdd727%3A0x2f03fa33ec9282d3!2sYour%20Butcher%20Frank!5e0!3m2!1sen!2sus!4v1732507997075!5m2!1sen!2sus"
            className="w-full h-[250px] rounded-lg"
            style={{border: 0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}
export default FindUsCard