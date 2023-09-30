import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yamazon Dashboard",
  description: "A multi purpose Dashboard",
  appleWebApp: true,
  
  // other metadata
};

export default function Home() {
  return (
    <>
      <ECommerce />
    </>
  );
}
