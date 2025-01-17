# URL Shortener Web App

A simple URL Shortener web application built with **Express.js**, **MongoDB**, and **ShortID**. This application allows users to shorten URLs, validates the URL input, and provides functionality to copy the shortened URL to the clipboard.

## Features

- **URL Shortening**: Shorten long URLs to make them more manageable.
- **MongoDB**: Store and manage shortened URLs.
- **ShortID**: Generate unique and short IDs for URLs.
- **Input Validation**: Ensure the provided URL is valid before shortening.
- **Copy to Clipboard**: Easily copy the shortened URL with a click.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **URL Shortening**: ShortID
- **Input Validation**: Express Validator
- **Frontend**: HTML, CSS, JavaScript, FontAwesome (for icons)
- **Clipboard**: Browser's Clipboard API (JavaScript)

## Routes

### `GET /`
- **Description**: Serves the home page where users can input a URL to shorten.
- **Response**: Renders an HTML form for URL input.


### `GET /:shortid`
- **Description**: Redirects the user to the original URL based on the shortened ID.
- **URL Parameters**:
    - `shortid`: The shortened URL identifier.
- **Response**: Redirects to the original URL stored in the database.

## Future Enhancements

1. **Authentication**  
   - Add user accounts to allow users to log in and manage their shortened URLs.  
   - Users can track history and analyze performance metrics for their URLs.

2. **Custom Short URLs**  
   - Allow users to create custom aliases for their shortened URLs instead of auto-generated ones.  
   - Example: `http://short.ly/my-custom-url`.

3. **Analytics**  
   - Track key metrics for each shortened URL, such as:  
     - Total clicks  
     - Geographic location of visitors  
     - Referrer information (e.g., which website directed the user to the shortened URL).  

4. **Custom Error Pages**  
   - Display user-friendly error pages for:  
     - Invalid shortened URLs  
     - Expired or deleted URLs  
   - Provide helpful navigation options on these pages to improve user experience.
