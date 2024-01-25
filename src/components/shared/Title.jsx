"use client";

const Title = ({ title, subtitle }) => {
  return (
    <>
      <h1 className="text-4xl font-bold m-6">{title}</h1>
      <p className="mb-5">{subtitle && subtitle}</p>
    </>
  );
};

export default Title;
