/* eslint-disable react/prop-types */
const ButtonContainer = ({ buttonItem, onButtonClick }) => {
        return (
          <div className="grid grid-cols-4 gap-6">
            {buttonItem.map(buttonName => (
              <button
                key={buttonName}
                onClick={() => onButtonClick(buttonName)}
                className={`${
                  buttonName === '0' ? 'col-span-2' : ''
                } ${
                  ['+', '-', '×', '÷', '='].includes(buttonName)
                    ? 'bg-white text-black hover:bg-gray-200 active:bg-gray-300 border-2 border-black'
                    : 'bg-gray-800 hover:bg-gray-700 active:bg-gray-600 text-white border-2 border-white'
                } font-bold py-6 transform hover:scale-105 transition-transform`}
              >
                {buttonName}
              </button>
            ))}
          </div>
        );
      }
      
      export default ButtonContainer;