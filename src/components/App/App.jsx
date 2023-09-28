import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

// import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
// import { Container } from './App.styled';

export class App extends Component {
  state = {
    requestName: '',
    modal: {
      isOpen: false,
      data: null,
    },
  };

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

  handleSearchSubmit = requestName => {
    this.setState({ requestName });
  };

  render() {
    const { modal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery requestName={ this.state.requestName} />
        {/* // кнопка для зручності для модалки */}
        <button type="button" onClick={this.onOpenModal}>
          Open Modal
        </button>
        {/* <Loader/> */}
        {modal.isOpen && (
          <Modal onCloseModal={this.onCloseModal}>
            <h3>Content modal</h3>
          </Modal>
        )}
        <Button />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
