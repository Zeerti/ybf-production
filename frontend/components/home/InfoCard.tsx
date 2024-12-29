import React from 'react'
import {Shield, Beef, FileCheck, Leaf, Scissors, Crown} from 'lucide-react'
import type {HomePageInfoCard} from '../../types/sanity/types'

interface InfoCardProps {
  card: HomePageInfoCard | null
}

export function InfoCard({card}: InfoCardProps) {
  if (!card) return null

  // Get text content for each line
  const line1 = card.content?.[0]?.children?.[0]?.text || 'No Added Hormones'
  const line2 = card.content?.[1]?.children?.[0]?.text || 'No Antibiotic Residue'
  const line3 = card.content?.[2]?.children?.[0]?.text || 'Tested Before Slaughtered'
  const line4 = card.content?.[3]?.children?.[0]?.text || 'Grass Started; Grain/Corn Finished Beef'
  const line5 = card.content?.[4]?.children?.[0]?.text || 'Colorado Lamb'
  const line6 = card.content?.[5]?.children?.[0]?.text || 'We Cut Anything to Request!'

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-transparent hover:border-brand-500 transition-all duration-300 hover:shadow-xl h-full">
      <div className="p-8 flex flex-col h-full">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-brand-500 mb-4">
            {card.title || "Frank's Quality Standards"}
          </h2>
          <h3 className="text-xl text-gray-700 leading-relaxed">
            {card.subtitle || 'U.S.D.A Choice Beef, All Natural Animals, Red Bird Farms Chicken'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
          <div className="flex items-center space-x-4">
            <div className="bg-brand-50 p-3 rounded-lg">
              <Shield className="w-6 h-6 text-brand-500" />
            </div>
            <span className="text-lg text-gray-800 font-medium">{line1}</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-brand-50 p-3 rounded-lg">
              <Beef className="w-6 h-6 text-brand-500" />
            </div>
            <span className="text-lg text-gray-800 font-medium">{line2}</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-brand-50 p-3 rounded-lg">
              <FileCheck className="w-6 h-6 text-brand-500" />
            </div>
            <span className="text-lg text-gray-800 font-medium">{line3}</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-brand-50 p-3 rounded-lg">
              <Leaf className="w-6 h-6 text-brand-500" />
            </div>
            <span className="text-lg text-gray-800 font-medium">{line4}</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-brand-50 p-3 rounded-lg">
              <Crown className="w-6 h-6 text-brand-500" />
            </div>
            <span className="text-lg text-gray-800 font-medium">{line5}</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-brand-50 p-3 rounded-lg">
              <Scissors className="w-6 h-6 text-brand-500" />
            </div>
            <span className="text-lg text-gray-800 font-medium">{line6}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
