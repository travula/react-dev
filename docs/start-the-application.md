Getting the code to Run
=======================

# Install Nodejs

## Install NVM

- [Reference](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/)
- Install nvm
  ```
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
  ```
  
- The command in the previous step makes changes to
  `~/.bashrc`.  To load these changes in the current
  console, run the below command.
  ```
  source ~/.bashrc
  ```
  
## Install NPM

- To install the lastest LTS version of `node`, run the
  below command.

  ```
  nvm install --lts
  ```
  
- Check the version
  ```
  node -v
  ```
  
# Clone the repo

```
git clone https://github.com/travula/react-dev.git
```

# Install the node packages 
- Change directory
  ```
  cd react-dev
  ```
- Install packages
  ```
  npm install
  ```
# Start the web server
- Start the server
  ```
  npm start
  ```
