# Interactive API-Driven Webpage Project

** note: please refer to Canvas for the most update to date instructions **

## Purpose
To practice and demonstrate proficiency in creating an interactive and dynamic webpage that integrates user-driven interactivity with data retrieved from public APIs using JavaScript.

## Skills Used
- HTML
- CSS
- JavaScript (including Fetch API, DOM manipulation, and event handling)
- API integration
- Web development best practices

## Knowledge Goals
- Understanding and applying concepts of asynchronous JavaScript programming
- API requests and responses
- DOM manipulation
- Event-driven programming
- Maintaining code quality and standards in web development

## Overview
In this project, you will create a dynamic and interactive webpage that combines the power of user-driven interactivity with data retrieved from a public API. Your task is to build a fully functional webpage that responds to user actions, fetches data asynchronously, and displays it in a meaningful way on the page. This project will help you gain experience in working with JavaScript for DOM manipulation, handling user events, and using the Fetch API to interact with external data sources.

Learning how to find and use public APIs is an extremely important skill in modern web development (and working with public datasets is one of the most fun parts of being a web developer!).

There are a ton of APIs on the web today - you can find ones for dog breeds, government datasets, dictionary web services, weather data, etc. However, some APIs can be frustrating to work with due to poor documentation or outdated response formats (XML, HTML, etc.). The APIs supported for this project all return data in JSON or plaintext format since these formats tend to be easier to work with.

### Available APIs
Specifically, you must choose from the following public APIs to request and process interesting data with and integrate into your own webpage (you can pick one of your own if you contact the professor first and it is approved):

- Bored API
- Random User Generator API
- Faker API
- Zippopotam API
- D&D API
- PokeAPI
- Debt to the Penny API
- CheapShark API
- Memes API
- FDA API

An important skill is knowing how to read and understand the provided documentation. All of these APIs are sufficiently documented, but if you have any questions, please do not hesitate to reach out and ask. You are **required** to use `fetch` to make requests (regardless of what is included in the documentation). Additionally, **you must visibly cite the API you are using on your page** (e.g., in a page footer).

### Note about API Keys
Some public APIs require an API key to access their services. An API key is used to manage and limit the number of requests that a service handles. You will need to obtain a free API key for the API you choose, following the instructions provided in the API’s documentation. Be sure to avoid any paid subscription plans. If you have any questions or run into issues obtaining or using your API key, don't hesitate to ask for help.

## Getting Started

### 1. Design Your Webpage (HTML/CSS)
Start by creating the structure and layout of your webpage using HTML and CSS. Design the page to include both static elements (such as headers, buttons, and forms) and placeholders where dynamic content from the API will be displayed.

Consider how the user interface (UI) will look and function. Think about the elements users will interact with, such as buttons, input fields, or dropdown menus.

### 2. Plan Your Interactive Elements (JavaScript)
Identify the key interactive elements of your webpage. Plan how these elements will respond to user interactions, such as button clicks, form submissions, or other events.

Create a table to map out the user events, the elements that will listen for these events, and the changes that will occur as a result. For example:

| Event | Element Listening to Event | Response/Elements Changed |
|-------|----------------------------|---------------------------|
| Click | Button with id `#fetchData` | Fetch data from API and display it in a div with id `#results` |

### 3. Choose a Public API
Select a public API from the list provided. Review the API documentation to understand how to build the URL for fetching data. Pay attention to the base URL, required query parameters, and any optional parameters that could customize the request.

Test your API request by manually constructing the URL with the required parameters and accessing it in your browser to view the JSON response.

### 4. Implement the Fetch API
Write JavaScript code to make asynchronous requests to the API using the Fetch API. Your code should retrieve data from the API based on user interactions (e.g., button clicks) and then dynamically update the webpage with the received data.

Ensure you handle possible errors in the fetch request, such as network issues or invalid responses, by displaying user-friendly error messages directly on the page.

## Development Strategy for Using Fetch with an API
1. Design your page (either with a front-end or wireframe) to plan for your implementation, imagining if you had the data you wanted from the API. **Do this before you write any Fetch call(s)**.
2. Find out how to build a URL to fetch from your chosen API (most APIs will have examples in their documentation).
    - What is the base URL? For example, the base URL of the [NASA Astronomy Photo of the Day (APOD)](https://api.nasa.gov/planetary/apod) API is `https://api.nasa.gov/planetary/apod`.
    - What are any required parameters (often called query parameters) you need to add to the URL? For example, the APOD API requires a query parameter of `api_key` which accepts a value of an API key you can register for on the API's home page. Without registering for an API key, the APOD API conveniently lets you provide a value `DEMO_KEY` for a limited number of daily requests. Using this required parameter, you can make a request to `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY` to get JSON data for the photo of the current day.
    - Are there any optional parameters you can choose from to request specific information from the API? In the APOD API, you can also use an optional parameter called `date` documented on their API page to specify the date. For example, you can make a request to `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2000-01-30` to get the Astronomy photo of the day for January 30th, 2000.
3. Get an example JSON representation from the API by visiting the URL with query parameters. Copy/paste the JSON into your browser console and expand the result to understand the hierarchy of an example JSON response for the API. Most APIs will have examples you can copy/paste in a new page and output the JSON. Make sure you use your API key as a query parameter if using an API that requires one. For testing, you may find it helpful to store the JSON as a temporary global variable so you can focus on working with the JSON data parsing and DOM manipulation before working with any Fetch calls. **Do not have any JSON stored in as global or module-global variables in your final submission**.
4. Go back to the API documentation for any clarifications on what any field names in the JSON mean. Some will be intuitive; some may need a bit of clarification in the documentation.
5. **Note**: You can get up to this step without using any Fetch calls in your assignment. Once you know how to access the field names you want for a response, finish your JS response function to use the JSON and update your page with the data you want to use to meet the external requirements.
6. To test possible errors (you will need to display a descriptive error message on the page if an API returns an error caught in the `catch` statement), you can temporarily replace your response function with the error-handling function in the fetch.
7. Can you think of any other ways to use the API (e.g., other query parameters or endpoints) or incorporate another API?

## External Requirements

### HTML/CSS
- **`index.html`**: The main HTML file for your webpage, structured with semantic HTML elements.
- **`styles.css`**: A CSS file to style your HTML elements, ensuring a cohesive and visually appealing design.
- ?: At least one additional HTML file

### JavaScript
- **`index.js`**: A JavaScript file containing your code for handling user interactions, making API requests, and dynamically updating the DOM.
- You can have more if you want.

### User Interaction
- Your webpage must respond to at least one user-triggered event, such as a button click or form submission.
- Dynamically integrate the data returned from the API into the page by manipulating the DOM elements in some non-trivial way using `element.appendChild`, `element.removeChild`, or `element.replaceChild`.
- Modify a `classList` of an element (using one of `add`, `remove`, `toggle`) using a class that is defined in a linked CSS file.

### Error Handling
- Use the `statusCheck` function from lecture to throw an Error if the fetch response status is not `ok` before processing the data. This is a helper function we are requiring you to use (with JSDoc) in your AJAX programs, but the rest of your functions must be your own.
- Handle any errors caused in the fetch request/response process by displaying a helpful message to the user on the page (i.e., without using `alert`, `console.log`, or `console.error`). To do so, you should define a function (e.g., `handleError`) to implement the error-message-displaying and pass that function the fetch call chain's `catch` statement.

### API Citation
- Visibly cite the API you are using on your webpage, such as in the footer, to give credit to the data source.

## Internal Requirements

For full credit, your page must not only match the External Requirements listed above, but you must also demonstrate that you understand what it means to write code following a set of programming standards. Your code should maintain good code quality. Make sure to review the slides specific to JavaScript! We also expect you to implement relevant feedback from previous assignments. Some guidelines that are particularly important to remember for this assignment are included below.

### Code Quality and Standards

- **Consistent Formatting**: Ensure that your HTML, CSS, and JavaScript code adheres to consistent formatting standards. This includes:
  - Proper use of whitespace and indentation for readability.
  - Consistent and meaningful naming conventions for variables, functions, and classes.
  - Proper placement of curly braces in JavaScript, as demonstrated in class examples.

- **File and Link Management**:
  - All file names, links, and extensions in your project must be lowercase and without spaces (e.g., `img/puppy.jpg`, not `img/Puppy.JPG` or `img/puppy.JPG`). This prevents broken links and ensures cross-platform consistency.
  - Use relative links, not absolute, when linking to `.html`, `.css`, and `.js` files.

### HTML/CSS

- **Standards Compliance**: Follow best practices for HTML and CSS, including:
  - Consistent use of classes and IDs.
  - Proper separation of content (HTML), presentation (CSS), and behavior (JavaScript).
  - Avoid redundancy in CSS, and ensure that your CSS is clean and efficient.
  - Ensure all HTML and CSS files are well-formed and validated.

### JavaScript

- **Function Decomposition**: Write small, reusable functions that perform a single task. Avoid large, monolithic functions, and limit the use of anonymous functions. Use named functions for meaningful behavior.

- **Variable Management**:
  - Localize variables as much as possible. Avoid using global variables; instead, utilize module-global variables only when absolutely necessary.
  - Use `const` with UPPER_CASED naming conventions for constants (e.g., file paths).
  - Minimize the use of module-global variables, especially for DOM elements or objects returned by functions like `document.getElementById`.

- **JavaScript and HTML Separation**:
  - Do not embed JavaScript directly within your HTML files. Instead, link your JavaScript using `<script src="...">` in the HTML `<head>`.
  - Avoid including HTML tags as strings in your JavaScript (e.g., `el.innerHTML = "<p>Foo</p>";`).

- **Event Handling**:
  - Implement event handlers for user interactions (e.g., mouse events, keyboard events, timers) using JavaScript functions in your `.js` file.
  - Use `window.addEventListener("load", functionName)` to ensure that your scripts run after the page has fully loaded.

- **Styling and the DOM**:
  - Minimize styling directly within JavaScript (e.g., modifying the `.style` property). Instead, use the `classList` API (`add`, `remove`, `toggle`) to manipulate classes on DOM elements, and define those classes in your CSS.
  - Exceptions can be made for dynamically generated styles or positions that cannot be reasonably factored out into CSS.

- **Module-Global Pattern**:
  - All JavaScript code should follow the module-global pattern and include `"use strict";` to enforce stricter parsing and error handling in your scripts.

- **AJAX and Fetch API**:
  - All asynchronous requests in your JavaScript code must use the Fetch API.
  - Avoid unnecessary or redundant API requests. Ensure that all data retrieved from an API is used meaningfully, and be mindful of request limits imposed by some APIs.
 
- **Additional Promise and/or Async/Await**:
You must have two additional promise and/or async/await functions in your webpage, however you want to develop them, in addition to your fetches.

## Documentation

### File Headers
- Include a comment header in each file (`index.html`, `styles.css`, `index.js`) with your name, the date, and a brief description of the file’s purpose.

### JSDoc
- Document all JavaScript functions using JSDoc format, including `@param` and `@returns` tags to describe input parameters and return values.

```javascript
/*
 * Name: Eric Lloyd
 * Date: September 5, 2024
 *
 * This is the JS to implement the UI for my cryptogram generator and generates
 * different types of ciphers from user input.
 */
```

## Grading

Your project will be graded out of 100 points based on the following criteria:

- **Functionality**: Does the webpage function as described? Are the API requests correctly implemented and integrated into the webpage?
- **Interactivity**: Does the webpage respond appropriately to user interactions? Is the DOM updated dynamically?
- **Error Handling**: Are errors in API requests handled gracefully? Are user-friendly messages displayed on the page?
- **Code Quality**: Is the code clean, well-organized, and easy to read? Are best practices followed for HTML, CSS, and JavaScript?
- **Documentation**: Are the code and files properly documented with comments and JSDoc?

## Academic Integrity

You are encouraged to explore outside resources and seek inspiration for your project. However, all work must be your own. Plagiarism or inappropriate content will result in a zero for the project. Ensure that you cite any external resources, including images and code snippets, in your project. If you are unsure whether your work complies with academic integrity guidelines, please ask for clarification.
