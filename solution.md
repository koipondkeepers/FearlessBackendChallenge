## Future Changes and Updates
This application currently stores all data within a text file, which is something I'd like to change for the future. On further discussion, maybe a database would be better pending on the specs of the clients demands. I would also like to introduce the capabilities to retrieve items by id as we have unique identifiers on them.

## Implementation Details
This project currently works with Node and Express. Data storage is being written into a text file which would impact the limitations of what can really be achieved from retrieving data. In the future, I would suggest using a database on further development for this project.

Also, on landing at the route /items, if there are no items, we currently return a 404 status. I think an improved implementation would be something where we prompt or nudge the user to let them know that we currently have no items and they should add some. 