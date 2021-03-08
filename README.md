## Initial configuration for nodejs project with typescript

```properties
yarn init -y
```
```properties
yarn add --dev typescript @types/node ts-node nodemon tsconfig-paths
```
@types/node: type definitions for Node.js

ts-node: run TypeScript code without need to compile.

nodemon: observe the changes and restart automatically.

tsconfig-paths: Use this to load modules whose location is specified in the paths section of tsconfig.json.

### TypeScript Configuration
```properties
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "build",
    "rootDir": "./",
    "baseUrl": "./",
    "paths": {
      "*": ["*", "build/*"]
    }
  }
}
```



