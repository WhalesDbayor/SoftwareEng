const BlogList = (props) => {
  const title = props.title;
  const blogs = props.blogs;
  const handleDelete = props.handleDelete;

  return ( 
    <div className="blog-list">
      <h1>{ title }</h1>
      {
        blogs.map((blog) => (
          <div className="blog-preview" key={ blog.id }>
            <h2>{ blog.title }</h2>
            <p>Written by: { blog.author }</p>
            <button onClick={() => { handleDelete(blog.id) }}>Delete Blog</button>
            {/* <p>{ blog.content }</p> */}
          </div>
        ))
      }
    </div>
   );
}
 
export default BlogList;