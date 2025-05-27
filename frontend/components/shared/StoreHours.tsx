// frontend/components/shared/StoreHours.tsx
import React from 'react';

type StoreHoursProps = {
  variant?: 'card' | 'footer' | 'inline';
  className?: string;
};

export const StoreHours: React.FC<StoreHoursProps> = ({ 
  variant = 'card',
  className = '' 
}) => {
  const isFooter = variant === 'footer';
  
  // Completely different implementation for footer to ensure tight spacing
  if (isFooter) {
    return (
      <div className={`text-surface-200 ${className}`}>
        <h3 className="text-lg text-white mb-2">Store Hours</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr>
              <td className="pr-1 align-top">Monday:</td>
              <td className="text-right">Closed</td>
            </tr>
            <tr>
              <td className="pr-1 align-top">Tuesday - Friday:</td>
              <td className="text-right">8 AM - 6 PM</td>
            </tr>
            <tr>
              <td className="pr-1 align-top">Saturday:</td>
              <td className="text-right">8 AM - 5 PM</td>
            </tr>
            <tr>
              <td className="pr-1 align-top">Sunday:</td>
              <td className="text-right">Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  // Regular card display remains the same
  return (
    <div className={`text-surface-800 ${className}`}>
      <h3 className="text-base font-bold mb-1">Store Hours</h3>
      <div className="space-y-0.5 text-sm">
        <div className="flex justify-between">
          <span>Monday:</span> 
          <span className="font-medium">Closed</span>
        </div>
        <div className="flex justify-between">
          <span>Tuesday - Friday:</span> 
          <span className="font-medium">8 AM - 6 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Saturday:</span> 
          <span className="font-medium">8 AM - 5 PM</span>
        </div>
        <div className="flex justify-between">
          <span>Sunday:</span> 
          <span className="font-medium">Closed</span>
        </div>
      </div>
    </div>
  );
};