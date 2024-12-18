import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Projects = () => {
  return (
    <div id="projects" className="p-5 py-20">
      <h1 className="text-3xl font-bold p-10">Projects</h1>
      <div className="flex flex-col space-y-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Project 1</CardTitle>
            <CardDescription>Project Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Technologies: React, Node.js, Express.js, MongoDB</p>
          </CardContent>
          <CardFooter>
            <p>Project Link: <a href="https://www.example.com">https://www.example.com</a></p>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Project 2</CardTitle>
            <CardDescription>Project Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Technologies: React Native, Firebase</p>
          </CardContent>
          <CardFooter>
            <p>Project Link: <a href="https://www.example.com">https://www.example.com</a></p>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Project 3</CardTitle>
            <CardDescription>Project Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Technologies: React Native, Firebase</p>
          </CardContent>
          <CardFooter>
            <p>Project Link: <a href="https://www.example.com">https://www.example.com</a></p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Projects;