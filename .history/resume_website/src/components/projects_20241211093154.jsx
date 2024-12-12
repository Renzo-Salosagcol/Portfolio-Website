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
    <div>
      <h1 className="text-3xl font-bold p-5">Projects</h1>
      <div>
        <Card className="mb-4">
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
        <Card className="mb-4">
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
      </div>
    </div>
  );
}

export default Projects;