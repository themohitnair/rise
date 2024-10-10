import Contribute from "./Contribute";
import Info from "./Info";
import Socials from "./Socials";
import Welcome from "./Welcome";

export default function Home() {
  const text = [
    "A notes cum resources portal for students of the Information Science and Engineering students of Ramaiah Institute of Technology, Bengaluru. This platform is unofficial and is intended to be crowdsourced by the students of the ISE branch.",    
  ]
  return (    
    <div className="w-4/5 xl:w-4/5 lg:w-4/5 sm:w-5/6 xs:w-6/7 m-auto">
      <Welcome/>
      {text.map((item, index) => (
        <div className="mt-6 text-center" key={index}>
          <Info text={item} />
        </div>
      ))}

      <Contribute/>
      <Socials/>

    </div>
  );
}
