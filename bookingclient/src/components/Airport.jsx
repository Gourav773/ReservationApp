import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TaxiService() {
  return (
    <div className="taxi-wrapper">
      <style>{`
        .taxi-wrapper {
          font-family: 'Segoe UI', sans-serif;
          background-color: #f8f9fa;
        }

        :root {
          --primary: #ffcc00;
          --dark: #002347;
        }

        /* HERO */
        .taxi-hero {
          background: linear-gradient(rgba(0,35,71,0.7), rgba(0,35,71,0.7)),
          url('https://static.wixstatic.com/media/843689_ab9db9c74e22490092f2a3e5d9ee4450~mv2.png');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 120px 20px;
          text-align: center;
        }

        .taxi-btn {
          background-color: var(--primary);
          color: #000;
          font-weight: bold;
          border-radius: 50px;
          padding: 12px 30px;
          border: none;
        }

        .taxi-btn:hover {
          background-color: #e6b800;
          transform: scale(1.05);
          transition: 0.3s;
        }

        /* ROUTE BOX */
        .taxi-route-box {
          background: white;
          border-radius: 15px;
          padding: 25px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          border-left: 5px solid var(--primary);
          height: 100%;
        }

        .taxi-route-box.dark {
          border-left: 5px solid var(--dark);
        }

        /* PRICING */
        .taxi-card {
          border-radius: 15px;
          padding: 25px;
          background: white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          transition: 0.3s;
          height: 100%;
        }

        .taxi-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .taxi-price {
          color: #0d6efd;
          font-weight: bold;
          font-size: 28px;
        }

        /* FEATURES */
        .taxi-feature {
          font-size: 18px;
          margin-top: 10px;
        }

        /* FOOTER */
        .taxi-footer {
          background-color: var(--dark);
          color: white;
          text-align: center;
          padding: 20px;
        }

        /* WHATSAPP FLOAT */
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #25d366;
          color: white;
          font-size: 28px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          z-index: 999;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          transition: 0.3s;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .taxi-hero {
            padding: 80px 15px;
          }

          .taxi-price {
            font-size: 22px;
          }
        }
      `}</style>

      {/* HERO */}
      <div className="taxi-hero">
        <h1 className="fw-bold">Azamgarh ↔ Lucknow Airport</h1>
        <p className="lead">24/7 Taxi Service Available</p>

        <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
          <a href="tel:919876543210" className="taxi-btn">
            Call Now
          </a>

          <a
            href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20book%20a%20taxi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* ROUTES */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="taxi-route-box">
              <h5>Azamgarh → Lucknow Airport</h5>
              <p className="text-muted">
                Direct pickup & drop via expressway.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="taxi-route-box dark">
              <h5>Lucknow Airport → Azamgarh</h5>
              <p className="text-muted">
                Driver waiting with placard.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div className="container py-5 text-center">
        <h2 className="fw-bold mb-4">Best Prices</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="taxi-card">
              <h4>Sedan</h4>
              <p>Dzire / Etios</p>
              <div className="taxi-price">₹3499</div>
              <button className="btn btn-dark w-100 mt-3 rounded-pill">
                Book
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="taxi-card border border-primary">
              <h4>SUV</h4>
              <p>Ertiga</p>
              <div className="taxi-price">₹4999</div>
              <button className="btn btn-primary w-100 mt-3 rounded-pill">
                Book
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="taxi-card">
              <h4>Premium</h4>
              <p>Innova</p>
              <div className="taxi-price">₹6499</div>
              <button className="btn btn-dark w-100 mt-3 rounded-pill">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="container text-center py-5">
        <h2 className="fw-bold mb-4">Why Choose Us?</h2>

        <div className="row">
          <div className="col-md-3 taxi-feature">🚗 Expressway</div>
          <div className="col-md-3 taxi-feature">👨‍✈️ Drivers</div>
          <div className="col-md-3 taxi-feature">📞 Support</div>
          <div className="col-md-3 taxi-feature">💰 No Hidden Cost</div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="taxi-footer">
        © 2024 BookGadi | All Rights Reserved
      </div>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20book%20a%20taxi"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        💬
      </a>
    </div>
  );
}