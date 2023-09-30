import { Component } from 'react';

import { fetchRequest } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import { StyledGallery } from './ImageGallery.styled';
import { Button } from 'components/Button/Button';

export class ImageGallery extends Component {
  state = {
    request: null,
    loading: false,
    modal: {
      isOpen: false,
      data: null,
      tags: '',
    },
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevRequest = prevProps.requestName;
    const nextRequest = this.props.requestName;

    if (prevRequest !== nextRequest) {
      this.setState({ loading: true, request: null });

      this.getRequestedImages(nextRequest);
    }
  }


  ///  с loadMore
  // getRequestedImages = async (name, page) => {
  //   try {
  //     this.setState({ isLoading: true });
  //     const { hits, totalHits } = await fetchRequest(name, page);
  //     // console.log(request)

  //     // this.setState({ request: request.hits });

  //     this.setState(prevState => ({
  //       request: [...(prevState.request || []), ...hits],
  //       page: prevState.page + 1,
  //     }));
  //   } catch (error) {
  //     this.setState({ error: error.message });
  //   } finally {
  //     this.setState({ loading: false });
  //   }
  // };


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

  onLoadMore = () => {
    const { page } = this.state;
    const { requestName } = this.props;
    this.getRequestedImages(requestName, page)
  };

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

    const { modal, loading, request, error } = this.state;
    return (
      <>
        {loading && <Loader />}
        {error && <h3>{error.message}</h3>}

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
        {request && <Button onClick={this.onLoadMore} />}
        {modal.isOpen && (
          <Modal onCloseModal={this.onCloseModal}>
            <img src={modal.data} alt={modal.tags} />
          </Modal>
        )}
      </>
    );
  }
}
