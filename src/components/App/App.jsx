import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    requestName: '',
  };

  handleSearchSubmit = requestName => {
    this.setState({ requestName });
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery requestName={this.state.requestName} />
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}






//  getRequestedImages = async (name, page) => {
//     try {
//       this.setState({ status: 'pending' });
//       const {hits, totalHits} = await fetchRequest(name, page);

//       this.setState(prevState => ({
//         request: [...prevState.request, ...hits],
//         loadMore: this.state.page < Math.ceil(totalHits / 12),
//         status: 'resolved',
//         totalImages: prevState.totalImages + hits.length,
//       }));

//       if (totalHits === 0) {
//         throw new Error("Ooops, we couldn't find such images");
//       }
//     } catch (error) {
//       this.setState({
//         error: error.message,
//         status: 'rejected',
//         hasMore: false,
//       });
//     }
//   };