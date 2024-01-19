import Link from "next/link";


function notfound() {
  return (
    <div>
      <h1 className="text-3xl">404 not Found</h1>
      <Link href="/"> Return Home</Link>
    </div>
  );
}

export default notfound;
