import React from 'react'
import { useRouteError } from 'react-router-dom'
import "./Error.css";
function ErrorElement() {
  const error = useRouteError()
  return (
    <div className="error-page">
      <style media=''></style>
      <div  className="error-message">
        <h1>{error.status}</h1>
        <h2>Oops! Page not found.</h2>
        <p>
          We couldnt find the page you were looking for. This might be because
          you have typed the web address incorrectly, or the page you were
          looking for may have been moved, updated or deleted.
        </p>
        <a href="/" className="home-button">
          Home
        </a>
      </div>
    </div>
  );
}

export default ErrorElement
