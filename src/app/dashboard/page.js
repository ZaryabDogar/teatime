import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

const Home = () => {
  const links = [
    {
      title: "Add Residents and key family members",
      route:"residents"
    },
    {
      title: "Add Care Professionals",
      route:'careworker'
    },
  ];

  return (
    <div className="text-greyText h-fit flex flex-col items-center justify-center gap-y-8 pt-12 font-medium">
      <h1 className="text-[48px] text-center">Welcome to Tea Time</h1>
      <div>
        <Image src="/images/logo.png" width={190} height={190} />
      </div>
      <p className="text-sm">Moments that matter</p>
      <ul className="flex flex-col items-start gap-y-4">
        <p className="text-sm">Lets get you started</p>
        {links.map((link, i) => (
          <li key={i}>
            <Link
              href={`/dashboard/${link.route}`}
              className="w-full flex items-center gap-x-3 text-[1.5rem] text-left"
            >
              <span className="text-sm text-black">{i+1}</span>
              <FiCheckCircle />
              <h3 className="text-sm underline">{link.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
