import React, { useState } from "react";

const Flight = () => {
  const [flightType, setFlightType] = useState("roundTrip");
  const [flyingFrom, setFlyingFrom] = useState("");
  const [flyingTo, setFlyingTo] = useState("");
  const [departing, setDeparting] = useState("");
  const [returning, setReturning] = useState("");
  const [numOfAdults, setNumOfAdults] = useState(1);
  const [numOfKids, setNumOfKids] = useState(0);
  const [travClass, setTravClass] = useState("Economy class");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      flightType,
      flyingFrom,
      flyingTo,
      departing,
      returning,
      numOfAdults,
      numOfKids,
      travClass,
    });
  };

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => setter(value > 0 ? value - 1 : 0);

  return (
    <>
      <style>
        {`
/* ================= BACKGROUND IMAGE ================= */
.flight-container {
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  background:
    linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
    url('https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg') no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Lato', sans-serif;
}

/* ================= CARD ================= */
.flight-container #booking {
  width: 100%;
  max-width: 950px;
  border-radius: 16px;
  overflow: hidden;
  margin: auto;
  backdrop-filter: blur(15px);
  background: rgba(255,255,255,0.85);
  border: 1px solid rgba(255,255,255,0.3);
  box-shadow: 0 25px 80px rgba(0,0,0,0.25);
  transition: 0.3s ease;
}

.flight-container #booking:hover {
  transform: translateY(-5px);
}

/* ================= HEADER ================= */
.flight-container header {
  padding: 2em;
  text-align: center;
  background: linear-gradient(135deg,#4facfe,#00f2fe);
  color: #fff;
}

.flight-container header h1 {
  margin: 0;
  font-size: 28px;
}

.flight-container header p {
  margin-top: 5px;
}

/* ================= FORM ================= */
.flight-container #formSection {
  padding: 1.5em;
}

.flight-container .form-group {
  margin-bottom: 20px;
  position: relative;
}

/* INPUT */
.flight-container .form-control {
  width: 100%;
  height: 60px;
  padding: 24px 15px 0;
  border: 2px solid #dfe5e9;
  border-radius: 8px;
  font-size: 16px;
}

.flight-container .form-label {
  position: absolute;
  top: 6px;
  left: 15px;
  font-size: 12px;
  color: #4facfe;
}

/* GRID */
.flight-container #placeDate,
.flight-container #details {
  display: grid;
  grid-template-columns: 48.5% 48.5%;
  gap: 3%;
}

/* BUTTON */
.flight-container .submit-btn {
  width: 100%;
  height: 60px;
  background: linear-gradient(135deg,#ff7e5f,#feb47b);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.flight-container .submit-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 30px rgba(0,0,0,0.3);
}

/* STEPPER */
.flight-container .stepper {
  display: flex;
  width: 120px;
}

.flight-container .stepper button {
  border: 2px solid #dfe5e9;
  background: #fff;
  padding: 6px 10px;
  cursor: pointer;
}

.flight-container .stepper input {
  width: 50px;
  text-align: center;
  border: 2px solid #dfe5e9;
}

/* ================= RESPONSIVE ================= */

/* Tablet */
@media (max-width: 992px) {
  .flight-container #booking {
    width: 95%;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .flight-container #placeDate,
  .flight-container #details {
    grid-template-columns: 100%;
    gap: 15px;
  }

  .flight-container header h1 {
    font-size: 22px;
  }

  .flight-container .form-control {
    height: 50px;
    font-size: 14px;
  }

  .flight-container .submit-btn {
    height: 50px;
    font-size: 16px;
  }

  .flight-container .stepper {
    width: 100%;
    justify-content: space-between;
  }

  .flight-container #booking {
    max-width: 100%;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .flight-container header h1 {
    font-size: 18px;
  }

  .flight-container header p {
    font-size: 12px;
  }

  .flight-container .form-label {
    font-size: 10px;
  }
}
        `}
      </style>

      <div className="flight-container">
        <main>
          <section id="booking">
            <header>
              <h1>Book your flight ✈️</h1>
              <p>Find best deals easily</p>
            </header>

            <section id="formSection">
              <form onSubmit={handleSubmit}>
                
                <div className="form-group">
                  <label>
                    <input type="radio" checked={flightType === "roundTrip"} onChange={() => setFlightType("roundTrip")} /> Roundtrip
                  </label>

                  <label style={{ marginLeft: "15px" }}>
                    <input type="radio" checked={flightType === "oneWay"} onChange={() => setFlightType("oneWay")} /> One way
                  </label>

                  <label style={{ marginLeft: "15px" }}>
                    <input type="radio" checked={flightType === "multiCity"} onChange={() => setFlightType("multiCity")} /> Multi-City
                  </label>
                </div>

                <div id="placeDate">
                  <div className="form-group">
                    <label className="form-label">From</label>
                    <input className="form-control" value={flyingFrom} onChange={(e) => setFlyingFrom(e.target.value)} />
                  </div>

                  <div className="form-group">
                    <label className="form-label">To</label>
                    <input className="form-control" value={flyingTo} onChange={(e) => setFlyingTo(e.target.value)} />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Departing</label>
                    <input type="date" className="form-control" value={departing} onChange={(e) => setDeparting(e.target.value)} />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Returning</label>
                    <input type="date" className="form-control" value={returning} onChange={(e) => setReturning(e.target.value)} />
                  </div>
                </div>

                <h3>Passengers</h3>

                <div id="details">
                  <div className="form-group">
                    <label>Adults</label>
                    <div className="stepper">
                      <button type="button" onClick={() => decrement(setNumOfAdults, numOfAdults)}>-</button>
                      <input value={numOfAdults} readOnly />
                      <button type="button" onClick={() => increment(setNumOfAdults, numOfAdults)}>+</button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Children</label>
                    <div className="stepper">
                      <button type="button" onClick={() => decrement(setNumOfKids, numOfKids)}>-</button>
                      <input value={numOfKids} readOnly />
                      <button type="button" onClick={() => increment(setNumOfKids, numOfKids)}>+</button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Class</label>
                    <select className="form-control" value={travClass} onChange={(e) => setTravClass(e.target.value)}>
                      <option>Economy class</option>
                      <option>Business class</option>
                      <option>First class</option>
                    </select>
                  </div>
                </div>

                <button className="submit-btn">Show Flights</button>
              </form>
            </section>
          </section>
        </main>
      </div>
    </>
  );
};

export default Flight;