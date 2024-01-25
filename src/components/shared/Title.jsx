"use client";

const Title = ({ title, subtitle }) => {
  return (
    <div className="max-w-screen-sm mx-auto text-center">
      <h1 className="text-4xl font-bold m-6">{title}</h1>
      <p className="mb-5">{subtitle && subtitle}</p>
    </div>
  );
};

export default Title;
