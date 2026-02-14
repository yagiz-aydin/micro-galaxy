# MyMfeProject - Galactic Federation

This project is a Micro Frontend (MFE) architecture built with Angular and Native Federation, simulating a "Mission Control" dashboard for planetary outposts.

## 1. Installation

To install the dependencies, run:

```bash
npm install
```

## 2. Running the Project

You can run the entire federation (Shell + all Remotes) using:

```bash
npm start
# or
npm run serve:all
```

### Application Ports

| Project     | Type   | Port   | Description                            |
| :---------- | :----- | :----- | :------------------------------------- |
| **Shell**   | Host   | `4200` | The main application (Mission Control) |
| **Mercure** | Remote | `4201` | Mercury outpost                        |
| **Venus**   | Remote | `4202` | Venus outpost                          |
| **Terra**   | Remote | `4203` | Earth landing pad                      |
| **Mars**    | Remote | `4204` | Mars outpost                           |
| **Profile** | Remote | `4205` | User profile module                    |

Once running, navigate to `http://localhost:4200/` to view the application.

## 3. Shell Proxy & Data Injection

### API Proxy

The Shell application is configured to proxy API requests to a backend server.

- **Config**: `projects/shell/proxy.conf.json`
- **Behavior**: Requests to `/api` are forwarded to `http://localhost:3000`.

```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "logLevel": "debug"
  }
}
```

### Data Injection

The Shell application acts as the "Smart" container, fetching data and injecting it into the "Dumb" remote components.

1.  **Data Fetching**: `MissionService` in the Shell generates/fetches stats for each planet.
2.  **Injection**: The `HomeComponent` in the Shell loads remote components using `loadRemoteModule` and binds the data using the `inputs` property of the `*ngComponentOutlet` directive.

**Shell (`home.component.html`):**

```html
<ng-container *ngComponentOutlet="mercureComp(); inputs: { stats: stats.mercure }"></ng-container>
```

**Remote (`mercure/.../app.ts`):**
The remote component receives this data as a standard Angular Input.

## Development server

To start a local development server for a specific project, run:

```bash
ng serve shell # or 'terra', 'mars', etc.
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```
