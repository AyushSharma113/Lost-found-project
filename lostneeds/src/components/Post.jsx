import { useState } from "react";
import { db, auth } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Post() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object from the form element
    const formElement = e.target;
    const formData = {
      description: formElement.description.value,
      imageUrl: formElement.imageUrl.value,
      category: formElement.category.value,
      userEmail: auth.currentUser.email,
      createdAt: new Date().toISOString(),
      userId: auth.currentUser.uid,
    };

    console.log("Form data:", formData);

    // Validate form data
    if (!formData.description || !formData.imageUrl || !formData.category) {
      alert("Please fill in all fields");
      return;
    }

    try {
      // Add document to posts collection
      const docRef = await addDoc(collection(db, "posts"), formData);
      console.log("Document written with ID: ", docRef.id);

      // Clear form
      formElement.reset();
      alert("Post created successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error creating post. Please try again.");
    }

    console.log("Form data collected:", formData);
    // You can now send this data to your backend or Firebase
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        {/* ...existing header code... */}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a description"
              required
            />
          </div>

          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option defaultValue="" disabled>
                Select a category
              </option>
              <option value="electronics">Electronics</option>
              <option value="documents">Documents</option>
              <option value="accessories">Accessories</option>
              <option value="others">Others</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
