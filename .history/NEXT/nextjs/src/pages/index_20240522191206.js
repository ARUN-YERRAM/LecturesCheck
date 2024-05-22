import React, { useState } from "react";
import pdfjsLib from 'pdfjs-dist'; // Import pdfjsLib

const SUMMARIZE_URL = "http://localhost:3000/api/summarize";

export default function Home() {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rawText, setRawText] = useState("");

  const summarizeText = (text) => {
    fetch(SUMMARIZE_URL, {
      method: "POST",
      body: JSON.stringify({ text }),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      setIsLoading(false);
      setSummary(data.message.content);
    })
    .catch((error) => {
      console.error('Error:', error);
      setIsLoading(false);
    });
  };

  const onLoadFile = (event) => {
    const file = event.target.files[0];
    if (file.type !== "application/pdf") {
      console.error(file.name, "is not a PDF file.");
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      const typedarray = new Uint8Array(fileReader.result);
      pdfjsLib.getDocument({ data: typedarray }).promise
      .then((pdf) => {
        console.log("PDF loaded");

        pdf.getPage(1).then((page) => {
          console.log("Page loaded");

          page.getTextContent().then((textContent) => {
            let text = "";
            textContent.items.forEach((item) => {
              text += item.str + " ";
            });

            // Set raw text content
            setRawText(text);
            setIsLoading(true);
            summarizeText(text);
          });
        });
      })
      .catch((error) => {
        console.error('Error loading PDF:', error);
      });
    };

    fileReader.readAsArrayBuffer(file);
  };

  return (
    <main className={`flex relative min-h-screen flex-col items-center py-12 px-12`}>
      {/* Your UI code here */}
    </main>
  );
}
