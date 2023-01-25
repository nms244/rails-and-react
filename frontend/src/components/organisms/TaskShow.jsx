export const TaskShow = (props) => {
  const { task } = props

  return (
    <form className="sticky top-56 right-0 h-full min-h-[300px] max-h-[700px] flex max-w-sm ml-auto">
      <div className="flex flex-col w-full max-w-2xl px-5 py-5 bg-white rounded-lg ring-gray-200 ring-2 shadow-2xl">
        <div className="mb-auto text-3 font-light text-center text-gray-800">
          選択中のタスク
        </div>
        <div className="mb-3 text-3xl font-light text-center text-gray-800">
          <input
            type="text"
            id="task-show-name"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder='"単語暗記"'
          />
        </div>
        <div className="mb-3 text-3xl font-light text-center text-gray-800">
          <input
            type="text"
            id="task-show-description"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder='"TOEICの単語帳を1周間で1000語覚える。"'
          />
        </div>
        <div className="flex mb-3 text-2xl font-light text-center text-gray-800">
          <input
            type="text"
            id="task-show-done"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder='"180"'
          />
          <span className="mx-2">/</span>
          <input
            type="text"
            id="task-show-goal"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder='"200"'
          />
          <input
            type="text"
            id="task-show-unit"
            className="ml-2 rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder='"単語"'
          />
        </div>
        <button
          type="submit"
          className="mt-auto py-2 px-4 bg-green-500 hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
          Send
        </button>
      </div>
    </form>
  )
}
