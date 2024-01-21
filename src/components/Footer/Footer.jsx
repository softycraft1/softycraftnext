function Footer() {
  return (
    <div className="w-[100%]">
      <div className="py-10 text-[#b9b7b7] bg-[#161616] text-base-content flex flex-row justify-evenly items-center">
        <div>
          <p><span className="text-3xl font-bold">SoftyCraft</span><br />Providing reliable tech since 1992</p>
        </div>
        <div className="flex flex-row gap-8 cursor-pointer">
          <ul className="flex flex-col">
            <li className="font-bold ">SERVICES</li>
            <li >Branding</li>
            <li >Design</li>
            <li >Marketing</li>
            <li >Advertisement</li>
          </ul>
          <ul className="flex flex-col">
            <li className="font-bold ">COMPANY</li>
            <li >About us</li>
            <li >Contact</li>
            <li >Jobs</li>
            <li >Press kit</li>
          </ul>
          <ul className="flex flex-col">
            <li className="font-bold ">LEGAL</li>
            <li >Terms of use</li>
            <li >Privacy policy</li>
            <li >Cookie policy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
