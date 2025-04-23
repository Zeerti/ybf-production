import React from 'react';
import { FileDown } from 'lucide-react';

interface BundlePdfDownloadProps {
  pdfUrl?: string;
  title?: string;
  lastUpdated?: string;
}

export default function BundlePdfDownload({ 
  pdfUrl, 
  title = 'Bundle Flyer', 
  lastUpdated 
}: BundlePdfDownloadProps) {
  // If there's no URL, don't render anything
  if (!pdfUrl) {
    return null;
  }

  const formattedDate = lastUpdated ? new Date(lastUpdated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }) : '';

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-6 mb-8 border-2 border-transparent hover:border-brand-100 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-xl font-semibold text-brand-700 mb-1">{title}</h3>
          {formattedDate && (
            <p className="text-sm text-surface-500">Updated: {formattedDate}</p>
          )}
        </div>
        
        <a 
          href={pdfUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors"
        >
          <FileDown className="mr-2 h-5 w-5" />
          View Bundle Flyer
        </a>
      </div>
    </div>
  );
};