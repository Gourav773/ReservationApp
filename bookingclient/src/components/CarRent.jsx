import React, { useState } from "react";

export default function CarRent() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [modal, setModal] = useState(false);
  const [bookingModal, setBookingModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const [form, setForm] = useState({
    pickup: "",
    returnLoc: "",
    start: "",
    end: "",
    name: "",
    email: ""
  });

  const [summary, setSummary] = useState({ days: 0, total: 0 });

  const vehicles = [
    { title: "COUPE", price: 2500, img: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=800", desc: "Premium performance" },
    { title: "CROSS-OVER", price: 3299, img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800", desc: "Adventure ready" },
    { title: "SUV", price: 4000, img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800", desc: "Family & comfort" },
    { title: "SPORTS", price: 5500, img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800", desc: "High speed thrill" },
    { title: "SEDAN", price: 2200, img: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800", desc: "Luxury & smooth ride" },
    { title: "MINI", price: 1800, img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800", desc: "Compact city drive" },

    { title: "HATCHBACK", price: 1500, img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800", desc: "Budget friendly" },
    { title: "LUXURY SUV", price: 6000, img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800", desc: "Ultimate comfort" },
    { title: "CONVERTIBLE", price: 5200, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800", desc: "Open roof fun" },
    { title: "PICKUP", price: 3500, img: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=800", desc: "Heavy duty drive" },
    { title: "VAN", price: 3000, img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800", desc: "Group travel" },
    { title: "ELECTRIC", price: 2800, img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800", desc: "Eco friendly ride" },
    { title: "OFF-ROAD", price: 4500, img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800", desc: "Extreme adventure" },
    { title: "LIMOUSINE", price: 8000, img: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800", desc: "Royal experience" },
    { title: "SUV", price: 4000, img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800", desc: "Family & comfort" },
    { title: "ROADSTER", price: 5000, img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800", desc: "Sporty look" },
  { title: "MINI", price: 1800, img: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=800", desc: "Compact city drive" },    
    { title: "CLASSIC", price: 4000, img: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800", desc: "Vintage style" },
    { title: "CITY CAR", price: 1600, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800", desc: "Perfect for city" },
    { title: "BUSINESS", price: 3500, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800", desc: "Corporate travel" }
  ];


  const openModal = (car) => {
    setSelectedCar(car);
    setModal(true);
  };

  const openBooking = () => {
    const start = new Date(form.start);
    const end = new Date(form.end);

    const days = Math.ceil((end - start) / (1000 * 3600 * 24));
    if (days <= 0) return alert("Invalid dates");

    setSummary({
      days,
      total: days * selectedCar.price
    });

    setModal(false);
    setBookingModal(true);
  };

  const confirmBooking = () => {
    if (!form.name || !form.email) return alert("Fill details");

    setBookingModal(false);
    setConfirmModal(true);
  };

  return (
    <>
      <style>{`
      body {
        margin: 0;
        font-family: 'Poppins', sans-serif;
        background: url('https://binscars.com/themes/home/img/about.png') no-repeat center/cover;
        color: white;
      }
      header {
        background: rgba(0,0,0,0.9);
        padding: 15px;
        text-align: center;
        letter-spacing: 2px;
      }
      .welcome {
        padding: 120px 20px;
        background: rgba(0,0,0,0.6);
        text-align: center;
      }
      .welcome-title {
        color: gold;
        font-size: 45px;
      }
      .book-now-bar {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
        margin-top: 20px;
      }
      .book-now-bar input {
        padding: 10px;
        border-radius: 8px;
        border: none;
      }
      .featured-vehicles {
        background: #111;
        padding: 40px;
        text-align: center;
      }
      .vehicle-container {
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        gap: 20px;
        margin-top: 20px;
      }
      .vehicle-card {
        background: linear-gradient(145deg, #1a1a1a, #2b2b2b);
        padding: 15px;
        border-radius: 15px;
        transition: 0.3s;
      }
      .vehicle-card img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 10px;
      }
      button {
        margin-top: 10px;
        padding: 10px;
        background: linear-gradient(45deg, gold, orange);
        border: none;
        border-radius: 8px;
        cursor: pointer;
      }
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .modal-content {
        background: white;
        color: black;
        padding: 20px;
        border-radius: 10px;
        width: 90%;
        max-width: 400px;
        text-align: center;
      }
      `}</style>

      <header>
        <h2>🚗 Premium Car Rental</h2>
      </header>

      <section className="welcome">
        <h1 className="welcome-title">WELCOME TO PREMIUM CAR RENTAL</h1>

        <div className="book-now-bar">
          <input placeholder="Pickup Location" onChange={(e)=>setForm({...form,pickup:e.target.value})}/>
          <input placeholder="Return Location" onChange={(e)=>setForm({...form,returnLoc:e.target.value})}/>
          <input type="datetime-local" onChange={(e)=>setForm({...form,start:e.target.value})}/>
          <input type="datetime-local" onChange={(e)=>setForm({...form,end:e.target.value})}/>
        </div>
      </section>

      <section className="featured-vehicles">
        <h2>🔥 Available Cars</h2>

        <div className="vehicle-container">
          {vehicles.map((car, i) => (
            <div key={i} className="vehicle-card">
              <img src={car.img} alt={car.title} />
              <h3>{car.title}</h3>
              <p>{car.desc}</p>
              <p>₹{car.price}/day</p>
              <button onClick={()=>openModal(car)}>View Details</button>
            </div>
          ))}
        </div>
      </section>

      {modal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedCar.title}</h2>
            <p>₹{selectedCar.price}/day</p>
            <button onClick={openBooking}>Book Now</button>
          </div>
        </div>
      )}

      {bookingModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Booking Summary</h2>
            <p>Days: {summary.days}</p>
            <p>Total: ₹{summary.total}</p>

            <input placeholder="Your Name" onChange={(e)=>setForm({...form,name:e.target.value})}/>
            <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>

            <button onClick={confirmBooking}>Confirm</button>
          </div>
        </div>
      )}

      {confirmModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>✅ Booking Confirmed</h2>
            <button onClick={()=>setConfirmModal(false)}>OK</button>
          </div>
        </div>
      )}
    </>
  );
}