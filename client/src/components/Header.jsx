import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 pr-8 pl-4 md:pr-20 md:pl-8 mb-4">
      <div>
        <h2 className="text-2xl font-bold">
          <Link to="/">xQRCode</Link>
        </h2>
      </div>
      <div>
        <button className="bg-black hover:bg-gray-700 p-1 text-white px-4 rounded-lg">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
