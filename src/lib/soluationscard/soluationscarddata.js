const data = [
  {
    type: "Business",
    title: "ERP",
    desc: "Business ERP Solution / Product / Shop / Company Management",
  },
  {
    type: "Business",
    title: "HR Mananger",
    desc: "Human Resource Management System HR Software (HRMS)",
  },
  {
    type: "Business",
    title: "Wholesale",
    desc: "Inventory Control and Inventory Management System",
  },
  {
    type: "Business",
    title: "Flight Booking",
    desc: "Flight Booking Software",
  },
  {
    type: "Business",
    title: "VMS",
    desc: "Vehicle Management System",
  },
  {
    type: "Business",
    title: "GMS",
    desc: "Garage Management Software",
  },
  {
    type: "Business",
    title: "Innue",
    desc: "Hospitality Live Chat Software",
  },
  {
    type: "Business",
    title: "Bus365",
    desc: "Bus Reservation System",
  },
  {
    type: "Business",
    title: "Edutask",
    desc: "Online Course Selling Marketplace",
  },

  {
    type: "Hospitality",
    title: "Bhojon",
    desc: "Restaurant Management Software with Restaurant Website",
  },
  {
    type: "Hospitality",
    title: "Cloud Kitchen",
    desc: "Kitchen Management Software",
  },
  {
    type: "Hospitality",
    title: "Xain",
    desc: "Restaurant Management Software with Restaurant WebsiteHotel Management System & Booking Software",
  },
  {
    type: "E-Commerce",
    title: "Isshue",
    desc: "Multi Store eCommerce Shopping Cart Solution",
  },
  {
    type: "E-Commerce",
    title: "Storefex",
    desc: "Multi Vendor Marketplace Platform",
  },
  {
    type: "Healthcare",
    title: "Hospital Automanager",
    desc: "Advance Hospital Management System Software",
  },
  {
    type: "Healthcare",
    title: "Hospital",
    desc: "Hospital Management System with Website",
  },
  {
    type: "Healthcare",
    title: "Pharmacare",
    desc: "Pharmacy Software Made Easy",
  },
  {
    type: "Healthcare",
    title: "Multi-Hospital",
    desc: "Best Hospital Management System (SaaS App)",
  },
  {
    type: "Healthcare",
    title: "Clinic365",
    desc: "Clinic Management System",
  },
  {
    type: "Healthcare",
    title: "Doctorss",
    desc: "Doctor Appointment and Prescription System with Website",
  },
  {
    type: "Healthcare",
    title: "G-Prescription",
    desc: "Gynaecology & OBS Consultation Software",
  },
];

export const getSoluationsData = async (filt) => {
  return data.filter((cat) => cat.type === filt);
  
};
