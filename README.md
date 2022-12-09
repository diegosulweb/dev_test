# Binary Vision Dev Test

This exercise forms part of our interview process. It's a way for you to show
your skills as a developer and ability to work with an existing code base.

## Test

The test consists of a simple react app that should display the exoplanets
discovered by TESS in 2022.  
The data source for this can be found at https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json

We want this data to be pulled in and displayed.  
This can be a table or any other way you think is approriate.

The main pieces of info we want to see is:  
Planet Name: `pl_name`  
Release date: `releasedate`  
Planet radius (earth units): `pl_rade`

The data should be sorted by `releasedate`

This can be displayed on the home page below the existing text or on a new page,
up to you. Something that fits in line with existing styling, but do also include some 'niceties' that you feel fits in with the general look and feel.

## Running

To run this app you will need `nodejs` and `yarn`.  
Run `yarn` in this folder to install the dependencies and `yarn start` to start the app.

## Solution

By looking at the biref and the data returned from the API I decided to give emphasis to the data, with several interactive elements, so the user can decide how to use the data on the screen.

I have implemented:

- Dynamic sortable table table
  - Each of the column can be sorted in ascending / descending order
  - Responsive design
- Optional Filter
  - By clicking on the serch bar the list of planets is filtered based on the planet name and the user input
  - When closing the search the table goes back to full data
  - In case the search doesn't produce any data a message is rendered to guide the user
- ToolTip
  - I've build a reusable component for consistency in case the application needs to be expanded
- Modal with additional info
  - By clicking on any row of the table a modal is rendered on the screen with some additional info on the planet
  - The modal can be dismissed by clicking on the 'Back' button or an empty space on the page

Testing:

- I have completed unit Testing on Chrome, Safari, Mobile and Tablet
- The testing highlighted the fact that when closing the search bar the table was not going back to the full data. I have fixed it by updating the function to handle the click.

Side Notes:

- For the Stilying I've used mainly scss with some bootstrap when needed. Some of the components I've build, such as the tooltip could have been integrated easily with bootstrap or a similar package, but I wanted to showcase some different skills
- I've used the native fetch to call the API, but on a larger scale application I'd opt for Axios
- I'm aware that the Table component is slightly longer than it should be, in a larger application I would have probably make it reusable by including props
- When running the application in dev, there is an autoprefixer warning that should be related to the version of bootstrap. The only version of bootstrap that wouldn't present the warning is a beta and I didn't rink installing it.
