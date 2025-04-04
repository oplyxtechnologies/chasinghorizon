import { ArrowRight } from "lucide-react";

export const Sidebar = () => {
  return (
    <div className="p-6 my-10 mx-auto rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-3">
        <li>
          <a href="#" className="text-primary flex gap-2 group items-center">
            Travel Tips{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-all text-primary"
            />
          </a>
        </li>
        <li>
          <a href="#" className="text-primary flex gap-2 group items-center">
            Destination Guides{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-all text-primary"
            />
          </a>
        </li>
        <li>
          <a href="#" className="text-primary flex gap-2 group items-center">
            Adventure Stories{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-2 transition-all text-primary "
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
