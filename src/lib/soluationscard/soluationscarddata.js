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
    type: "Business",
    title: "Bhojon",
    desc: "Restaurant Management Software with Restaurant Website",
  },
  {
    type: "Business",
    title: "Cloud Kitchen",
    desc: "Kitchen Management Software",
  },
  {
    type: "Business",
    title: "Xain",
    desc: "Restaurant Management Software with Restaurant WebsiteHotel Management System & Booking Software",
  },
];

export const getSoluationsData = async (filt) => {
  return data.filter((cat) => cat.type === filt);
};
