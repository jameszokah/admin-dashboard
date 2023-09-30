import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center dark:bg-[#fff] bg-[#100f31]">
      <div className="h-16 w-16 animate-pulse rounded-full">
      <Image
            width={70}
            height={32}
            src={"/images/logo/logo.png"}
            alt="Logo"
          />  
      </div>
    </div>
  );
};

export default Loader;
