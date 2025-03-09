import { NotebookIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 border-b border-b-accent-foreground shadow-lg">
      <Link href={"/"} className="">
        <NotebookIcon />
      </Link>

      <Link href={"/create"}>
        <Button className="cursor-pointer" variant={"link"}>Create Blog</Button>
      </Link>
    </div>
  );
}
