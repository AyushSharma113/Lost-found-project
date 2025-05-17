import React from "react";

const ItemCard = ({ item, type, onClaim }) => {
  const handleClaimClick = () => {
    if (onClaim) {
      onClaim(item);
    }
    console.log("Claim item button clicked for item", item.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <img
        className="w-full h-32 object-cover"
        src={item.imageUrl}
        alt={item.title}
      />
      <div className="p-4 flex-grow">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <p>
          <strong>Category:</strong> {item.category}
        </p>
      </div>
      {type === "found" && (
        <div className="p-4">
          <button
            className="bg-[#01AA85] hover:bg-[#018f70] text-white font-bold py-2 px-4 w-full rounded transition-colors duration-200"
            onClick={handleClaimClick}
          >
            Claim Item
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
