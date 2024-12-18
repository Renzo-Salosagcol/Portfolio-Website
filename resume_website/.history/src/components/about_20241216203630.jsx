import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PERSONAL_INFO, EDUCATION_INFO, EXPERIENCE_INFO } from "../assets/constants";
import { FaBriefcase, FaUser, FaGraduationCap } from "react-icons/fa"


const About = () => {
  return (
    <div className="p-10 bg-black text-white">
      <h1 className="text-3xl font-bold p-5">About</h1>
      <Accordion type="multiple" collapsible="true" className="w-full">
        <AccordionItem value="item-1" className="">
          <AccordionTrigger className="justify-items-center"><div className="flex items-center"><FaUser /><div className="ml-2">Personal</div></div></AccordionTrigger>
          <AccordionContent>
            <div>{ PERSONAL_INFO }</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
        <AccordionTrigger className="justify-items-center"><div className="flex items-center"><FaGraduationCap /><div className="ml-2">Education</div></div></AccordionTrigger>
          <AccordionContent>
            <div>{ EDUCATION_INFO }</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
        <AccordionTrigger className="justify-items-center"><div className="flex items-center"><FaBriefcase /><div className="ml-2">Experience</div></div></AccordionTrigger>
          <AccordionContent>
            <div>{ EXPERIENCE_INFO }</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default About;