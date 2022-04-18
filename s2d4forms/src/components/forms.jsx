import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    age: "",
    email:""
  });
  const handlechange = (e) => {
    // console.log(e.target.id);
    // if(e.target.id==="username")
    // {
    //     setFormData({...formData,username:e.target.value})
    // }
    // else if(e.target.id==="age")
    // {
    //     setFormData({...formData,age:e.target.value})
    // }

    //we will write the above commented data in sinlg line
    console.log("e.target", e.target);
    setFormData({ ...formData, [e.target.id]: e.target.value }); //*******imp******
  };


  const handlesubmit=(e)=>{
      e.preventDefault(); 
      console.log(formData)
    //   fetch("",{
    //       method:"POST",
    //       body:JSON.stringify(formData),
    //       headers:.................
    //   }) 
  }
  return (
    <form onSubmit={handlesubmit}>
      <input
        onChange={handlechange}
        // value={formData.username}
        type="text"
        placeholder="enter username"
        id="username"
      />

      <input
        onChange={handlechange}
        // value={formData.age}
        type="number"
        placeholder="enterage"
        id="age"
      />

    <input
        onChange={handlechange}        
        type="text"
        placeholder="enter email"
        id="email"
      />

      <input type="button" value="submit" />
    </form>
  );
};
