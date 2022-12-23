# Hand of Resources

1. Objectives:

+Create and deploy a POST endpoint that creates a resource and responds created object
+Create and deploy a GET endpoint that returns an array of objects
+Create and deploy a GET endpoint that returns a single matching object based on the id in the path and req.params.id
+Create and deploy a PUT/PATCH endpoint that updates a resource with the matching id and responds the updated object
+Create and deploy a DELETE endpoint that deletes a resource with the matching id and responds the deleted object

+Add JSON deserialization middleware and use the body in a route
+Use params to simplify the extraction of “id” from a router
+Utilize Router to implement a horizontally scalable Express App architecture
+Use the pg library with $1, $2, $3 syntax to sanitize our SQL queries to prevent SQL injection.
+Use pg to make queries against a Postgres DB
+Connect to a Postgres DB using the pg node module
+Deploy an API

2. Description:
+This is an API that can create/read/update/delete five different resources. The resources are not necessarily related.
+Experimenting with different field types in PostgreSQL.

3. Acceptance Criteria:
+Five controller files exist ( one for each resource )
+Five model files exist ( one for each resource )
+Five test files exist ( one for each resource )
+Test pass and sufficiently cover making the request and validating the response
+Route paths follow RESTful conventions
+API is deployed
