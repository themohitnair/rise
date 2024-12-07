import Info from "./Info"
import Heading from "./Heading"

const Contribute: React.FC = () => {
    const email = "riserit@proton.me"
    
    const text = [
        "All resources and notes on this platform are intended to be crowdsourced by the students of the ISE branch.",
        <>
            You may contribute to these notes and resources by mailing links or documents to <a href={`mailto:${email}`} className="hover:text-gray-500">{email}</a>.
            While mailing material, please mention the batch (year of commencement), semester, and subject in the beginning of the mail along with your full name (to credit your contribution).
        </>,
        "Contributions can be of any type - Previous Year Question Papers, Internal Question Papers, notes (PPTs, Documents or Handwritten) for any subject in the ISE Curriculum"
    ]

    return (        
        <div className="">
            <Heading heading="Contribute"/>
            {text.map((item, key) => (
                <div key={key} className="mt-5">
                    <Info text={item}/>
                </div>
            ))}
        </div>       
    )
}

export default Contribute