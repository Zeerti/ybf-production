// frontend/components/shared/Footer.tsx
export const Footer = () => {
  return (
    <footer className="bg-surface-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Your Butcher Frank</h3>
            <p className="text-surface-200">900 Coffman St. Longmont, CO 80501</p>
            <p className="text-surface-200 mt-2">
              <a href="tel:3037723281" className="hover:text-brand-500 transition-colors">
                (303) 772-3281
              </a>
            </p>
          </div>
          
          {/* Store hours with minimal spacing between days and times */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Store Hours</h3>
            <table className="w-full text-surface-200">
              <tbody>
                <tr>
                  <td width="140">Monday:</td>
                  <td>Closed</td>
                </tr>
                <tr>
                  <td width="140">Tuesday - Friday:</td>
                  <td>8 AM - 6 PM</td>
                </tr>
                <tr>
                  <td width="140">Saturday:</td>
                  <td>8 AM - 5 PM</td>
                </tr>
                <tr>
                  <td width="140">Sunday:</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="border-t border-surface-700 mt-6 pt-6 text-center">
          <p className="text-surface-200">© 2024 Your Butcher Frank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}