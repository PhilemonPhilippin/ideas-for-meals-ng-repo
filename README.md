# Ideas For Meals

#### Video Demo: https://youtu.be/MYF9tPLBz7g

#### Description:

My project is called Ideas for Meals, and the goal is to randomly generate meal ideas and ask the AI for a recipe.

My project is built using two frameworks, dotnet for the server side and Angular for the client side.  
The two parts communicate via HTTP requests.

Data is stored in a PostgreSQL database.  
Authentication, which is very robust, is provided by the auth0 service.  
And the recipes are provided by Meta's artificial intelligence, Llama, installed locally on my computer.

#### Back end

Link to the GitHub repository : https://github.com/PhilemonPhilippin/IdeasForMeals-repo

The server part consists of two .NET projects: a Class Library ("IdeasForMeals.Core") and an ASP.NET API ("IdeasForMeals.API").

Most of the application logic is concentrated in the Core project.  
The API project only serves to expose the endpoints accessible via HTTP requests, relying on the Core project for the bulk of the work.

I will now explain in more detail what each part of these two projects does.

##### Core

First, the Class Library project called Core.

The first directory, called Database, contains a subfolder which in turn contains the various entities that represent the tables in my database.

In the Database folder, I'm building my database using the Entity Framework Core ORM. The C# AppDbContext class contains the code that sets the EntityFrameworkCore parameters.  
Using the DbSeed and SeedGenerator classes, I ensure that the database I create already has default data when it is created.

The second directory, called Migrations, is automatically created by the EFCore migrations command. It contains the database schema.  
The aim is to build the PostgreSQL database based on C# code.

The third directory, called Repositories, contains the repositories that will communicate with the database.  
Each repository class implements its own interface, which facilitates dependency injection.  
For example, the Food Repository is responsible for communicating with the database to access the Food Table.

The fourth directory, called Services, contains the IdeaForMealService.  
This service is responsible for three things: creating a randomly generated meal idea, asking AI Llama for a recipe based on this meal idea, and also converting the recipe into a PDF file.

I use the external libraries Pdfsharp to draw the PDF file and Ollamasharp to interact with the version of Llama installed locally on my computer, or to be more exact installed in a docker container.

##### API

Now, the ASP.NET API project called API.

The directory called Contracts contains the classes that allow me to validate data coming into and going out of my API.  
The Dtos are the ones going out, and the Requests are the ones coming into my API.

The directory called Controllers contains the controllers that expose my API's endpoints and use the Core project's services and repositories.

For example, the Diet controller is responsible for managing requests related to the user's diet.  
And the User controller is responsible for checking whether a user already exists, or creating one if it doesn't.

Finally, the Mappers folder contains the classes that allow me to convert entities from the database into Dto's.

And the Program.cs class is where I configure the application : dependency injection services, connection to the database, CORS policy and auth0 implementation for example.

#### Front end

Link to the GitHub repository : https://github.com/PhilemonPhilippin/ideas-for-meals-ng-repo

The Angular project is made of components. I use the framework Tailwind CSS for the styles.

There is a features directory that contains subfolders for the diet as well as for the idea-for-meal features.

And there is also the home directory that contains the home component.

In the shared directory, you can find the components subfolder that contains the shared components like header and footer.  
The models subfolder contains the shared models of the Angular application. These are interfaces representing the entities, the data of the application.  
And finally you can find the services in the services subfolder. These are the classes that send the HTTP requests to the API.  
For example, the DietService contains the code that fetch Diet related data from the .NET API.
