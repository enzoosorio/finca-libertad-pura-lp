import { Footer } from "@/components/hero/Footer"
import { Outlet } from "react-router"

export const LayoutLanding = () => {
  return (
    <div className="flex flex-col w-full ">
      <Outlet />      
      <Footer />
    </div>
  )
}
