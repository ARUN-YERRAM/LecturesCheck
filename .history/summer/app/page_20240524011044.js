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
