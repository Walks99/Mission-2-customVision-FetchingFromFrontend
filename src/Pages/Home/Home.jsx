import React from 'react'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <p>Home Page</p>
      <Link to="/findsimilarcars">
        <button>Go to find similar cars page</button>
      </Link>
    </div>
  )
}

export default HomePage


