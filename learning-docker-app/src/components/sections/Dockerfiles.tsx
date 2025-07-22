const Dockerfiles = () => {
  return (
    <section className="py-20">
      <div className="space-y-8">

        <h2 className="text-3xl mb-4 pb-2 md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Dockerfile
        </h2>

        <p>
          A Dockerfile is a text file containing a set of instructions on how to create your application Docker Image.
          It essentially is a blueprint for building the docker image and specifies what base image to use, commands to execute and 
          what/where files are stored. In the example below, we have a node js application and we want to create a dockerfile that
          gives instructions on how to create a docker image.
          Each instruction in the Dockerfile creates one layer and these layers are stacked and each one of them is a delta of changes from the previous layer.
        </p>

        <h3 className="text-xl mb-4 pb-2 md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Structure of Dockerfile
        </h3>

        <p>
          1. Dockerfiles start from a parent image or "base image". It's a Docker image that your image is based on.
          You choose the base image, depending on which tools you need to have available. For a Javascript application, we would need
          a "node base image". We define the base image using the Docker director, "FROM". Dockerfiles must begin with a FROM instruction
          and we tell docker to build this image from the specified base image.
        </p>

        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# FROM {BASE_IMAGE_NAME}:{VERSION_TAG}

FROM node:19-alpine

#By doing this first, we will ensure that we will have npm and node tools readily installed.
`}
          </code>
        </div>

        <p>
          2. We need to install dependencies inside the container and the node_modules folder before the application starts.
        </p>

        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# FROM {BASE_IMAGE_NAME}:{VERSION_TAG}

FROM node:19-alpine

RUN npm install
`}
          </code>
        </div>

        <p>
          3. Hang on! Doesn't npm install rely on the package.json file to install our dependencies? Yes! So we need to COPY application files from the host
          into the container. COPY is used to copy files or directories from "src" and adds them to the filesystem of the container at the path "dest".
          While RUN is executed in the container, COPY is executed on the HOST.
        </p>

        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# FROM {BASE_IMAGE_NAME}:{VERSION_TAG}

FROM node:19-alpine

#COPY <src> on our machine <dest> in the container

COPY package.json /app/
COPY src /app/

RUN npm install
`}
          </code>
        </div>

        <p>
          4. In basic linux, we can change directories using the "cd" command. In this example, we will do the same thing by using the WORKDIR.
          It sets the default working directory for all following commands.
        </p>

        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# FROM {BASE_IMAGE_NAME}:{VERSION_TAG}

FROM node:19-alpine

#COPY <src> on our machine <dest> in the container

COPY package.json /app/
COPY src /app/

WORKDIR /app

RUN npm install
`}
          </code>
        </div>

        <p>
          5. To start the Docker container application, we need a CMD command. In our example, to start the javascript application we would normally write
          "node server.js" where server.js is the file we want to execute. 
        </p>

        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# FROM {BASE_IMAGE_NAME}:{VERSION_TAG}

FROM node:19-alpine

#COPY <src> on our machine <dest> in the container

COPY package.json /app/
COPY src /app/

WORKDIR /app

RUN npm install

CMD ["node", "server.js"]
`}
          </code>
        </div>


        <h3 className="text-xl mb-4 pb-2 md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Docker Build
        </h3>

        <p>
          Ok, so now we want actually build the docker image and execute the dockerfile instructions. We do this by:
        </p>


        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# -t or --tag = sets a name and optionally a tag in the name:tag format.
#The last parameter of the command is the location of the Dockerfile. We are telling Docker to build a image with this name and tag, in the location of the dockerfile.

#If your Dockerfile is in the current directory:
docker build -t node-app:1.0 .

#If your Dockerfile is in the /test directory:
docker build -t node-app:1.0 ./test

#You should see the application docker image
docker images

#Create a Docker container by running the Docker image
docker run -d -p 3000:3000 node-app:1.0 

#You should see the application docker container running and on the localhost:3000
docker ps
`}

          </code>
        </div>



      </div>
    </section>
  )
}

export default Dockerfiles