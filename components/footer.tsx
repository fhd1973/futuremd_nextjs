
export const Footer = () => {
  return (
    <div className="px-4 py-2 pb-12 mt-10 rounded-lg flex flex-col md:items-center md:justify-center md:text-center pl-10 md:pl-0">
      <div className="dark:text-gray-400 text-black font-bold text-sm uppercase mb-3">
        Copyright © {new Date().getFullYear()} ⎯{" "}
        <span className="dark:text-gray-400 text-black font-bold">Future MD </span>
      </div>
    </div>
  );
};