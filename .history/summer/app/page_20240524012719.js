"use client";
import Image from "next/image";
import { useState } from "next/image";

export default function Home() {

  const [summary, setSummary] = useState("");
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
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({text:text})
    }).then((response)=>{
      return response.json();
    }).then((data)=>{
      console.log("response: ", data);
    })
}

  return (
      <>
      <h1>Upload PDF</h1>
      <input 
      type="file"
      id="file"
      name="file"
      onChange={onFileChange}
      accept=".pdf"/>
      
      </>  
  );
}
