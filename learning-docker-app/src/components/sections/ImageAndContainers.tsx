const ImageAndContainers = () => {
  return (
    <section id="image-and-containers" className="py-20">
      <div className="space-y-8">
        <h2 className="text-3xl mb-4 pb-2 md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Docker Images & Docker Containers
        </h2>

        <p>
          A Docker image is a standalone, executable file used to create a container. This container image contains all libraries, dependencies and files that the
          container needs to run sucessfully. Just like an application artifact file like zip, tarfile or jar file, the package or artifact we produce using Docker 
          is called a Docker image - an executable artifact.
          Unlike JAR files, docker images not only have the application source code but also the complete environment configuration (i.e. Application, services like npm, node and OS layer).
          For example, if you had a javascript application, you would need node js and npm to run your application, so in the docker image node and npm are already installed.
          You can also add environment variables, create directories and files etc.
        </p>

        <p>
          So thats a Docker image...then what is a Docker container?
        </p>

        <p>
          When developers retrieve and run the docker image on their OS, it creates a Docker container. So, a Docker container is a 
          running instance of a Docker image. 
        </p>
        <p>
          So in simple terms: A Docker Image serves as an immutable template that defines how a Docker container will be realised and created.
        </p>
        <p>
          From the same Docker Image, we can run multiple containers and is useful where you need to run multiple instances of the same application for icnreased performance for example.
        </p>

        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`#List all Docker Images
docker images

#List all containers (runnable Images)
docker ps
`}
          </code>
        </div>

        




      </div>
    </section>
  )
}

export default ImageAndContainers