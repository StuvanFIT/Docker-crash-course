const Introduction = () => {
  return (
    <section id="intro" className="py-20">
      <div className="space-y-8 ">
        {/* What is Docker Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              What is Docker?
            </h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Docker is a virtualisation software that makes developing and deploying your applications much easier.
              How does Docker make it easier? Docker accomplishes this by packaging an application in a "Container" 
              with all the necessary dependencies, configurations, system tools, runtimes, and environment configurations-basically 
              everything the application needs to run successfully.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              The application and its running environment are both packaged in a single standardised Docker 
              package/artifact/unit that developers can easily share and distribute to other team members.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Now, why is this a big deal, and how were applications deployed before Docker was even introduced?
            </p>
          </div>
        </div>

        {/* Development Before Containers Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Development Before Containers
            </h3>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Picture this: Imagine you have a team of developers working on an application.
              Each developer needs to install and configure all services directly on their Operating System 
              (Windows, macOS, or Linux) on their local machine. These services and dependencies include 
              databases, messaging systems, caches, and more. You need all of these services to develop and test your application.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Every developer on the team needs to install all those services, configure them, and run them on their local environment.
              Depending on the OS they're using, the installation process differs for each environment.
              For example, installing PostgreSQL database on macOS is NOT the same as installing it on a Windows OS.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              These installation processes involve multiple steps and commands to set up, configure, and run, which increases the likelihood
              of something going wrong during installation. If you're a software developer, you know that setting up
              a development environment can be very tedious, especially depending on how complex your application is.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              For instance, if your TODO checklist app utilises 20 services, each developer on your team needs to install these 20 services,
              and remember-this process will differ for each team member depending on their OS. Obviously, this process becomes
              very slow and tedious.
            </p>
            
            <p className="text-gray-700 leading-relaxed font-medium">
              So... how do we solve this issue? The solution is "Containers"!
            </p>
          </div>
        </div>

        {/* What Are Containers Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              What are Containers?
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              A container is a lightweight, standalone, and executable software package that includes
              everything needed to run a piece of software, including the code, runtime, system tools,
              and libraries.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Containers are designed to isolate applications and their dependencies, ensuring that they can
              consistently run smoothly regardless of the environment. Whether the application is running on your
              local development machine or in the cloud, the application's behavior remains exactly the same.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              "Containers standardise the process of running any service on any local development environment." 
              This allows developers to focus more on development processes instead of spending time installing and configuring services on their machines.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              As a bonus, with Docker containers, you can have different versions of the same application running on your local environment
              without any conflicts. This is much more difficult to achieve when installing multiple versions of the same application directly on your OS.
            </p>
          </div>
        </div>

        {/* Virtual Machines vs Docker Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Virtual Machines vs Docker
            </h3>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Earlier, I mentioned that Docker is a virtualisation software tool. In the past, the industry standard was to use 
              Virtual Machines (VMs) to run software applications. VMs would run your application inside a guest OS, which runs on 
              hardware powered by the server's host OS. In modern software development, Docker containers are much more preferred. But why is that the case?
              First, let's look at how an OS is structured.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Operating systems have two main layers: the OS Kernel and the OS Applications Layer. The Kernel is the core part
              that communicates with hardware components like the CPU, memory, and storage, and also interacts with software components like your Word document or Google Chrome.
              The Kernel is your "middleman" that manages resources between the OS Application layer and hardware components.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              The main difference between VMs and Docker is the part of the OS they virtualise:
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Docker virtualises the OS Applications Layer. This means that when you run a Docker container, it contains the OS Application Layer of your host OS.
              On the other hand, VMs virtualise both the OS Applications Layer and OS Kernel. When you download a VM image on your host machine, it uses its own Kernel,
              not the host's kernel.
            </p>

            <p className="text-gray-700 leading-relaxed font-medium">
              So what does this difference actually mean? This tells us that:
            </p>

            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  SIZE
                </h4>
                <p className="text-gray-700 ml-5">
                  Docker images are much smaller (typically a few hundred MB to a few GB). They only need to implement one layer of the OS. 
                  Meanwhile, VM images can be 10-20 GB or more since they virtualise the entire operating system.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  SPEED
                </h4>
                <p className="text-gray-700 ml-5">
                  You can start Docker containers in seconds, much faster than VMs which take several minutes to boot up. 
                  VMs need to boot up their own kernel every time they start, while Docker containers reuse the host machine's kernel.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  COMPATIBILITY
                </h4>
                <p className="text-gray-700 ml-5">
                  You can run any VM on any OS host machine regardless of the underlying system. Docker, however, is natively compatible 
                  only with Linux distributions. For example, if a developer has a Windows OS and wants to run a Linux-based Docker image, 
                  the Linux-based Docker image cannot directly use the Windows kernel—it needs a Linux kernel to run since it has a Linux application layer.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Docker later created{" "}
              <a 
                href="https://www.docker.com/products/docker-desktop/" 
                className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Docker Desktop
              </a>
              {" "}for Windows and macOS, which enables developers to run Linux-based containers on Windows or macOS systems.
              Docker Desktop uses a hypervisor layer (software that allows multiple operating systems to run concurrently on a single physical machine) 
              with a lightweight Linux distribution on top of it to provide the needed Linux kernel, making it possible to run Linux-based containers 
              on Windows and macOS machines.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction