import Image from "next/image";
import Link from "next/link";

const Burning = () => {
  return (
    <div className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-row m-5">
      <Image
        src={"/burningdesireTP.png"}
        alt={"burning desire"}
        width="614"
        height="1952"
      />
      <div className="flex justify-start pt-20 text-left align-middle w-full h-128">
        <div className="flex flex-col m-w-md gap-y-10">
          <h1>Hey, I’m Kurt</h1>
          <h1>
            I’m a full stack product engineer at Asurion, specializing in
            building mobile and web applications.
          </h1>
          <h1>
            Some tools I like to use are React, TypeScript, Node, and AWS.
          </h1>
          <h1>I love traveling and listening to music.</h1>
          <h1>
            This
            <span className="text-blue-500 hover:text-blue-700">
              <Link href="/space"> link </Link>
            </span>
            is under construction.
          </h1>
          <h2>Here are some photos I like:</h2>
          <div className="grid gap-4 gap-y-10 grid-cols-2">
            <Image src={"/views.JPG"} alt={"views"} width={300} height={50} />
            <Image src={"/tree.JPG"} alt={"tree"} width={300} height={50} />
            <Image src={"/cars.JPG"} alt={"cars"} width={300} height={50} />
            <Image
              src={"/flower.JPG"}
              alt={"flowers"}
              width={300}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Burning;
