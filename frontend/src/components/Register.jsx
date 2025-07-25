import React, { useState } from 'react';
import { database } from '../config/appwriteconfig';
import { useNavigate } from 'react-router-dom';
import { account } from '../config/appwriteconfig';
import { useEffect } from 'react';

const Register = () => {

  const navigate=useNavigate();
  // State for form fields
  const [name, setName] = useState('');
  const[Email,setEmail]=useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const[type,settype]=useState('');

  const [data,setdata]=useState();

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the form data to your backend or perform any other action
    console.log('Form submitted:', { name, address, type, description });
    // Clear form fields after submission
    setName('');
    setEmail('');
    setAddress('');
    setDescription('');
    settype('');
    fun();

    alert("Sucessfully Registered");
    navigate("/test");
   
  };



  useEffect(()=>{            // use to get cuurent login user seesion for unique id logic 

    const info= account.get();

    info.then(function(res){
     setdata(res);
     setName(res.$id)
     console.log(res.$id);
    },function(err){
      alert("First Create Account ")
     navigate("/signin");
    })
 },[])


  const fun= async ()=>{

    

    try{
    var x= await database.createDocument('66263f3141d8bdc69c8c','6627ac159d84c9c9b305','unique()',{
        Name:name,
        type:type,
        Location:address,
        description:description,
        Email:Email,
    })
}

catch(error){
    console.log(error);
}
  }

  return (

     

    <div className="container mx-auto p-4 flex justify-center items-center bg-cover bg-center" style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWau9V3PZdKNysEjm889yJ6abpJSPxLaDGgQ&s')", backgroundSize: 'contain'}}>

    

  <div className="max-w-md h-full bg-gradient-to-br from-green-400 to-blue-500 rounded-lg shadow-lg p-6">
  <h3 className="text-3xl font-bold mb-4 text-gray-800 text-center">Welcome { data ? `${data.$id}`:"..."    } </h3>
    <h2 className="text-3xl font-bold mb-4 text-white text-center">Register Your Restaurant Details Here </h2>
    <img width="100" height="70" className=' ml-32' src="data:image/png;base64,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" alt="" />
         
    <form onSubmit={handleSubmit}className=' mt-10' >
      <div className="mb-4">
        <label htmlFor="name" className="block text-white font-bold mb-2">Restaurant Name (Auto Fill By Your Username)</label>
        <input type="text" id="name" value={name}  className="w-full border rounded-md py-2 px-3 text-gray-700 bg-white focus:outline-none focus:border-green-500" required />
      </div>


      <div className="mb-4">
        <label htmlFor="Email" className="block text-white font-bold mb-2">Email (For Recieving Orders Pls enter Correct Email)</label>
        <input type="text" id="Email" value={Email} onChange={(e) => setEmail(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 bg-white focus:outline-none focus:border-green-500" required />
      </div>


      <div className="mb-4">
        <label htmlFor="address" className="block text-white font-bold mb-2">Address</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 bg-white focus:outline-none focus:border-green-500" required />
      </div>


      <div className="mb-4">
        <label htmlFor="type" className="block text-white font-bold mb-2">Type (veg/non-veg/vegan)</label>
        <input type="text" id="type"  onChange={(e) => settype(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 bg-white focus-outline-none focus:border-green-500" required />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-white font-bold mb-2">Description</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border rounded-md py-2 px-3 text-gray-700 bg-white focus:outline-none focus:border-green-500" rows="4" required />
      </div>
      <button type="submit" className="bg-white hover:bg-gray-200 text-blue-500 font-bold py-2 px-4 rounded-full w-full">Submit</button>
    </form>
  </div>



  



</div>


  





  );
};

export default Register;
