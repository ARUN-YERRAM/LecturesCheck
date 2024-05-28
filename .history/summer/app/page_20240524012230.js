"use client";
import Image from "next/image";

export default function Home() {

  function onFileChange(event){
    const file = event.target.file[0];
    const fileReader  = new FileReader();
    fileReader.onload = onLoadFile;
    fileReader.readAsArrayBuffer(file);
  }

  function onLoadFile(event){

    const typedarray = new Uint8Array(event.target.result);
    pdfjsLib.getDocument({

      data: typedarray
    }).promise.then((pdf) => {

      console.log("loaded pdf: ", pdf.numPages);
      pdf.getPage(1).then((page) => {
        page.getContext().then((content) => {
          let text = "";
          content.items.forEach((item) => {
            text += item.str + " ";
          });
          console.log("text: ", text);
        });
    });
  })
}

function sendToAPI(text) {
    fetch("/api",{
      method:"POST",
      headers
    })
}

  return (
      <>
      <h1>Upload PDF</h1>
      <input 
      type="file"
      id="file"
      name="file"
      accept=".pdf"/>
      </>  
  );
}
