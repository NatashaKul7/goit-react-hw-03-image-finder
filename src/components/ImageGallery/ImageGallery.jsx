import { Component } from 'react';
// import { fetchRequest } from 'services/api';

const KEY = '38889526-086820321c5fcbdbccd359080';
const BASE_URL = 'https://pixabay.com/api/';

export class ImageGallery extends Component {
  state = {
    request: null,
  };

  //  fetchPostById = async () => {
  //     try {
  //       this.setState({ isLoading: true });
  //       const post = await findPostById(this.state.searchedPostId);

  //       this.setState({ posts: [post] });
  //     } catch (error) {
  //       this.setState({ error: error.message });
  //     } finally {
  //       this.setState({ isLoading: false });
  //     }
  //       };

  //     getRequest = async () => {
  //         try { }
  //     }

  componentDidUpdate(prevProps, prevState) {
    const prevRequest = prevProps.requestName;
    const nextRequest = this.props.requestName;

    if (prevRequest !== nextRequest) {
      fetch(`${BASE_URL}?key=${KEY}&q=${nextRequest}`)
        .then(res => res.json())
        .then(request => this.setState({ request }));
    }
  }

  render() {
    //   return <ul className="gallery">{this.props.requestName}</ul>;

    return (
      <ul>
        {Array.isArray(this.state.request) &&
          this.state.request.map(
            ({ id, webformatURL, largeImageURL, tags }) => {
              return (
                <li key={id}>
                  <img src={webformatURL} alt={tags} />
                </li>
              );
            }
          )}
      </ul>
    );
  }
}

///////
// {showPosts &&
//               this.state.posts.map(post => {
//                 return (
//                   <li key={post.id} className="postListItem">
//                     <span>Id: {post.id}</span>
//                     <h3>Title: {post.title}</h3>
//                     <h4>User Id: {post.userId}</h4>
//                     <p>Body: {post.body}</p>
//                   </li>
//                 );
//               })}
