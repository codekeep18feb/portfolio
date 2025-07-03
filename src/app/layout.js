"use client";
// src/app/layout.js

// import "./globals.css";
import { useState } from 'react';


export default function RootLayout({ children}) {
  const [modalContent, setModalContent] = useState("");
  const [modalVisible, setModalVisible] = useState(false);


  const closeModal = () => setModalVisible(false);
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
        {children}
      
      </body>
    </html>
  );
}
