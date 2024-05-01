const Manager = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="mx-auto mycontainer">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-700">🔐</span>
          <span className="text-green-700">&lt;Pass</span>
          <span className="text-white">Manager</span>
        </h1>
        <p className="text-green-900 text-center">Your own Password Manager</p>
        <div className="flex flex-col p-4 text-black ">
          <input
            type="text"
            placeholder="Enter your name"
            className="p-2 m-2 rounded-lg border border-green-300 w-full"
          />
          <div className="flex justify-between w-full">
            <input
              type="text"
              className="rounded-lg w-full border border-green-300 p-2 m-2 py-1"
            />
            <input
              type="text"
              className="rounded-lg w-full border border-green-300 p-2 m-2 py-1"
            />
          </div>
          <button className="flex justify-center items-center bg-green-600 hover:bg-green-300 rounded-full px-4 py-2 w-fit mx-auto gap-1">
            <lord-icon
              src="https://cdn.lordicon.com/zrkkrrpl.json"
              trigger="hover"
              colors="primary:#121331,secondary:#ffffff"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};
export default Manager;
