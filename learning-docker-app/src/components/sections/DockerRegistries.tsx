const DockerRegistries = () => {
  return (
    <section id="registries" className="py-20">
      <div className="space-y-8">
        <h2 className="text-3xl mb-4 pb-2 md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Docker Registries
        </h2>

        <p>
          Ok so at this point, we know that we get containers by running images. So where do we get Docker images from? So if I wanted to run a postgre-sql container, where do I get this postgre-sql docker image?
          This is where Docker Registries come in!
        </p>
        <p>
          Docker Registries act as a storage and distribution system for Docker Images. You can find readily available Docker Images online already.
          Most of the time, the popular applications like MongoDB, Postgres or Redis have already published their official Docker Images. These official images
          are maintained and developed by software authors or in collaboration with the Docker community.
        </p>
        <p>
          They way Docker official images work is that there is a dedicated team responsible for reviewing and publishing all content in the Docker Official Images repositories. They
          work together with other software maintainers, security experts or even a normal developer since it takes place openly on 
          Github.
        </p>

        <p>
          If you click this link here: <a href="https://www.docker.com/products/docker-hub/" target="_blank" rel="noopener noreferrer" className="font-bold underline text-blue-500">Explore Docker Hub</a>
          , you will have access to one of the biggest Docker Registry, called "Docker Hub" and should be your main tool for retrieving docker images.
          Have a look at the official images of companies or verified publishers: <a href="https://hub.docker.com/search?badges=official" target="_blank" rel="noopener noreferrer" className="font-bold underline text-blue-500">Docker Hub Official Images</a>
        </p>

        <h3 className="text-xl mb-4 pb-2 md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Public Docker Registries
        </h3>

        <p>
          Public Registries are for public usage and open-source projects. Docker Hub is a good example of a public registry. You can browse a list of public Docker images, and also store and view private Docker images.
        </p>

        <h3 className="text-xl mb-4 pb-2 md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Private Docker Registries
        </h3>

        <p>
          Private registries are where access to Docker images are restricted to authenticated users. All big cloud providers offer private registries such as
          Amazon ECR, Google Container Registry etc.
        </p>



        <h3 className="text-xl mb-4 pb-2 md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Docker Image Versions
        </h3>

        <p>
          We know that technology evolves and many updates occur. So, if tools get updated, how would that affect Docker Images?
          For example: we have many versions of Redis like 6.0.17 or 7.0.2 etc.
          In this case, a new Docker Image is created for each version. So docker images have an allocated version as well. On many docker registries, they would provide
          a history of previous versions you can specifically use. If you do not specific a version, you automatically get the latest version.
        </p>

        <h2 className="text-3xl mb-4 pb-2 md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Docker Image Pull
        </h2>
        <p>
          Ok, I want to use retrieve this docker image and start a container but I don't know how?
          <br/><br/>
          1. First, we will locate the official image on the docker registry. I will select the official image nginx (easier to show that its working since it has UI).
          <br/><br/>
          2. Look under the supported tags and respected Dockerfile links section. Select a specific version of the docker image (using a specific version is best practice in most cases).
          In this example, I will select the nginx version 1.23. If you do not specify a version, it would automatically pull the latest version or latest tag.
          <br/><br/>
          3. Pull the image from the registry.The docker client will contact docker hub registry and request for the nginx version 1.23 and download it locally.
          Note that Docker Hub registry (or docker.io) is used by default to search for official images.
          <br/><br/>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# docker pull {name}:{tag}
docker pull nginx:1.23

#Then type:
docker images

You should see the REPOSITORY, TAG, IMAGE ID, CREATED and SIZE.
`}
            </code>
          </div>
        </p>

        <h2 className="text-3xl mb-4 pb-2 md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Docker Image Run
        </h2>
        <p>
          So we have multiple docker images with their respected versions. Now, how do we run them as docker containers?
          We use a docker run command.
          <br/><br/>

          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# docker run {name}:{tag} = creates a container from a given image and starts it.
docker run nginx:1.23

# if you want to only create the container without starting it, do this:
docker create some-image

#In this example:
docker create nginx:1.23

#Then, you need to manually start the container
docker start myapp
`}
            </code>
          </div>
          <br/>
          Then check all runnable containers by inputting:
          <br/><br/>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`docker ps
`}
            </code>
          </div>
          <br/>
          But isn't it kind of annoying that the running container logs, blocks and clogs the terminal? Well, instead of opening a new terminal to continue executing commands,
          we can use the -d flag.
          <br/><br/>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`#-d or --detach = runs the container in the background and prints the container ID
docker run -d nginx:1.23

#If you wanted to rename the container:
docker run --name my-web-app -d nginx:1.23

#If you stil wanted to view the logs from service running inside the container, use this:
docker logs {CONTAINER ID}
`}
            </code>
          </div>

          <br/>
          NOTE: You do not need to have the docker image installed locally on your machine to run the docker image. So, we can skip the docker pull step.
          Instead, we can directly execute the docker run command as long as the docker image and version tag exists on the docker registry.
          If it doesnt find the selected docker image locally, it will search through docker hub by default and pull the image automatically.
          <br/><br/>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`Try this:
docker run nginx:1.22-alpine
`}
            </code>
          </div>
        </p>

        <h2 className="text-3xl mb-4 pb-2 md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Accessing Docker Containers via Port Binding
        </h2>

        <p>
          The Application inside the container runs in an isolated Docker network. So, we cannot access the application from a local computer browser.
          We first need to expose the container port to the host machine (the machine the container runs on). To do this, we will complete a Port Binding.
        </p>
        <p>
          Port Binding binds the container's port to the host's port to make the service available to the outside environment.
          For example: nginx has a default container port 80. If we try to access localhost:80 on our browser, it will not work.
          So we tell docker client to bind the container port 80 to a local host port number (i.e 3000, 8080 or anything else).
        </p>

          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# -p or --publish = publish a container's port to the host
# docker run -d -p {HOST_PORT}:{CONTAINER_PORT}

docker run -d -p 9000:80 nginx:1.23 #try accessing localhost:9000

#Usually, it is best or standard practice to make the HOST_PORT === CONTAINER_PORT
docker run -d -p 80:80 nginx:1.23
`}
            </code>
          </div>

        <h2 className="text-3xl mb-4 pb-2 md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Start and Stop Containers
        </h2>

        <p>
          Everytime we execute the "docker run" command, we create a new container and we do not re-use the previous container.
          If you have executed docker run command several times, this means that you have actually created many containers on your
          local machine!
        </p>
        <p>
          Wait...When I run "docker ps", I only see the running containers and not the ones I've stopped? Instead, if you add a specific -a
          flag, you can view the all containers (stopped and running):
        </p>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# -a or -all = list all containers (stopped and running)

docker ps -a
`}
            </code>
        </div>
        
        <p>
          If you wanted to revive or restart an existing stopped container, you can do this:
          <br/><br/>
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`docker start {CONTAINER_ID}

#Or you can use container names

docker start {CONTAINER_NAME}

#You can start/stop containers in one line

docker stop {CONTAINER A ID} {CONTAINER B NAME} {CONTAINER C ID}...
`}
            </code>
        </div> 
        </p>
      </div>
    </section>
  )
}

export default DockerRegistries;