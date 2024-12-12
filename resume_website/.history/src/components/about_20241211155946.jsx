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
    <div className="p-10 bg-black text-white py-20">
      <h1 className="text-3xl font-bold p-5">About</h1>
      <Accordion type="multiple" collapsible className="w-full">
        <AccordionItem value="item-1" className="flex">
          <AccordionTrigger className="flex-1 justify-between"><FaUser /><div classname="text-3xl">Personal</div></AccordionTrigger>
          <AccordionContent>
            <div>{ PERSONAL_INFO }</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger><FaGraduationCap /><div>Education</div></AccordionTrigger>
          <AccordionContent>
            <div>{ EDUCATION_INFO }</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="">
            <FaBriefcase /><div>Experience</div>
          </AccordionTrigger>
          <AccordionContent>
            <div>{ EXPERIENCE_INFO }</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default About;