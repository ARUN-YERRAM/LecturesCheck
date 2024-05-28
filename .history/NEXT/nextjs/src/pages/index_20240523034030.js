import React, { useState } from "react";

const SUMMARIZE_URL = "http://localhost:3000/api/summarize";

export default function Home() {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const summarizeText = (text) => {
    setIsLoading(true); // Set loading state before making the request
    fetch(SUMMARIZE_URL, {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setSummary(data.message.content);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error summarizing text:", error);
      });
  };

  const onChangeFileInput = (event) => {
    const file = event.target.files[0];
    if (file.type !== "application/pdf") {
      console.error(file.name, "is not a PDF file.");
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      const typedarray = new Uint8Array(fileReader.result);
      // Load the PDF file.
      pdfjsLib.getDocument({ data: typedarray }).promise.then((pdf) => {
        console.log("PDF loaded");

        // Fetch the first page
        pdf.getPage(1).then((page) => {
          console.log("Page loaded");

          // Get text from the page
          page.getTextContent().then((textContent) => {
            let text = "";
            textContent.items.forEach((item) => {
              text += item.str + " ";
            });

            // Display text content
            document.getElementById("pdfContent").innerText = text;
            summarizeText(text); // Summarize text after extracting it
          });
        });
      });
    };
    fileReader.readAsArrayBuffer(file);
  };

  return (
    <main className={`flex relative min-h-screen flex-col items-center py-12 px-12`}>
      {/* Rest of your JSX */}
    </main>
  );
}
