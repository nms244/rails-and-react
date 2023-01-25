export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">t.a.s.k.split(",")</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-center w-10 h-10 text-white p-2 bg-green-500 rounded-full hover:text-gray-900 hover:font-bold transition-colors duration-200">
            月
          </a>
          <a className="mr-5 text-center w-10 h-10 text-white p-2 bg-green-500 rounded-full hover:text-gray-900 hover:font-bold transition-colors duration-200">
            火
          </a>
          <a className="mr-5 text-center w-10 h-10 text-white p-2 bg-green-500 rounded-full hover:text-gray-900 hover:font-bold transition-colors duration-200">
            水
          </a>
          <a className="mr-5 text-center w-10 h-10 text-white p-2 bg-green-500 rounded-full hover:text-gray-900 hover:font-bold transition-colors duration-200">
            木
          </a>
          <a className="mr-5 text-center w-10 h-10 text-white p-2 bg-green-500 rounded-full hover:text-gray-900 hover:font-bold transition-colors duration-200">
            金
          </a>
          <a className="mr-5 text-center w-10 h-10 text-white p-2 bg-green-500 rounded-full hover:text-gray-900 hover:font-bold transition-colors duration-200">
            土
          </a>
        </nav>
        <button className="inline-flex items-center bg-green-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 mr-2 md:mt-0">
          新規作成
        </button>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          一覧
        </button>
      </div>
    </header>
  )
}
