import React from 'react'
import Button from 'react-bootstrap/Button';

const video = () => {
  return (

    <>
    <h1>Upload Video</h1>

      <section>
            {/* <button >Upload</button> */}
            <Button variant="primary">Primary</Button>{' '}
          <div className="d-flex justify-content-center my-5">
              <iframe width="560" loading="lazy" height="315" src="https://www.youtube.com/embed/395ZloN4Rr8?si=3-h6s56wIFv2sDBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>     
          </div>           
      </section>

    </>
  )
}

export default video
