import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import ShinyText from "./shinyText";

export default function Navbar() {
  return (
    <header className="flex h-20 w-full items-center bg-black text-white md:px-20">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden text-white">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-black text-white">
          <Link to="#" className="flex items-center gap-2 mb-6">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Acme Inc</span>
          </Link>
          <nav className="flex flex-col gap-4">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <Link key={item} to="#" className="text-lg font-semibold">
                <ShinyText text={item} disabled={false} speed={3} />
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex w-full justify-between items-center px-2 lg:px-4">
        <Link to="#" className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6 text-white" />
          <span className="">Acme Inc</span>
        </Link>

        <nav className="hidden lg:flex gap-4">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              to="#"
              className="text-lg font-medium px-3 py-2 hover:text-gray-300"
            >
              <ShinyText text={item} disabled={false} speed={3} />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
