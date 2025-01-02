import { Button } from "./components/ui/button";

import { DoorOpen, DoorClosed } from "lucide-react";

import Banner from "@/assets/banner.png";

export default function App() {
  return (
    <main>
      <div>
        <title>BetterGuilded</title>
      </div>
      <div className="flex justify-center items-center h-screen bg-[#20212b]">
        <div className="flex flex-col justify-center items-center">
          <img src={Banner} alt="Banner" />
          <div className="flex gap-3 mt-4">
            <Button className="bg-[#2f5b9d] hover:bg-[#1b3b6b]">
              <DoorOpen />
              Inject
            </Button>
            <Button className="bg-[#2f5b9d] hover:bg-[#1b3b6b]">
              <DoorClosed />
              Eject
            </Button>
          </div>
          <div className="flex mt-4">
            <a
              href="https://github.com/BetterGuildedgg/betterguilded"
              className="text-[#2f5b9d] hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
