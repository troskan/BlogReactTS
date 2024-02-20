import "./BlogItem.css";

function BlogPostItemComponent(header: string, date: string, urls: string[]) {
  const customStyle = {
    width: "200px", // Width set to 200 pixels
    height: "220px", // Height set to 200 pixels
    border: "1px solid black", // Height set to 200 pixels
    backgroundcolor: "black",
  };
  const imageStyle = {
    height: "50px",
    width: "50px",
  };
  return (
    <div className="d-flex flex-grow-0 flex-column ">
      <div className="rounded-3 box border shadow" style={customStyle}>
        <div className="">
          <div>{header}</div>
          <div>{date}</div>
          <div>
            {urls.map((url, index) => (
              <img
                key={index} // Providing a unique key for each element
                src={url}
                alt={`Gallery image ${index + 1}`}
                style={imageStyle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPostItemComponent;
