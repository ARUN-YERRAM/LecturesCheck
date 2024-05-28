import Image from "next/image";

export default function Home() {
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
