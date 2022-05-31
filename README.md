<div id="top"></div>

<p align="center">
 <img src="https://i.imgur.com/rSyq3MW.png" alt="Blue Oceanz Documentation"></a>
</p>

<h3 align="center">Blue Oceanz Documentation</h3>

<p align="center">
    <br />
    <a href="https://github.com/Blue-Oceanz/Blue-Oceanz/pulls">Report Bug</a>
    ·
    <a href="https://github.com/Blue-Oceanz/Blue-Oceanz/pulls">Request Feature</a>
</p>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]()
  [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/Blue-Oceanz/Blue-Oceanz/pulls)

</div>

---

<p align = "center">💡 Project description and guide to getting it up and running. </p>

## Table of Contents

- [Project Description](#project_description)
- [Built With](#built_with)
- [Getting Started](#getting_started)
  - [Prerequisites](#prerequisites)
  - [Local Development Set-up](#local_dev)
  - [Digital Ocean Swarm Deployment](#swarm_deploy)
    - [Digital Ocean Droplet](#create_droplet)
    - [Generate SSH Keys](#ssh)
    - [Add User](#add_user)
    - [Configure the Firewall](#firewall)
    - [Install NGINX](#nginx)
    - [Install Docker](#install_docker)
    - [Install Docker Compose](#docker_compose)
    - [Clone the Repository](#clone_repo)
    - [Npm Install "killed" Error](#killed)
    - [Configure Swarm Deployment](#swarm_config)
    - [Add Domain Name](#domain)
    - [Reverse Proxy](#reverse_proxy)
    - [Deploy](#deploy)
  - [Production Deployment](#prod_deploy)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Final Note](#ps)

## I. Project Description<a id = "project_description"></a>

As a career manager, you may have noticed that it is difficult to find a software solution that easily enables you to track your client's progress in the job search arena. Wouldn't it be nice to be able to see which jobs they've applied to, where they are in the application process, and all the while, have a bird's eye view of analytics and trends of the client's progress?

With Blue Oceanz, you can! This simple application blends all these needs into a sleek and usable interface to get right to the information you need. Though still in production, when completed, this application will allow the user to register as either a job seeker or a career manager. 

Job seeker features:
- Add, move, and delete jobs from their job application tracking board
- Communicate directly with the career manager via comments on a particular application
- Review and add posted jobs in the opportunities tab to their application board
- Go directly to the job posting through links in the job description

Career manager features:
- All the same features as the job seeker
- Create an organization
- Add job seekers registered on the site their organization
- Post upcoming job opportunites to the opportunities page
- Filter analytics from data on their job seeker's progess (past and present job seekers)

<p align="right">(<a href="#top">back to top</a>)</p>

## II. Built With <a id = "built_with"></a>

- [Node.js](https://nodejs.org/en/docs/)
- [React.js](https://reactjs.org/)
- [Docker](https://docs.docker.com/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [NGINX](https://docs.nginx.com/)
- [Jest](https://jestjs.io/docs/getting-started)
- [Supertest](https://www.npmjs.com/package/supertest)
- [React-Testing-Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Prettier](https://prettier.io/docs/en/options.html)

<p align="right">(<a href="#top">back to top</a>)</p>

## III. Getting Started <a id = "getting_started"></a>

The following sections are instructions to help you with:
- Getting a local copy up and running in a few commands to start developing
- How to set up and deploy to Digital Ocean droplet and configure it for deploying the application as a Docker Swarm
- How to set up and deploy Frontend to Digital Ocean and Backend to RDS with Gitlab CI/CD

<p align="right">(<a href="#top">back to top</a>)</p>

### A. Prerequisites <a id = "prerequisites"></a>

#### (1) npm
  ```sh
  npm install npm@latest -g
  ```

#### (2) Basic understanding of VIM commands
Note: I also recommend downloading the VS Code Extension (Remote SSH) to SSH into the Droplet and open your files. [Instructions here.](https://www.howtogeek.com/devops/how-to-develop-on-a-remote-ssh-server-with-visual-studio-code/)

#### (3) Docker Desktop

- [Docker Docs](https://docs.docker.com/desktop/mac/install/)

<p align="right">(<a href="#top">back to top</a>)</p>

### B. Local Development Set-up<a id = "local_dev"></a>

- Clone the project
```sh
git clone git@github.com:Blue-Oceanz/Blue-Oceanz.git
```
- Install dependencies with npm installs in each folder (root, frontend, and restapi)
```sh
npm install
```
- To spin up the docker containers for localhost
```sh
npm run buildup
```
- You can now go to localhost:3000 to see the application

- To stop the docker containers
```sh
npm run builddown
```

<p align="right">(<a href="#top">back to top</a>)</p>

### C. Digital Ocean Deployment as Docker Swarm<a id = "swarm_deploy"></a>

#### (1) Digital Ocean Droplet<a id = "create_droplet"></a>

First sign up at DigitialOcean and create a new project. You can name the project anything you want, this is just and identifier. Click on ‘Get Started with a Droplet’ and go through the following steps:

- Select Ubuntu 18.04.x (LTS) x64.
- Leave the Droplet on Standard.
- Select the $5 per month option, you can always upgrade if required.
- Skip adding block storage.
- Select a data center.
- Select additional options, I selected monitoring.
- Leave authentication on SSH and add your key, see steps below if you don’t have a key yet.
- Leave on 1 Droplet and rename it to something more memorable (optional).

Click on Create Droplet.

You should now see your droplet in the dashboard with its IP address, this is the address we’ll need to SSH into the server.

NOTE: The Digital Ocean Droplet is a blank slate Ubuntu machine. You will need to install all desire packages and configurations. For example, if you want to use NPM... you need to install it.

References:
- [Digital Ocean](https://docs.digitalocean.com/products/droplets/how-to/create/)
- [Deploying multiple dockerized apps](https://danielwachtel.com/devops/deploying-multiple-dockerized-apps-digitalocean-docker-compose-contexts)

<p align="right">(<a href="#top">back to top</a>)</p>

#### (2) Generate SSH Keys For Droplet<a id = "ssh"></a>
If you’re using Ubuntu on your local machine first check if you have an existing SSH key:
```sh
ls -l ~/.ssh/id_*.pub
```
If you don’t have any keys the output will say something along the lines of no matches found, otherwise you’ll see the file path printed to the console.

To create a new key type the following and follow the interactive instructions. Adding a password is optional.
```sh
ssh-keygen -t rsa -C "your_email@example.com"
```
You can now print the public key to your console with:
```sh
cat ~/.ssh/id_rsa.pub

# output:
ssh-rsa SOME_LONG_RANDOM_STRING_WITH_YOUR_USER_AT_THE_END
```
Add this key to your Droplet in the steps above so that you can SSH in as root.

<p align="right">(<a href="#top">back to top</a>)</p>

#### (3) Add a non-root ‘user’<a id = "add_user"></a>

Next create a non-root user to log into the server in future. First SSH into the server as root using the Droplet IP address (which you can view in your DigitalOcean dashboard):
```sh
ssh root@<droplet_ip_address>
```
If that doesn't connect you may need to run:
```sh
ssh -i ~/.ssh/<path-to-private-key> root@<droplet-ip-address>
```
Add a new user, you can name the user whatever you like:
```sh
adduser <username>
```
Verify it created the user:
```sh
id <username>
```
Grant administrative privileges to the new user by adding them to the sudo group:
```sh
usermod -aG sudo <username>
```
Switch to the new user:
```sh
su <username>
```
Make an ssh directory on droplet:
```sh
sudo mkdir ~/.ssh
```
Change directory permissions:
```sh
sudo chmod 700 ~/.ssh
```
Allow the new user to SSH into the server by copying the .ssh directory into the new user directory. Use rsync to preserve the file permissions (don’t use cp):
```sh
sudo rsync --archive --chown=<username>:<username> ~/.ssh /home/<username>
```

<p align="right">(<a href="#top">back to top</a>)</p>

#### (4) Configure the firewall<a id = "firewall"></a>
Now set up a firewall using ufw and enable SSH connections. If you run ufw app list you should see OpenSSH listed in the output which is what we’ll enable with:
```sh
ufw allow OpenSSH
```
Next enable the firewall:
```sh
ufw enable
```
Check that OpenSSH is enabled:
```sh
ufw status
# output:
Status: active
To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere 
```
Now that SSH connections are allowed we can safely log out as root and log in as our new user (who we’ve set up with SSH keys in the previous step):
```sh
exit

# output:
logout
Connection to droplet_ip_address closed.
```

```sh
ssh <username>@<droplet_ip_address>
```
If that doesn't connect you may need to run:
```sh
ssh -i ~/.ssh/<path-to-private-key> <username>@<droplet-ip-address>
```
You may also need to double check that your public key is added in the droplet, if you still can't ssh into the username:
- Login to root and then switch to the user
```sh
ssh root@<ip_addres>
su <username>
```
- Navigate to the SSH directory
```sh
cd ~/.ssh
```
- Create an authorized_keys file
```sh
touch authorized_keys
```
- open authorized_keys file in the editor
```sh
vim authorized_keys
```
- Paste in the droplet public ssh key
- Exit out of user and root
- Try to SSH into the user again
```sh
ssh <username>@<ip-address>
```

Note: once you have your domain’s DNS records set up to point at DigitalOcean’s name servers you’ll be able to SSH in with ssh deployer@yourdomain.com

<p align="right">(<a href="#top">back to top</a>)</p>

#### (5) Install & configure NGINX<a id = "nginx"></a>
NGINX will allow us to route web browser requests to our dockerized apps. To install it run:
```sh
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nginx
```
Note: we’re no longer logged in as root so we’ll need to prefix most of our commands with sudo.

Now NGINX will show up in our ufw apps list and we can enable http, https or both (full). You generally only want to enable the minimum you require, however we’ll be enabling https on our apps shortly so let’s enable Nginx Full:
```sh
sudo ufw app list
sudo ufw allow 'Nginx Full'
sudo ufw status

# output:
Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere
Nginx Full                 ALLOW       Anywhere
OpenSSH (v6)               ALLOW       Anywhere (v6)
Nginx Full (v6)            ALLOW       Anywhere (v6)
```
Tip: you can use sudo ufw status verbose to view ports and additional firewall rules.

Now let’s check that NGINX is running correctly:
```sh
systemctl status nginx

# output:
# ...
Active: active (running) since...
```
And visiting http://droplet_ip_address should display the default NGINX “Welcome to nginx!” page.

Note: You cn now use `sudo ufw status verbose` to view the ports and additional firewall roles.

Check that NGINX is running:
```sh
systemctl status nginx
```

Next edit the nginx.conf file with `sudo vim /etc/nginx/nginx.conf`  and uncomment server_names_hash_bucket_size 64;:
```sh
http {
  ...
  server_names_hash_bucket_size 64;
  # server_name_in_redirect off;
  ...
}
```
Save the file and check that there are no syntax errors:
```sh
sudo nginx -t

# output:
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```
And then restart NGINX:
```sh
sudo systemctl restart nginx
```
<p align="right">(<a href="#top">back to top</a>)</p>

#### (6) Install Docker in Droplet<a id = "install_docker"></a>

  ```sh
    sudo apt-get install \
        apt-transport-https \
        ca-certificates \
        curl \
        gnupg-agent \
        software-properties-common

    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

    sudo add-apt-repository \
        "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
        $(lsb_release -cs) \
        stable"

    sudo apt-get update

    sudo apt-get install docker-ce docker-ce-cli containerd.io
  ```

Make sure docker is installed:
  ```sh
    sudo docker -v
    # output:
    Docker version 19.03.8, build afacb8b7f0
  ```
And run the hello-world docker image as another test:
  ```sh
    sudo docker run hello-world

    # output:
    Hello from Docker!
    This message shows that your installation appears to be working correctly.
  ```

OPTIONAL: If you want to run docker commands without sudo, you can run the following commands:
  ```sh
    sudo groupadd docker

    sudo usermod -aG docker $USER

    newgrp docker

    docker run hello-world
  ```

NOTE: You may need to also download docker compose for your local machine and droplet

<p align="right">(<a href="#top">back to top</a>)</p>

#### (7) Install docker-compose<a id = "docker_compose"></a>
To use docker-compose to deploy to remote servers with the `--context` argument we need to install release 1.26.0-rc2 or later. If the latest stable version here is under 1.26.0-rc2 then follow the instructions below, otherwise you can substitute the release number in the URL to the latest stable version. [Official installation docs can be found here](https://docs.docker.com/compose/install/).
```sh
sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0-rc2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```
Then check that docker-compose is installed correctly:
```sh
docker-compose -v

# output:
docker-compose version ..., build ...
```
<p align="right">(<a href="#top">back to top</a>)</p>

#### (8) Clone the Github Repository <a id = "clone_repo"></a>
Now that you have your droplet environment set up. You'll need to clone the repository from Github down into your droplet.

Ensure you have git installed:
```sh
git --version
```
If not, you'll need to install it:
```sh
sudo apt update
sudo apt install git
git --version

#output
git version ...
```
Now you'll need to configure GitHub SSH keys on your droplet to access and clone the repository.

First generate new SSH keys on the droplet. [GitHub's instructions here.](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
Then add the public key to Github. [Github's instructions here.](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
Test your connection:
```sh
$ ssh -T git@github.com
# Attempts to ssh to GitHub
Hi username! You have successfully authenticated, but GitHub does not
provide shell access.
```

Now you can clone the repository:
```sh
git clone git@github.com:Blue-Oceanz/Blue-Oceanz.git
```

Finally, you'll need to install all the project's dependencies
```sh
#In project root folder
npm install

#In project restapi folder
npm install

#In project frontend folder
npm install
```

<p align="right">(<a href="#top">back to top</a>)</p>

#### (9) Npm Install "Killed" Error<a id = "killed"></a>
The issue is commonly caused in your droplet because you have run out of RAM. You can use a swapfile to fix this. Swap is an designated area on a hard drive where the operating system temporary stores data when it runs out of RAM.

This works on Ubuntu14.04, Ubuntu16.04 and Ubuntu18.04. These commands will create a 1GB swapfile. In your droplet console run the following:

```sh
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
sudo swapon --show
sudo cp /etc/fstab /etc/fstab.bak
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
sudo sysctl vm.swappiness=10
echo 'vm.swappiness=10' | sudo tee -a /etc/sysctl.conf
sudo sysctl vm.vfs_cache_pressure=50
echo 'vm.vfs_cache_pressure=50' | sudo tee -a /etc/sysctl.conf
```

Now run `npm install` again and it should work.

<p align="right">(<a href="#top">back to top</a>)</p>

#### (10) Prep Docker Compose For Swarm Deployment<a id = "swarm_config"></a>
In the root of your now cloned repository, open the docker-compose.yml. 

Note: I recommend using VS Code for editing - the extension comes in handy here, but VIM is great too!

Add the docker-compose version to the top of the file if it isn't there already
```sh
version: "3.8"
```
Change the frontend environment variable to the following:
```sh
- REACT_APP_BASE_API_URL=http://<droplet-ip-address>:3001
```

<p align="right">(<a href="#top">back to top</a>)</p>

#### (11) Domain Name<a id = "domain"></a>
Do you want to connect a domain name to your droplet so you don't have to type an IP address everytime you visit the link? If so...

First you need a domain if you don't already have one. You can buy one at places like these:

- [Namecheap](https://www.namecheap.com/)
- [GoDaddy](https://www.godaddy.com/domains)

Next, here is a helpful video showing you an easy way to connect it to your IP: https://www.youtube.com/watch?v=Wrxwm3ghQhY

<p align="right">(<a href="#top">back to top</a>)</p>

#### (12) Reverse Proxy w/NGINX<a id = "reverse_proxy"></a>
You will now need to ensure that your domain name is directing the user to port 3000 by adding a reverse proxy using NGINX.

Navigate to the sites-available folder in your droplet, create a new file, and open it in your editor
```sh
cd /etc/nginx/sites-available
sudo touch <newfile-name>
sudo vim <newfile-name>
```
Add the reverse proxy information
```sh
server {
  listen 80;
  server_name yourdomain.com www.yourdomain.com

  location /{
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```
Navigate to the sites-enabled file, enable it, and restart
```sh
#navigate and enable
cd /etc/nginx/sites-enabled/
sudo ln -s /etc/nginx/sites-available/blueoceanz ./

#check that it worked
ls -l
sudo nginx -t

#restart
sudo systemctl restart nginx
```

<p align="right">(<a href="#top">back to top</a>)</p>

#### (13) Deploy w/Docker Swarm<a id = "deploy"></a>
Initialize the swarm
```sh
docker swarm init --advertise-addr <droplet-ip-address> --lsiten-addr <droplet-ip-addres>
```
Deploy
```sh
docker stack deploy -c <path-to-docker-compose.yml> <app-name>
```
Check that the network and services are created and running
```sh
docker network ls
docker service ls
```
Navigate to your deployed application (http://www.blueoceanz.us/ or whatever domain you configured)

VIOLA!!!!

<p align="right">(<a href="#top">back to top</a>)</p>

#### (14) Redeploy<a id = "redeploy"></a>
The following steps show you how to manually redeploy your swarm. Please note that this is not set-up with continuous deployment yet. 

First, tear down your swarm from your droplet console
```sh
docker swarm leave --force
```
Then pull the changes down from the Github Repository
```sh
git pull origin main
```
OR
```sh
git fetch origin main
git merge origin main
```
Ensure that the docker compose file is still set up for swarm deployment:
```sh
- version: '3.8'

#frontend environment variable:
- REACT_APP_BASE_API_URL=http://<droplet-ip-address>:3001
```
Redeploy
```sh
docker stack deploy -c <path-to-docker-compose.yml> <app-name>
```

<p align="right">(<a href="#top">back to top</a>)</p>

### D. Production Deployment<a id = "prod_deploy"></a>

- It's been a bit quiet aound here lately ...

<p align="right">(<a href="#top">back to top</a>)</p>

## IV. Roadmap<a id = "roadmap"></a>

- [X] Add project documentation
- [ ] Add production deployment information to the README
- [ ] Add career manager vs student privileges
- [ ] Add ability to make an organization as a career manager
- [ ] Add ability for career manager to add students to their organization
- [ ] Give career manager the ability to see students job board and progress
- [ ] Give career manager and student the ability to comment on job posts
- [ ] Change color pallete and website design for better user experience
- [ ] Add analytics features for career manager to track student progress
- [ ] Add mobile compatibility

<p align="right">(<a href="#top">back to top</a>)</p>

## V. Contributing <a id = "contributing"></a>

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give this project a star! Thanks again!

- Fork the Project
- Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
- Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the Branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

## VI. Final Note <a id = "ps"></a>

This repo is under active development. If you have any improvements / suggestions please submit a [Pull Request](https://github.com/Blue-Oceanz/Blue-Oceanz/pulls)

<p align="right">(<a href="#top">back to top</a>)</p>

