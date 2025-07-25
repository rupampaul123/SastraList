  import { useEffect, useState } from "react";
  export default function Cards({items , setItems}) {

    let [view, setView] = useState(false);
   

    useEffect(() => { 
      fetch('http://localhost:3000/')
        .then(response => response.json())
        .then(data => {
          setItems(data);
        })
      }, []);
      
        

    return (
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
  <div key={index} className="w-full md:w-[300px] bg-white shadow-md rounded-xl p-4">
  <img src={item.image} className="rounded-lg h-[150px] w-full object-cover" />
  <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
  <p className="text-sm text-gray-500">₹{item.price} • {item.category}</p>
  {view && (
    <p className="text-sm text-gray-700 mt-2">
        {item.description}
    </p>
  )}
  <div className="flex justify-between mt-3">
    <a href="https://wa.me/919876543210" target="_blank"
       className="text-green-600 font-medium hover:underline">
      Contact
    </a>
    <button onClick={()=>setView(!view)} className="text-blue-500">View</button>
  </div>
</div>
            ))}
        </div>
    );
  }