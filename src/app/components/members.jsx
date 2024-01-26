import Image from "next/image";
import Link from "next/link";
const Memberscomponent = () => {
  const members = [
    {
      name: "Ravi",
      image: "",
      linkedinURL: "",
    },
    {
      name: "siva",
      image: "",
      linkedinURL: "https://www.linkedin.com/in/siva-ramireddy-baram-1269261aa/",
    },
    {
      name: "nitin",
      image: "",
      linkedinURL: "",
    },
    {
      name: "naveen",
      image: "",
      linkedinURL: "",
    },
  ];

  return (
    <>
      <div id="membes" className=" h-[100vh] pt-[10vh] ">
        <p className="text-black text text-3xl"> My Team Members are ...</p>

        <div className="h-full  flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5   ">
            {members.map((m, index) => (
              <MemberCard key={index} {...m} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const MemberCard = (props) => {
  const { name, image, linkedinURL } = props;
  return (
    <div className="shadow-md border-2  rounded-md p-2">
      <Image
        className="border-b-2 w-full min-h-40"
        alt="image"
        src={image}
      ></Image>
      <div className="flex gap-5 items-center justify-center px-5 py-2 ">
        <p className="text-semibold capitalize"> {name}</p>
        <Link
          href={linkedinURL}
          className="bg-blue-500 hover:bg-blue-700  py-2 px-4 rounded-full text-white"
        >
          {" "}
          Connect{" "}
        </Link>
      </div>
    </div>
  );
};
export default Memberscomponent;
