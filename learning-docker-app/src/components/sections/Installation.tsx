
const Installation = () => {
  return (
    <section id="install" className="py-20">
      <div className="space-y-8">
        {/* Getting Started Header */}
        <div>
          <h2 className="text-3xl mb-4 md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Installation
          </h2>
        </div>

        {/* Prerequisites Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Prerequisites
            </h3>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed font-medium">
                Before installing Docker, ensure your system meets the following requirements:
              </p>
              
              <div className="space-y-2 ml-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">64-bit operating system</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">At least 4GB of RAM (8GB recommended)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Administrator/root privileges for installation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-700">Virtualization enabled in BIOS (for Windows/macOS)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Docker Desktop Installation */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Installing Docker Desktop
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Docker Desktop is the easiest way to get started with Docker on Windows and macOS. It includes Docker Engine, 
            Docker CLI, Docker Compose, and a user-friendly GUI to manage your containers.
          </p>

          {/* Windows Installation */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3">
              <h4 className="text-white font-semibold flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                Windows Installation
              </h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">1</span>
                  <div>
                    <p className="text-gray-700">
                      Visit the{" "}
                      <a 
                        href="https://www.docker.com/products/docker-desktop/" 
                        className="text-blue-600 hover:text-blue-800 underline font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Docker Desktop download page
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">2</span>
                  <p className="text-gray-700">Click "Download for Windows" and run the installer</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">3</span>
                  <p className="text-gray-700">Follow the installation wizard (keep default settings)</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">4</span>
                  <p className="text-gray-700">Restart your computer when prompted</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">5</span>
                  <p className="text-gray-700">Launch Docker Desktop and complete the setup</p>
                </div>
              </div>
            
            </div>
          </div>

          {/* macOS Installation */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3">
              <h4 className="text-white font-semibold flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                macOS Installation
              </h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">1</span>
                  <div>
                    <p className="text-gray-700">
                      Download Docker Desktop for Mac from the{" "}
                      <a 
                        href="https://www.docker.com/products/docker-desktop/" 
                        className="text-blue-600 hover:text-blue-800 underline font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        official website
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">2</span>
                  <p className="text-gray-700">Choose the version for your Mac (Intel or Apple Silicon)</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">3</span>
                  <p className="text-gray-700">Open the .dmg file and drag Docker to your Applications folder</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">4</span>
                  <p className="text-gray-700">Launch Docker from Applications and grant necessary permissions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Linux Installation */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3">
              <h4 className="text-white font-semibold flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
                Linux Installation (Ubuntu/Debian)
              </h4>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-gray-700 mb-4">
                For Linux users, we'll install Docker Engine directly without Docker Desktop:
              </p>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <code className="text-blue-200 text-sm whitespace-pre-wrap">
{`# Update package index
sudo apt update

# Install prerequisites
sudo apt install apt-transport-https ca-certificates curl gnupg lsb-release

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Set up the stable repository
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io

# Add your user to docker group (to run without sudo)
sudo usermod -aG docker $USER

# Start and enable Docker
sudo systemctl start docker
sudo systemctl enable docker`}
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Verify Your Installation
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed">
            After installation, let's verify that Docker is working correctly on your system.
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-4">Test Docker Installation</h4>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 mb-2">1. Open your terminal/command prompt and run:</p>
                <div className="bg-gray-900 rounded-lg p-3">
                  <code className="text-blue-200">docker --version</code>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  You should see something like: <code className="bg-gray-100 px-2 py-1 rounded">Docker version 24.0.x, build xxxxx</code>
                </p>
              </div>

              <div>
                <p className="text-gray-700 mb-2">2. Run your first container:</p>
                <div className="bg-gray-900 rounded-lg p-3">
                  <code className="text-blue-200">docker run hello-world</code>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  This downloads a test image and runs it in a container. If successful, you'll see a "Hello from Docker!" message.
                </p>
              </div>

              <div>
                <p className="text-gray-700 mb-2">3. Check Docker system information:</p>
                <div className="bg-gray-900 rounded-lg p-3">
                  <code className="text-blue-200">docker info</code>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  This displays detailed information about your Docker installation and system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Installation