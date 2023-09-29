import { Component } from 'react';

import { fetchRequest } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import { StyledGallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    request: null,
    loading: false,
    modal: {
      isOpen: false,
      data: null,
      tags: '',
    },
    error: '',
    page: 1,
  };

  getRequestedImages = async name => {
    try {
      this.setState({ isLoading: true });
      const request = await fetchRequest(name);

      this.setState({ request: request.hits });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const prevRequest = prevProps.requestName;
    const nextRequest = this.props.requestName;

    if (prevRequest !== nextRequest) {
      this.setState({ loading: true });

      // this.setState({ request: [] });
      this.getRequestedImages(nextRequest);
    }
  }

  onOpenModal = (modalData, tags) => {
    this.setState({
      modal: {
        isOpen: true,
        data: modalData,
        tags,
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

    const { modal, loading, error  } = this.state;
    return (
      <>
        {loading && <Loader />}

        {showImg && (
          <>
            <h2>Result "{this.props.requestName}"</h2>
            <StyledGallery>
              <ImageGalleryItem
                data={this.state.request}
                onOpenModal={this.onOpenModal}
              />
            </StyledGallery>
          </>
        )}
        {/* {error && <p>Ooops, we couldn't find this request</p>} */}

        {modal.isOpen && (
          <Modal onCloseModal={this.onCloseModal}>
            <img src={modal.data} alt={modal.tags} />
          </Modal>
        )}
      </>
    );
  }
}
