import { Component } from 'react';

import { fetchRequest } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';


export class ImageGallery extends Component {
  state = {
    requestName: '',
    request: null,
    loading: false,
    modal: {
      isOpen: false,
      data: null,
    },
    error: null,
    page: 1,
  };


  getRequestedImages = async () => {
    try {
      this.setState({ isLoading: true });
      const request = await fetchRequest(this.state.request);

      this.setState({ request: request });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const prevRequest = prevProps.requestName;
    const nextRequest = this.props.requestName;
    const { requestName } = this.state;

    if (prevRequest !== nextRequest) {
      this.setState({ loading: true });

      this.setState({ request: [] });
      this.getRequestedImages(requestName);

    }
  }

  
    // componentDidUpdate(prevProps, prevState) {
    //   const prevRequest = prevProps.requestName;
    //   const nextRequest = this.props.requestName;

    //   if (prevRequest !== nextRequest) {
    //     this.setState({ loading: true });

    //     fetch(`${BASE_URL}?key=${KEY}&q=${nextRequest}`)
    //       .then(res => res.json())
    //       .then(request => this.setState({ request }))
    //       .finally(() => this.setState({ loading: false }));
    //   }
    // }

    onOpenModal = modalData => {
      this.setState({
        modal: {
          isOpen: true,
          data: modalData,
        },
      });
    };

    onCloseModal = () => {
      this.setState({
        modal: {
          isOpen: false,
          data: null,
        },
      });
    };

    render() {
      const showImg =
        Array.isArray(this.state.request) && this.state.request.length;
      
      const { modal } = this.state;
      return (
        <>
          {this.state.loading && <Loader />}
          <h2>Result "{this.props.requestName}"</h2>
          <ul>
           { showImg && <ImageGalleryItem
              data={this.state.request}
              onOpenModal={this.onOpenModal}
            />}
          </ul>
          {modal.isOpen && (
            <Modal onCloseModal={this.onCloseModal}>
              <h3>Content modal</h3>
            </Modal>
          )}
        </>
      );
    }
  }
               
