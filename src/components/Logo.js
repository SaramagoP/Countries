import React from 'react'

export default function Logo() {
  return (
   <div className="logo">
    {/* Les images importées depuis la balise IMG sont accessibles dans "public" */}
    <img src="./logo192.png" alt="logo react" />
    <h3>React World</h3>
   </div>
  )
}
