// import "../components/footer.css";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="fLists">
//         <ul className="fList">
//           <li className="fListItem">Countries</li>
//           <li className="fListItem">Regions</li>
//           <li className="fListItem">Cities</li>
//           <li className="fListItem">Districts</li>
//           <li className="fListItem">Airports</li>
//           <li className="fListItem">Hotels</li>
//         </ul>
//         <ul className="fList">
//           <li className="fListItem">Homes </li>
//           <li className="fListItem">Apartments </li>
//           <li className="fListItem">Resorts </li>
//           <li className="fListItem">Villas</li>
//           <li className="fListItem">Hostels</li>
//           <li className="fListItem">Guest houses</li>
//         </ul>
//         <ul className="fList">
//           <li className="fListItem">Unique places to stay </li>
//           <li className="fListItem">Reviews</li>
//           <li className="fListItem">Unpacked: Travel articles </li>
//           <li className="fListItem">Travel communities </li>
//           <li className="fListItem">Seasonal and holiday deals </li>
//         </ul>
//         <ul className="fList">
//           <li className="fListItem">Car rental </li>
//           <li className="fListItem">Flight Finder</li>
//           <li className="fListItem">Restaurant reservations </li>
//           <li className="fListItem">Travel Agents </li>
//         </ul>
//         <ul className="fList">
//           <li className="fListItem">Curtomer Service</li>
//           <li className="fListItem">Partner Help</li>
//           <li className="fListItem">Careers</li>
//           <li className="fListItem">Sustainability</li>
//           <li className="fListItem">Press center</li>
//           <li className="fListItem">Safety Resource Center</li>
//           <li className="fListItem">Investor relations</li>
//           <li className="fListItem">Terms & conditions</li>
//         </ul>
//       </div>
//       <div className="fText">Copyright © 2023 BookMe.in </div>
//     </div>
//   );
// };

// export default Footer;


import "../components/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">

        <div className="fLists">
          <ul className="fList">
            <li className="fTitle">Explore</li>
            <li>Countries</li>
            <li>Regions</li>
            <li>Cities</li>
            <li>Districts</li>
            <li>Airports</li>
            <li>Hotels</li>
          </ul>

          <ul className="fList">
            <li className="fTitle">Stay</li>
            <li>Homes</li>
            <li>Apartments</li>
            <li>Resorts</li>
            <li>Villas</li>
            <li>Hostels</li>
            <li>Guest Houses</li>
          </ul>

          <ul className="fList">
            <li className="fTitle">Discover</li>
            <li>Unique Places</li>
            <li>Reviews</li>
            <li>Travel Articles</li>
            <li>Communities</li>
            <li>Deals</li>
          </ul>

          <ul className="fList">
            <li className="fTitle">Services</li>
            <li>Car Rental</li>
            <li>Flights</li>
            <li>Restaurants</li>
            <li>Travel Agents</li>
          </ul>

          <ul className="fList">
            <li className="fTitle">Company</li>
            <li>Customer Service</li>
            <li>Careers</li>
            <li>Sustainability</li>
            <li>Press</li>
            <li>Investor Relations</li>
            <li>Terms</li>
          </ul>
        </div>

        <div className="fText">
          © 2026 BookMe.in — All rights reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;