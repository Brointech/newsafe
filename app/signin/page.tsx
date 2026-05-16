"use client";

const Signin = () => {
  return (
    <section className="px-16 mt-10">
      <div className="">
        {/* logo area */}
        <div className="flex  justify-between mt-20">
          <img
            src="/safelogo.png"
            alt=""
            className="w-38 h-10 object-contain"
          />
          <div className="flex items-center gap-2">
            <p className="">Don't have an account yet?</p>
            <a href="">Create Account</a>
          </div>
        </div>

        {/* Hero section */}
        <div className="flex flex-col items-center justify-center mt-20 ">
          <img src="/b2.svg" alt="" className="w-100 h-24 object-contain" />
          <div className="mr-20 mt-6">
            <h1 className="font-bold text-black text-[24px] ">Sign In</h1>
            <p className="text-gray-600 font-medium text-[16px] mt-2">
              Hey Welcome back. Please enter your details
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
