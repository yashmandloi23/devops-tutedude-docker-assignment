# Full Stack Dockerized Application (Node + Flask)

This project is a simple full-stack application built as part of a DevOps assignment.
It consists of a **Node.js + Express frontend** and a **Flask backend**, both containerized using **Docker** and connected via **Docker Compose**.

The frontend displays a form and sends user input to the Flask backend, which processes the data and returns a response.

## Tech Stack

**Frontend**

* Node.js
* Express.js
* EJS (templating)
* Axios

**Backend**

* Python
* Flask

**DevOps**

* Docker
* Docker Compose
* GitHub
* Docker Hub


## How the Application Works

1. The frontend runs on **port 3000** and displays an HTML form.
2. When the form is submitted, data is sent to the Flask backend using an HTTP POST request.
3. The backend runs on **port 5000**, processes the data, and returns a JSON response.
4. Docker Compose connects both services on the same network, allowing communication using service names.

