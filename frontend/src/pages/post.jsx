import Navbar from "../components/navbar";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Post ({items , setItems}) {

    let[title, setTitle] = useState("");
    let[description, setDescription] = useState("");    
    let[price, setPrice] = useState("");
    let[image, setImage] = useState("");
    let[category, setCategory] = useState("");

    const post = (e) => {
        fetch('http://localhost:3000/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                description: description,
                price: price,
                image: 'image-url.jpg',
                category: 'Category'
            })
        })
        .then(response => response.json())
        .then(data => { 
            setItems(...items, data); 
        })
    }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Post an Item</h1>
        <form onSubmit={post} className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="Item Title" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea value={description} onChange={(e)=>setDescription(e.target.value) } className="w-full border border-gray-300 rounded-md p-2" rows="4" placeholder="Item Description"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
            <input value={price} onChange={(e)=>setPrice(e.target.value)} type="number" className="w-full border border-gray-300 rounded-md p-2" placeholder="Item Price" />
          </div>
          <button  type="submit" className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
            Post Item
          </button>
        </form>
      </div>
    </div>
  );
}