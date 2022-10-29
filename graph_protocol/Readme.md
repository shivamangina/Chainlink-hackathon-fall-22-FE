Commands

1. Create Subgraph

```
$ graph init --contract-name Goku --index-events --product subgraph-studio --from-contract 0xABCEC3684E4b606c1E66d80c6a3d70dAeFdbF215 --network goerli --protocol ethereum

```

```

graph codegen
graph auth --studio // Here it will ask you deploy key, you can get it from graph dashboard
graph deploy --studio {GRAPH_SLUG}

```
