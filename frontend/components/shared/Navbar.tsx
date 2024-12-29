export const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <a href="/" className="text-xl font-bold">
            Your Butcher Frank
          </a>

          <div className="space-x-4">
            <a href="/bundles" className="hover:text-red-600">
              Bundles
            </a>
            <a href="/deli" className="hover:text-red-600">
              Deli
            </a>
            <a href="/specialty-meats" className="hover:text-red-600">
              Specialty Meats
            </a>
            <a href="/lunch" className="hover:text-red-600">
              Lunch Special
            </a>
            <a href="/" className=" hover:text-red-600 font-bold">
              (303) 772-3281
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
