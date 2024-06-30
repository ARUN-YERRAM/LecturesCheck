import React from "react";

const BACKEND_URI = "http://localhost:4000";

const UploadsList = ({ medias }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <table
          className="table table-bordered"
          style={{
            height: "auto",
            width: "1000px",
            margin: "100px",
            marginLeft: "250px",
            border: "1px solid black",
          }}
        >
          <thead>
            <tr>
              <th width="200">Name</th>
              <th>Videos</th>
            </tr>
          </thead>
          <tbody>
            {medias &&
              medias.map((media, index) => (
                <tr key={index}>
                  <td>{media.name}</td>
                  <td>
                    {media.videos &&
                      media.videos.map((video, vidIndex) => (
                        <div key={vidIndex}>
                          <video preload="auto" width="250" height="250" controls>
                            <source src={`${BACKEND_URI}${video}`} />
                            Your browser does not support the video tag.
                          </video>
                          <br />
                        </div>
                      ))}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UploadsList;
