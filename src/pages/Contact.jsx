import React, {useState} from "react";

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''});
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e){
    setForm({...form, [e.target.name]: e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();
    setError('');
    if(!form.name || !form.email || !form.message){
      setError("Please fill all fields.");
      return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){
      setError("Please provide a valid email.");
      return;
    }
    try{
      const prev = JSON.parse(localStorage.getItem("contact_submissions_v1") || "[]");
      prev.push({...form, date: new Date().toISOString()});
      localStorage.setItem("contact_submissions_v1", JSON.stringify(prev));
      setSent(true);
      setForm({name:'',email:'',message:''});
    }catch(e){
      setError("Failed to save submission.");
    }
  }

  if(sent) return (
    <div style={{padding:16}}>
      <h2>Thanks — we received your message!</h2>
      <p>We'll get back to you at {form.email || 'your email'} soon.</p>
      <button onClick={()=>setSent(false)}>Send another message</button>
    </div>
  );

  return (
    <div style={{padding:16,textAlign: "center"}}>
      <h1 style={{color: "green", fontSize: 55,textAlign: "center",marginBottom:12}}>Contact Us</h1>
      {error && <div style={{color:'red'}}>{error}</div>}
      <form onSubmit={handleSubmit} style={{maxWidth:600, textAlign: "center", marginLeft:"300px"}}> 
        <div style={{marginBottom:8, textAlign: "center"}}>
          <label style={{color: "green", fontSize: 25,textAlign: "center"}}>Name</label><br/>
          <input name="name" value={form.name} onChange={handleChange} style={{width:'100%', height: 25}} />
        </div>
        <div style={{marginBottom:8, textAlign: "center"}}>
          <label style={{color: "green", fontSize: 25,textAlign: "center"}}>Email</label><br/>
          <input name="email" value={form.email} onChange={handleChange} style={{width:'100%', height: 25}} />
        </div>
        <div style={{marginBottom:8, textAlign: "center"}}>
          <label style={{color: "green", fontSize: 25,textAlign: "center", height: 350}}>Message</label><br/>
          <textarea name="message" value={form.message} onChange={handleChange} style={{width:'100%', textAlign: "center"}} rows={6} />
        </div>
        <button type="submit" style={{textAlign: "center"}}>Send Message</button>
      </form>
    </div>
  )
}
