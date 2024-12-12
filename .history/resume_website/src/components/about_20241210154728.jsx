import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaBriefcase } from "react-icons/fa"
import { personalInformation, educationInformation, experienceInformation } from "../assets/constants";


const About = () => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold p-5">About</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Personsadal{ personalInformation }</AccordionTrigger>
          <AccordionContent>
            { personalInformation }
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Education</AccordionTrigger>
          <AccordionContent>
            Education Text
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <p className="inline-flex">Experience <FaBriefcase></FaBriefcase></p>
          </AccordionTrigger>
          <AccordionContent>
            Skills Text
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default About;