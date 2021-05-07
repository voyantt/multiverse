# Multiverse

Multiverse is a local reverse-proxy server for having multiple webservers on different addresses listening to a certain port all on one machine.

## Installation

Use [git](https://git-scm.com/) download Multiverse.

```bash
git clone https://github.com/ice-devs/multiverse
```

## Configuring

### Configuring servers and addresses
Scenario: You have a webserver running on port `3000` and you want to bind it to the address `http://icedev.tk`, but you also have another server running on port `3001` that you want bound to the main IP address (ex. `87.121.54.88`).

**NOTICE:** If you want to bind a domain/subdomain you need to properly configure and point the IP of the host machine.

In that case your `.servers.json` would look like this

```js
[
    {
        "@": "icedev.tk",
        "port": 3000
    },
    {
        "@": "87.121.54.88",
        "port": 3001
    }
]
```

### Custom errors
You can edit the error pages at `data/html.json`.

## Running
### Step 1: Installing dependencies
You will need NPM to install the required dependencies.

```bash
npm install
```

### Step 2: Starting server

#### **RECOMMENDED:** Running with PM2  

Installing PM2
```bash
sudo npm install pm2 -g
```
Starting Multiverse with PM2 (you must be in the root directory of Multiverse)
```bash
pm2 start multiverse.js
```

#### Running with vanilla node
To start Multiverse with Node you must be in the root directory of Multiverse.
```bash
node .
```
or
```bash
node multiverse.js
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
