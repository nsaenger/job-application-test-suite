
# Job Application Test Suite

This tests basic skills in loading data from a "server", handling errors and displaying the
received data as a somewhat nice looking list / table. 

If you are finished with all tasks, just create a pull request and we will look into your changes.

## Tasks

### Fetching data
Inside the core.module exists a data.service.js. Jour job is to write the code to pull data from the
specified "dataUrl" (/assets/wood-data.json), do some sanity checks and handle errors. After that the
result should be resolved as a promise.

The promised data is then handled by the application.component and delivered via one-way binding to
another component called data-viewer.component. This step is already handled and must not be implemented.

### Displaying data
The last task is to display the data in a somewhat pleasant to look at format. Angular Material is available
in this repository. Other libraries may be used.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
