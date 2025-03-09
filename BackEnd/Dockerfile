# Use the official Maven image as the base image
FROM maven:3.9.9 AS build

# Set the working directory
WORKDIR /app

# Copy the pom.xml and any other necessary configuration files
COPY ./pom.xml /app
COPY ./src /app/src

# Build the application
RUN mvn clean package -Dmaven.test.skip=true

# Create a new image for running the application
FROM openjdk:21-jdk

# Set the working directory
WORKDIR /app

# Copy the built JAR file from the previous stage
COPY --from=build /app/target/*.jar BackEnd-0.0.1-SNAPSHOT.jar

# Expose the port on which the Spring Boot application will run
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "BackEnd-0.0.1-SNAPSHOT.jar"]