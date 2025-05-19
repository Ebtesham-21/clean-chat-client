import Image from "next/image";
import Sidebar from "./ui/sidebar";
import Users from "./ui/users";
import Chat from "./ui/chat";

export default function Home() {
  return (
    <div >
      <div className="p-[20px]">
          <div className="flex p-3">
              <div className="w-[20%]  flex justify-center">
                  <Sidebar/>
              </div>
              <div className="w-[30%] h-[95vh]    flex justify-center">
                  <Users/>
              </div>
              <div className="w-[100%] h-[90vh] items-center flex justify-center">
                  <Chat/>
              </div>

            
          </div>
      </div>
      
    </div>
  );
}
