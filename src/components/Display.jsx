/* eslint-disable react/prop-types */
const Display = ({ displayValue }) => {
    return (
      <div className="bg-gray-800 text-right text-6xl font-bold p-6 mb-6 border-b-4 border-white">
        {displayValue}
      </div>
    );
  };
  
  export default Display;