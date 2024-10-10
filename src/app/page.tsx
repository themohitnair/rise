import Contribute from "./Contribute";
import Info from "./Info";
import Socials from "./Socials";

export default function Home() {
  const text = [
    "A notes cum resources portal for students of the Information Science and Engineering students of Ramaiah Institute of Technology, Bengaluru. This platform is unofficial and is intended to be crowdsourced by the students of the ISE branch.",    
  ]
  return (
    <div className="">
      {text.map((item, index) => (
        <div className="mt-10" key={index}>
          <Info text={item} />
        </div>
      ))}

      <Contribute/>
      <Socials/>

    </div>
  );
}
