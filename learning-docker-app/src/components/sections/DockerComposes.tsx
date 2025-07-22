import { ImageWithSkeleton } from "../../utils/ImageWithSkeleton";

const DockerCompose = () => {

    return (
        <section className="py-20">
            <div className="space-y-8">
                <h2 className="text-3xl mb-4 pb-2 md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                 What is Docker Compose?
                </h2>

                <p>
                    Nowadays, applications are composed of many different parts: you can have frontend, backend, databases, auth services and APIs.
                    In this application you can have a microservice application which is a service that is broken down into micro-applications or micro-services.
                    Since these containers/services have dependencies, they must be run together annd communivate with each other! So, Docker compose allows you to
                    define and run multiple services in one environment -- "defining and running multi-container Docker applications".
                </p>


                <h3 className="text-xl mb-4 pb-2 md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Docker without Compose
                </h3>

                <p>
                    Inputting single commands can be really long and tedious in Docker. Take the below as an example. This is an example where we create
                    a simple container for a software application.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`#Docker Network =  allows containers to communicate with each other and with the external world.

docker network create mongo-network

#List all available networks
docker network ls

#Run our containers: Mongo and Mongo Express
docker run -d \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=supersecret \
--network mongo-network \
--name mongodbn \
mongo

docker run -d \
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=supersecret \
-e ME_CONFIG_MONGODB_SERVER=mongodb \
--network mongo-network \
--name mongo-express \
mongo-express

#Check if containers are running:
docker logs #need to find the credentials for mongo
docker ps
`}
                    </code>
                </div>


                <p>
                    As the complexity of the docker environment and application continues, so does the amount of docker flags and conditions developers have to use
                    for a working containerisation setup. Imagine we had 10 different services that needed to work together to successfully run the application.
                    This would mean that we would need to setup 10 different containers using plain simple docker commands. What happends if you want to stop/start a container?
                    What if you want to make updates to containers? It just becomes tedious at this point.
                </p>
                <p>
                    So we want an easier way to stop, start, configure and run containers...That is where docker compose comes in!
                </p>
                <h3 className="text-xl mb-4 pb-2 md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Docker Compose
                </h3>

                <p>
                    Docker compose makes running multiple docker containers with all their complicated configurations and envrionmental variables, easier.
                    Docker Compose becomes extremely valuable when dealing with container dependencies and multi-container environments.
                </p>

                <p>
                    With Docker compose, you have a YAML file to configure and maintain your application's services. With a single command, you create and 
                    start all the services from your configuration
                    Docker Compose is a method to create reproducible Docker containers using a config yaml file instead of an extremely long
                    Docker commands. By using config files, developers are less likely to make mistakes, allow for easier troubleshooting and container
                    commands are easier to define.
                   
                </p>
                <p>
                    The config file structure of a docker compose is called <a href="https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started" target="_blank" rel="noopener noreferrer" className="underline font-bold text-blue-500">YAML</a>.
                    YAML structure is very similar to JSON and is a machine-readable language. Its one of the benefits where YAML focuses on being as human-readable 
                    as possible, whilst allowing structured functionality. However, there are tonnes of "formatting" or indent issues you got to get used to, but there
                    are VSCODE extensions for that.
                </p>
                <h3 className="text-xl mb-4 pb-2 md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    From Docker commands to Docker compose
                </h3>

                <p>
                    Note: do not push the user name and password to a remote repository. Try using variables for sensitive values in your compose file.
                </p>

                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# mongo-services.yaml
version: '3'
services:
  mongodb:
    image: mongo
    ports:
      - 27017:27017
    environment:
        MONGO_INITDB_ROOT_USERNAME: \${MONGO_ADMIN_USER}
        MONGO_INITDB_ROOT_PASSWORD:\${MONGO_ADMIN_PASS}
  mongo-express:
    image: mongo-express
    ports:
      - 8081:8081
    environment:
        ME_CONFIG_MONGODB_ADMINUSERNAME:\${MONGO_ADMIN_USER}
        ME_CONFIG_MONGODB_ADMINPASSWORD:\${MONGO_ADMIN_PASS}
        ME_CONFIG_MONGODB_SERVER=mongodb
    depends_on:
      - "mongodb"
`}
                    </code>
                </div>



                <h3 className="text-xl mb-4 pb-2 md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Docker Compose Run
                </h3>

                <p>
                    To run the docker compose file:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# f = file name of compose yaml file
# up = go through every service and start/configure them.

docker-compose -f mongo-services.yaml up

#Look at the containers:
docker ps

`}
                    </code>
                </div>

                <div className="flex items-center justify-center mb-12">
                    <ImageWithSkeleton
                        src="/docker-compose-start-containers.png"
                        alt="Docker Compose - run docker images"
                    />
                </div>

                <p>
                    Notice that when you execute the docker-compose command, the Compose "up" aggregates the output of each container and is all mixed up,
                    as we are starting both containers at the same time.
                    However, there are some services that depend on each other. For example, Mongo express depends on mongo in order to establish a connection. If
                    MongoDb is not up and running before Mongo Express, then the application will fail with an error as it is not able to connect to MongoDB.
                    We can use the depends_on field for this:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`depends_on:
    - "mongodb"
`}
                    </code>
                </div>
                <p>
                    Now how do we stop and start these containers?
                </p>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# stop = stops containers
docker-compose -f mongo-services.yaml stop

#start = start containers
docker-compose -f mongo-services.yaml start

# down = stops containers and removes containers, networks, volumes and images created by up. This clears and cleans up the network.
docker-compose -f mongo-services.yaml down
`}
                    </code>
                </div>

                <h3 className="text-xl mb-4 pb-2 md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Docker Compose Run: with our own javascript & mongoDB application
                </h3>
                <p>
                    Here is the following source code for this section:
                    <a
                        href="https://github.com/StuvanFIT/Docker-Made-Simple"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-blue-500 underline"
                    
                    >
                        Javascript & MongoDB App
                    </a>
                </p>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`version: '3'
services:
  my-app:
    build: .                        # Build from local Dockerfile in this directory
    ports:
      - "3000:3000"
    environment:
      MONGO_DB_USERNAME: \${MONGO_ADMIN_USER}
      MONGO_DB_PWD: \${MONGO_ADMIN_PASS}

  mongodb:
    image: mongo
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: \${MONGO_ADMIN_USER}
      MONGO_INITDB_ROOT_PASSWORD: \${MONGO_ADMIN_PASS}

  mongo-express:
    image: mongo-express
    ports:
      - "8081:8081"
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: \${MONGO_ADMIN_USER}
      ME_CONFIG_MONGODB_ADMINPASSWORD: \${MONGO_ADMIN_PASS}
      ME_CONFIG_MONGODB_SERVER: mongodb
    depends_on:
      - mongodb`}
                    </code>
                </div>

                <p>
                    Then start up the docker-compose using "up":
                </p>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# f = file name of compose yaml file
# up = go through every service and start/configure them.

docker-compose -f mongo-services.yaml up

#Look at the containers:
docker ps

`}
                    </code>
                </div>
            

                <p>
                    The build points to where the Dockerfile is and where the entire build context is. Since we are listening on port 3000, the ports should be 3000 in the compose.
                    Note that it does not depend on the mongo yet. It only connects to the database when the front end script (await fetch('http://localhost:3000.....')) gets executed.
                </p>
                <p>
                    We can observe that the project names is based on the current directory name here but can be very messi if you are have long or detailed directory names! (football fan here...).
                    We can overide the name by:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`docker-compose --project-name projects -f mongo-services.yaml up -d
`}
                    </code>
                </div>
                <br/><br/>

                <h3 className="text-xl mb-4 pb-2 md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Reference Image from private repository
                </h3>
                <p>
                    Ok so we have our javascript, mongodb and mongo express application containers up and runnning on our local testing environment. However, as discussed previously,
                    we want our custom docker images to be stored centrally in a docker repository so we can start and deploy it on the end environment.
                    So, we need to build an image and push it to a private docker repository. But how do we reference the docker image in our docker compose?
                </p>
                <p>
                    The Solution:
                </p>
                <p className="font-bold">
                    Copy the docker compose on the server and run the docker compose and it will go through all the services and pull all the docker images defined there and run them
                    as containers with their configurations. Docker images like mongo and mongo express are pulled from public repositories and custom docker images
                    are pulled from the private respositories.
                </p>
                <p>This section requires you to have setup a dockerhub account and set up a repository. Steps on how to do this are found here <a href="https://docs.docker.com/docker-hub/repos/create/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-blue-500"> How to create your own Docker hub private repository!</a>
                {" "}In this example, my repository name is called "my-app".
                </p>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`#1. Build your custom application docker image. You can find your user name on dockerhub personal account details if you forgot!
#The path tells dockerhub which repository to push to!

docker build -t your-docker-hub-username/my-app:1.0

#2. Check your docker image

docker images

#3. Login into docker

docker login

#4. Push docker image into private repository

docker push your-docker-hub-username/my-app:1.0

#5. Refresh the dockerhub page to see your docker image!

`}
                    </code>
                </div>

                <p>
                    OK,so we successfully pushed our docker image into the private repository. Now how do we reference it?
                    Going back to our mongo-service.yaml or docker-compose file, we can see that we do not need to "build"
                    it locally. The "build" is convenient for testing stages and for local environments. However, for an end environment, 
                    we need define a docker image that comes from a repository.
                </p>

                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`version: '3'
services:
  my-app:
    image: docker-hub-user/image-name:image-tag  
    ports:
      - "3000:3000"
    environment:
      MONGO_DB_USERNAME: \${MONGO_ADMIN_USER}
      MONGO_DB_PWD: \${MONGO_ADMIN_PASS}

  mongodb:
    image: mongo
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: \${MONGO_ADMIN_USER}
      MONGO_INITDB_ROOT_PASSWORD: \${MONGO_ADMIN_PASS}

  mongo-express:
    image: mongo-express
    ports:
      - "8081:8081"
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: \${MONGO_ADMIN_USER}
      ME_CONFIG_MONGODB_ADMINPASSWORD: \${MONGO_ADMIN_PASS}
      ME_CONFIG_MONGODB_SERVER: mongodb
    depends_on:
      - mongodb`}
                    </code>
                </div>
                <p>
                    In our example, we will have:
                </p>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`version: '3'
services:
  my-app:                
    image: docker-hub-user/my-app:1.0  
    ports:
      - "3000:3000"
    environment:
      MONGO_DB_USERNAME: \${MONGO_ADMIN_USER}
      MONGO_DB_PWD: \${MONGO_ADMIN_PASS}
..................
.......
......

#Stop all containers, Start all containers, show containers
docker-compose -f mongo-services.yaml -p projects stop
docker-compose -f mongo-services.yaml -p projects up
docker ps
`}
                    </code>
                </div>



            
            </div>
        </section>

    )
}

export default DockerCompose;