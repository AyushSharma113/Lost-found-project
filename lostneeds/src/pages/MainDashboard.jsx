import React, { useState } from "react";
import Navlinks from "../components/Navlinks";
import Chatlist from "../components/Chatlist";
import ChatBox from "../components/ChatBox";
import ItemCard from "../components/ItemCard";

const MainDashboard = () => {
  const [activeTab, setActivetab] = useState("home");
  const [selectedUser, setSelectedUser] = useState(null);

  const lostItems = [
    {
      id: 1,
      title: "Lost Wallet",
      description: "A black leather wallet lost in the park",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=1",
    },
    {
      id: 2,
      title: "Lost Phone",
      description: "Samsung Galaxy S10 lost in a taxi",
      category: "Electronics",
      imageUrl: "https://picsum.photos/200/200?random=2",
    },
    {
      id: 5,
      title: "Lost Backpack",
      description: "Blue Jansport backpack lost at the train station",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=5",
    },
    {
      id: 6,
      title: "Lost Car Keys",
      description: "Set of car keys with a BMW keychain",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=6",
    },
    {
      id: 7,
      title: "Lost Laptop",
      description: "MacBook Pro lost in a coffee shop",
      category: "Electronics",
      imageUrl: "https://picsum.photos/200/200?random=7",
    },
    {
      id: 8,
      title: "Lost Travel Mug",
      description: "Stainless steel travel mug lost in the gym",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=8",
    },
    {
      id: 9,
      title: "Lost Book",
      description: "'To Kill a Mockingbird' lost on a bus",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=9",
    },
    {
      id: 10,
      title: "Lost Sunglasses",
      description: "Ray-Ban sunglasses lost at the beach",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=10",
    },
    {
      id: 11,
      title: "Lost Dog",
      description: "Golden Retriever named Max lost in the neighborhood park",
      category: "Pets",
      imageUrl: "https://picsum.photos/200/200?random=11",
    },
    {
      id: 12,
      title: "Lost Bike",
      description: "Black mountain bike lost near the university campus",
      category: "Vehicles",
      imageUrl: "https://picsum.photos/200/200?random=12",
    },
  ];

  const foundItems = [
    {
      id: 3,
      title: "Found Keys",
      description: "Set of keys found at the bus stop",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=13",
    },
    {
      id: 4,
      title: "Found Glasses",
      description: "Black framed glasses found in the library",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=14",
    },
    {
      id: 13,
      title: "Found Umbrella",
      description: "Black and white striped umbrella found in a taxi",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=15",
    },
    {
      id: 14,
      title: "Found Backpack",
      description: "Red Nike backpack found on a bench in the park",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=16",
    },
    {
      id: 15,
      title: "Found Jewelry",
      description: "Gold necklace with a heart pendant found in a hotel lobby",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=17",
    },
    {
      id: 16,
      title: "Found Laptop",
      description: "Found a Dell laptop charger at the university library",
      category: "Electronics",
      imageUrl: "https://picsum.photos/200/200?random=18",
    },
    {
      id: 17,
      title: "Found Watch",
      description: "Silver watch found on a bus seat",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=19",
    },
    {
      id: 18,
      title: "Found Water Bottle",
      description: "Blue reusable water bottle found in a gym locker room",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=20",
    },
    {
      id: 19,
      title: "Found Scarf",
      description: "Green woolen scarf found on a park bench",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=21",
    },
    {
      id: 20,
      title: "Found Hat",
      description: "Baseball cap with a NY logo found in a concert hall",
      category: "Personal Items",
      imageUrl: "https://picsum.photos/200/200?random=22",
    },
  ];

  // Define a function to handle the "Claim item" action
  const handleClaim = (item) => {
    console.log("Claiming item from MainDashboard for item ID:", item.id);
    // Implement API call to handle the claim request here or any other logic
  };

  return (
    <div className="flex flex-col  lg:flex-row h-screen w-screen bg-[#F5F5F5]">
      <Navlinks setActivetab={setActivetab} />
      {activeTab === "home" && (
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Lost Items</h2>
            <div className="flex flex-wrap">
              {lostItems.map((item) => (
                <ItemCard key={item.id} item={item} type="lost" />
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Found Items</h2>
            <div className="flex flex-wrap">
              {foundItems.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  type="found"
                  onClaim={handleClaim}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      {activeTab === "chat" && (
        <>
          <Chatlist setSelectedUser={setSelectedUser} />
          <ChatBox selectedUser={selectedUser} />
        </>
      )}
    </div>
  );
};

export default MainDashboard;
