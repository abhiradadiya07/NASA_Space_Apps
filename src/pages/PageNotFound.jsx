import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="container mx-auto my-12 py-12">
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center bg-gray-100 p-8 rounded-lg shadow-lg">
            <h4 className="text-3xl  mb-6">404: Page Not Found</h4>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white transition rounded"
            >
              <i className="fa fa-arrow-left mr-2"></i> Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
