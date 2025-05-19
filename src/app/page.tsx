import Image from "next/image";
import Sidebar from "./ui/sidebar";

export default function Home() {
  return (
    <div >
      <div className="p-[20px]">
          <div className="flex">
              <div className="w-[20%]  flex justify-center">
                  <Sidebar/>
              </div>
              <div className="w-[30%] h-[95vh]    flex justify-center">
                  user List
              </div>
              <div className="w-100% h-[95vh] flex justify-center">
                  chat
              </div>

            
          </div>
      </div>
      
    </div>
  );
}
