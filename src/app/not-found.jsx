import Link from "next/link";


function notfound() {
  return (
    <div className="h-[70vh]">
      <div className="my-[25vh]">
        <h1 className="text-3xl font-bold">404 not Found</h1>
        <Link href="/"> Return Home</Link>
      </div>
    </div>
  );
}

export default notfound;
