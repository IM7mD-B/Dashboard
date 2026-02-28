import Header from "../components/Headerr";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">

        <Sidebar isOpen={isOpen} />
     

      <div className=" flex-1">
        <Header onToggle={() => setIsOpen(!isOpen)} />
            {children}
      </div>

    </div>
  );
}
