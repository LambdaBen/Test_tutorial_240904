# Nodit EVM Tutorials

Hello world! Welcome to the Nodit EVM Tutorials!
Tutorials are structured as follows:

1. NFT Tutorial
2. Token Tutorial

<br />

## Sign up for Nodit and Connect to EVM Chains

You can sign up for Nodit by clicking the link below. You can create a new account or sign up for Nodit using an existing Google account.

[Sign up for Nodit](https://id.lambda256.io/signup)

If you need more details about Nodit, you can get more information in Nodit Developer Portal.
[Nodit Developer Portal](https://developer.nodit.io/docs/nodit-overview)

<br />

## Set up Execution Environment

To ensure a smooth tutorial experience, you need to install the following programs.

Install Node.js

Node.js is a runtime environment that allows you to run JavaScript code, which is necessary for executing TypeScript code.

[Download Node.js](https://nodejs.org/en/download/package-manager/current)
You can verify the installation of Node.js by entering the following command in the terminal:

```
$ node -v
v20.11.0
```

<br />

## Set up modules

The modules you need to try the tutorials are listed in the package.json file in each tutorial directory. You can set up the modules using the command below:

```
$ cd nft_tutorial // or cd token_tutorial
$ npm install
```

<br />

## Managing environment variables

Each tutorial file has a .env file to manage its environment variables. You should fill in the variables to try the tutorials. An example is shown below:

```
VITE_API_KEY=Your_API_Key
VITE_PROTOCOL=ethereum
VITE_NETWORK=mainnet
```

<br />

## Execute tutorials

If you done all the steps, you can try the tutorials. using the command below:

```
$ npm run dev
```
