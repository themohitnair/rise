import Info from "./Info"
import Heading from "./Heading"
import { Button } from "@/components/ui/button"

const Contribute: React.FC = () => {
    
    const text = [
        "You may contribute to these notes and resources  by mailing links or documents to rubyrust060504@gmail.com. While mailing material, please mention the batch (year of commencement), semester, and subject in the beginning of the mail along with your full name (to credit your contribution).",
        "For Example: 2022 3rd OS - Which refers to the 2022 batch 3rd Semester (ISE) Operating Systems subject.",
        "Contributions can be of any type. They could be Previous Year Question Papers, Internal Question Papers, notes (PPTs, Documents or Handwritten) for any subject."
    ]
    return (        
        <div className="font-fira">
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