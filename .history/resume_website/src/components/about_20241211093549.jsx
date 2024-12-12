import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PERSONAL_INFO, EDUCATION_INFO, EXPERIENCE_INFO } from "../assets/constants";
import { FaBriefcase } from "react-icons/fa"


const About = () => {
  return (
    <div className="p-10 bg-white text-black">
      <h1 className="text-3xl font-bold p-5">About</h1>
      <Accordion type="multiple" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Personal</AccordionTrigger>
          <AccordionContent>
            <div>{ PERSONAL_INFO }</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Education</AccordionTrigger>
          <AccordionContent>
            <div>{ EDUCATION_INFO }</div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="">
            <div>Experience<FaBriefcase></FaBriefcase></div>
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