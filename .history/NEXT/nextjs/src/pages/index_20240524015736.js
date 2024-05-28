"use client";
import React, { useState } from "react"; // Correct import for React and useState
import * as pdfjsLib from "pdfjs-dist/webpack"; // Correct import for pdfjs-dist

export default function Home() {
  const [summary, setSummary] = useState("NULL");

  function onFileChange(event) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = onLoadFile;
    fileReader.readAsArrayBuffer(file);
  }

  function onLoadFile(event) {
    const typedarray = new Uint8Array(event.target.result);
    pdfjsLib.getDocument({ data: typedarray }).promise.then((pdf) => {
      console.log("loaded pdf: ", pdf.numPages);
      pdf.getPage(1).then((page) => {
        page.getTextContent().then((content) => {
          let text = "";
          content.items.forEach((item) => {
            text += item.str + " ";
          });
          console.log("text: ", text);
          sendToAPI(text); // Send extracted text to API
        });
      });
    });
  }

  function sendToAPI(text) {
    fetch("/api/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSummary(data.summary);
        console.log("response: ", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <>
      <h1>Upload PDF</h1>
      <input
        type="file"
        id="file"
        name="file"
        onChange={onFileChange}
        accept=".pdf"
      />
      <p>{summary}</p>
    </>
  );
}
