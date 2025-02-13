import HeaderComp from "@/components/backend/header";
import SidebarComp from "@/components/backend/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getSession } from "@/lib/dal";
import { redirect } from "next/navigation";
import { ReactNode } from "react";
 
export default async function layout({children}:{children: ReactNode;
  }) {
    const user = await getSession()
    if(!user){
      redirect("/logIn")
    }
  return (
    <SidebarProvider>
     <div className="flex w-full min-h-screen overflow-hidden">
      <div>
        <SidebarComp/>
      </div>

     <div className="w-full flex-grow flex-1 ">
      <div className="w-[80%]">
      <HeaderComp/>
      </div>
         <div className="py-[5rem]">
         {children}
         </div>
    </div>
     </div>
    </SidebarProvider>
  
  )
}
