import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Projects = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-5">Projects</h1>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious>Previous</CarouselPrevious>
        <CarouselNext>Next</CarouselNext>
      </Carousel>
    </div>
  );
}

export default Projects;