### What is Docker?
-Virtualisation software
-Makes deploying applications easier
-Packages applications and dependenices are packaged into a container

Each developer on their machines will need to install all the dependencies of the App in order to test.
However, we know that some developers have different OS like Windows, MACOS or Linux.
EG: Installing dependencies on a windows is not the samea as Linux.

-Containers solve these issues. You dont need to install these services directly.
-You have these packages installed in one single environment, packaged with its own configurations inside the container
-You can run the container via a single docker command that is the same across all OS and services


  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview --port 3000"
  },

Since vites default host serve is 4173, oif u wanna change the default port, we need to specify it in "preview" with --port 