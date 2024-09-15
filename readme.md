
# Reason AI LLM

A stateless Language Model (LLM) wrapper built with LangChain, designed to enhance reasoning capabilities for real-time interactions. This project focuses on handling complex reasoning queries without maintaining conversation history.

## Features

- **Stateless Interaction**: No conversation history is saved.
- **Enhanced Reasoning**: Improves the model’s ability to handle complex queries.
- **Real-Time Responses**: Fast and efficient processing for immediate answers.
- **Easy Integration**: Connects with various applications easily.
- **Advanced Query Handling**: Manages detailed and tricky questions.
- **Modular Design**: Easy to update and expand.


## Demo

https://github.com/user-attachments/assets/fccb278e-ef46-4cee-a547-f6f7c9da4b07


## Tech Stack

**Client:** HTML, CSS, React

**Server:** Python, Flask, Langchain


## Installation

Install my-project with npm

```bash
  npm install my-project
  cd my-project
```
 Install my-project with Docker  

 ```bash
  Clone the Repo
  cd/reason-ai-llm
  docker-compose up
```


## API Reference for backend

#### Request to generate for a input query

```http
  POST /query
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `string` | **Required**. Input text |

## Deployment

To deploy this project run

Build the Images
```bash
  docker-compose build
```
Start the Services
```bash
  docker-compose build
  docker-compose up -d  #in detached mode
```

