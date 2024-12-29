import React, {useState} from 'react'
import {PortableText} from '@portabletext/react'
import type {HomePageInfoCard} from '../../types/sanity/types'

interface SeasonalNotificationProps {
  notification: HomePageInfoCard
  onClose: () => void
}

export function SeasonalNotification({
  notification,
  onClose,
}: SeasonalNotificationProps) {
  if (!notification) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Notification Card */}
      <div className="relative bg-white rounded-lg shadow-2xl p-6 m-4 max-w-2xl w-full transform transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="space-y-4">
          {notification.title && (
            <h2 className="text-2xl font-bold text-brand-500">
              {notification.title}
            </h2>
          )}
          {notification.subtitle && (
            <h3 className="text-xl text-gray-700">{notification.subtitle}</h3>
          )}
          {notification.content && (
            <div className="prose max-w-none">
              <PortableText value={notification.content} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
