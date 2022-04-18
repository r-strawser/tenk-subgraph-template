# tenk-subgraph-template
 

# Quick Start

### Prerequisites

- Yarn or Node
- Use template from [https://github.com/r-strawser/tenk-subgraph-template/tree/function-method](https://github.com/r-strawser/tenk-subgraph-template/tree/function-method)
- Move the template to your own local directory and run “yarn” to install the packages locally.

### **Creating the Graph project in The Graph dashboard**

To get started, open The Graph [dashboard](https://thegraph.com/hosted-service/dashboard) and either sign in or create a new account.

Next, click on **Add Subgraph** to create a new subgraph.

Configure your subgraph with the following properties:

- Subgraph Name - your-collection-subgraph-name

Once, you see an instance of the subgraph that says “Undeployed”, note down your Access Key seen at the top of the dashboard UI.

### Configure template package.json and subgraph.yaml files to your subgraph

**package.json**

**Required fields to replace →**

*name*: with your subgraph name created in the hosted service subgraph dashboard

*scripts.auth*: with your subgraph access key found on your hosted service dashboard

*scripts.deploy*: your GitHub user name ‘/’ your subgraph name

*scripts.<local> fields*: your GitHub user name ‘/’ your subgraph name

```json
{
  "name": "subgraph-name",
  "version": "0.0.0",
  "author": "Ryan Strawser",
  "repository": "https://github.com/r-strawser/tenk-subgraph-template.git",
  "license": "MIT",
  "scripts": {
    "codegen": "graph codegen",
    "build": "graph codegen && graph build",
    "auth": "graph auth --product=hosted-service <your-graph-access-key>",
    "deploy": "graph codegen && graph deploy <github-account/subgraph-name>",
    "create-local": "graph create --node http://localhost:8020/ <github-account/subgraph-name>",
    "remove-local": "graph remove --node http://localhost:8020/ <github-account/subgraph-name>",
    "deploy-local": "graph deploy --node http://localhost:8020/ --ipfs http://localhost:5001 <github-account/subgraph-name>"
  },
  "devDependencies": {
    "@graphprotocol/graph-cli": "^0.26.0",
    "@graphprotocol/graph-ts": "^0.24.1"
  }
}
```

**subgraph.yaml**

**Required fields to replace →**

*dataSources.name*: name of contract

*dataSources.source.account*: contract account_id to index

*dataSources.source.startBlock*: the block height to start indexing on-chain events from the account.

```yaml
specVersion: 0.0.4
repository: https://github.com/r-strawser/tenk-subgraph-template.git
schema:
  file: ./schema.graphql
features:
  - fullTextSearch
dataSources:
  - kind: near
    name: futurenft
    network: near-mainnet
    source:
      account: "futurenft.near"
      startBlock: 60461000
    mapping:
      apiVersion: 0.0.5
      language: wasm/assemblyscript
      entities:
        - Account
        - Token
        - Transfer
        - Contract
        - Mint
        - Burn
      receiptHandlers:
        - handler: handleReceipt
      file: ./src/mapping.ts
```

### Configure Mappings

The mappings file in this version of the template is ingesting receipts by checking for the methodNames of the function calls. With the onset of formalizing event standards for NEAR, this topic of ingestion methods is discussed in future work.

**mapping.ts**

Replace contract fields with nft metdata (**3 occurences in mappings**) fetched from near-api. Refer to future work for obtained from on-chain activity.

```wasm
						let contract = Contract.load("futurenft.near")
            if(!contract) {
                contract = new Contract("futurenft.near")
                contract.id = "futurenft.near"
                contract.name = "NEAR Future"
                contract.symbol = "nearfuture"
                contract.base_uri = "https://bafybeigxj7qbjear55zwzfbam42via5c7ycawfpb5lpy2qqxhnomn2lnga.ipfs.dweb.link/"
                contract.media_uri = "https://bafybeiazrw5wem27wql5wojx44yzhoezeh4frkrujdvctrxftv24km7lse.ipfs.dweb.link/"
                contract.copies = BigInt.zero();
                contract.total_minted = BigInt.zero();
                contract.total_burned = BigInt.zero();
            }
```

### Codegen, Build, Auth, and Deploy Subgraph

Run codegen and build the subgraph.

```bash
$ yarn build
```

Assign you access key to the subgraph you are going to deploy.

```bash
$ yarn auth
```

Deploy the subgraph.

```bash
$ yarn deploy
```

## Logging On-Chain Activity with The Graph

Handlers

The Graph integration with NEAR allows us to log any on-chain information aggregated through the Firehose, which is maintained by StreamingFast. The Graph currently supports on-chain activity handlers via Block or Receipt triggers. Meaning as the firehose propagates through each indexed block or receipt, a function handler is triggered within the mappings if the account matches an on-chain activity where the **receiver_id** matches the defined **account** field in the subgraph manifest. If the account field equals the receiver_id, the trigger or handler is fired.

<aside>
💡 The account field in the subgraph manifest *equals* the receiver_id of in a receipt

</aside>

# Future Work

- refactored mappings to ingest and filter NEP formatted event receipt data by the outcome logs
- time travel queries for snapshot

**Better Ingestion Methods**

We use functionCall logging in the template, but I have found that there are much better methods of logging that offer for more dynamic event support and contract upgrades. This is due to the way developers include logs in their contracts and solved with best practice and formalized event support which is happening as I mention this!

Function call logging is useful for some instances, such as fetching the result data from a called methodName. Other than that, ingesting receipts and writing mappings from outcomes logs is one of the best ways to write subgraphs. This allows the subgraph to directly search for specific events emitted from the outcome logs, rather than searching for hardcoded methods you anticipate to be called from the code. 

FAQ

Data source templates → not yet supported. Investigating with .wit files!