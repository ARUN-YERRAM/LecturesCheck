"use client";
import Image from "next/image";

export default function Home() {

  function onFileChange(event){
    const file = event.target.file[0];
    const fileReader  = new FileReader();
    fileReader.onload = onLoadFile;
    fileReader
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