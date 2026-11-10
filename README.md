# Node.js Learning

A collection of standalone exercises for learning Node.js, its built-in modules, HTTP servers, Express, browser storage, and MongoDB. The examples are organized by topic rather than as one installable application.

## Topics and examples

### Node.js

| Topic | Example directories |
| --- | --- |
| JavaScript basics, buffers, and events | [`node/basic`](node/basic), [`node/buffer`](node/buffer), [`node/events`](node/events) |
| File system APIs | [`node/fs_modules_syc`](node/fs_modules_syc), [`node/fs_module_async/CallbackFunction`](node/fs_module_async/CallbackFunction), [`node/fs_module_async/Promises-then_catch_finally`](node/fs_module_async/Promises-then_catch_finally), [`node/fs_module_async/streams`](node/fs_module_async/streams), [`node/promises_async_await`](node/promises_async_await) |
| Local modules and runtime utilities | [`node/localModules`](node/localModules), [`node/os_module`](node/os_module), [`node/PathModules`](node/PathModules), [`node/URL_Module`](node/URL_Module) |
| Native HTTP servers, routing, and file serving | [`node/HTTP_module`](node/HTTP_module), [`node/HTTP_File_Routers`](node/HTTP_File_Routers), [`node/HTTP_Module_fsStream`](node/HTTP_Module_fsStream), [`node/HTTP_pages_routing`](node/HTTP_pages_routing), [`node/HTTP_routing`](node/HTTP_routing) |
| Browser storage and form demos | [`node/localStorage`](node/localStorage), [`node/miniProject`](node/miniProject), [`node/Task_LocalStorage`](node/Task_LocalStorage), [`node/jsonData_miniProject`](node/jsonData_miniProject) |
| MongoDB examples and CRUD exercises | [`node/MongoDB_Operation`](node/MongoDB_Operation), [`node/nodeJS_MongoDB`](node/nodeJS_MongoDB), [`node/ServerMongoDB_Task`](node/ServerMongoDB_Task), [`node/ServerMongoDB_Task2`](node/ServerMongoDB_Task2) |

### Express

| Topic | Example directories |
| --- | --- |
| Server creation and routers | [`express/serverCreation`](express/serverCreation), [`express/serverRouter`](express/serverRouter), [`express/task`](express/task) |
| Middleware and static files | [`express/middleware/next`](express/middleware/next), [`express/middleware/static`](express/middleware/static) |
| Forms and page/file serving | [`express/UrlEnCoded`](express/UrlEnCoded), [`express/form_auth`](express/form_auth), [`express/readFiles`](express/readFiles) |
| MongoDB-backed examples | [`express/DB_connection`](express/DB_connection), [`express/Task2`](express/Task2) |

## Requirements

- Node.js and npm
- MongoDB running locally for the MongoDB examples
- A modern browser for the client-side and form exercises

There is no root `package.json` or shared install command. Each directory with its own `package.json` is an independent npm project; install its dependencies from that directory. The other examples use Node.js built-in modules and can be run directly.

## Running an example

Run commands from the example's directory. Some exercises use relative file paths, so launching them from the repository root may prevent them from finding their sample files.

For example, run a native HTTP exercise:

```powershell
cd node\HTTP_File_Routers
node app.js
```

Run an Express exercise:

```powershell
cd express\serverCreation
npm install
npm start
```

To run the URL module example, which does not need package installation:

```powershell
cd node\URL_Module
node index.js
```

For projects with dependencies, use the `start` or `dev` script defined in that project's `package.json`. Not every exercise defines a start script. The current `test` scripts are placeholders and do not run a test suite.

## MongoDB and environment configuration

The MongoDB examples generally connect to `mongodb://localhost:27017`. Start a local MongoDB instance before running them. Several projects include their own database and collection names, so inspect the example before using it with data you care about.

Some code changes or removes records. In particular, `node/nodeJS_MongoDB` currently runs a `deleteMany` operation, and `node/ServerMongoDB_Task2` exposes a delete-all endpoint. Use disposable local data only.

The `express/readFiles` example loads its port from `process.env.PORT` using `dotenv`. To run it locally, create `express/readFiles/.env` with:

```dotenv
PORT=5000
```

Environment files are ignored by Git. Do not put credentials or other secrets in committed source files.

## Notes

- These are learning exercises, not a single production application. Some are incremental or incomplete and may need adjustment before they run.
- `express/Task2/server.js` currently imports `express/Task2/routers/pageRoutes.js`, which is not present in the repository.
- `node_modules` is intentionally excluded from version control. Run `npm install` in the relevant project directory to restore dependencies; `package-lock.json` files are kept for reproducible installs.
- The examples do not share a common test or lint configuration.
