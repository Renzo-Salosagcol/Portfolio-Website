import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"


const About = () => {
  return (
    <div className=" bg-blue-500 p-10">
      <h1 className="text-5xl font-bold p-5">About</h1>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Personal</AccordionTrigger>
          <AccordionContent>
            Personal Text
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Education</AccordionTrigger>
          <AccordionContent>
            Education Text
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Skills</AccordionTrigger>
          <AccordionContent>
            Skills Text
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default About;