# PRISMA BUG REPO

[https://github.com/prisma/prisma/issues/24252](https://github.com/prisma/prisma/issues/24252)

### Bug description

if a boolean field has true, false and nulls values, the query for not true values does not take in count nulls values.

    const countNotTrue = await prisma.test.count({where: {bol: {not: true}}})


### How to reproduce

```bash
git clone https://github.com/cesarve77/prisma-not-true-query
npm i
npx jest
```


### Expected behavior

a query
```
{where: {bol: {not: true}}
```
should return false + null values


### Prisma information

[in the repo](https://github.com/cesarve77/prisma-not-true-query)

### Environment & setup

- OS: macOS 14.4.1 (23E224)
- Database: SQLite
- Node.js version: v20.13.1



### Prisma Version

```
prisma                  : 5.14.0
@prisma/client          : 5.14.0
Computed binaryTarget   : darwin-arm64
Operating System        : darwin
Architecture            : arm64
Node.js                 : v20.13.1
Query Engine (Node-API) : libquery-engine e9771e62de70f79a5e1c604a2d7c8e2a0a874b48 (at node_modules/@prisma/engines/libquery_engine-darwin-arm64.dylib.node)
Schema Engine           : schema-engine-cli e9771e62de70f79a5e1c604a2d7c8e2a0a874b48 (at node_modules/@prisma/engines/schema-engine-darwin-arm64)
Schema Wasm             : @prisma/prisma-schema-wasm 5.14.0-25.e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
Default Engines Hash    : e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
Studio                  : 0.500.0
```
