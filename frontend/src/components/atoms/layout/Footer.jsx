export const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-green-500 dark:bg-gray-800 w-full py-2 min-w-[640px] h-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
          <li className="my-2">
            <a
              className="text-white hover:text-gray-800  hover:font-bold transition-colors duration-200"
              href="#"
            >
              設定
            </a>
          </li>
          <li className="my-2">
            <span>&copy; 2022&nbsp;</span>
            <span className="mt-7 md:mt-1">
              Created by&nbsp;
              <a
                className="underline hover:text-primary-gray-20"
                href="https://twitter.com/nomos_geek"
              >
                Tsuyoshi Nakayama
              </a>
            </span>
          </li>
        </ul>
      </div>
    </footer>
  )
}
