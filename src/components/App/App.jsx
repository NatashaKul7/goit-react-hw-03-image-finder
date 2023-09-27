import { Component } from 'react';

// import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';
import { Searchbar } from 'components/Searchbar/Searchbar';
// import { Container } from './App.styled';


export class App extends Component {
  state = {
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

  render() {
    const { modal } = this.state;
    return (
      <div>
        <Searchbar/>
        {/* <Loader/> */}
        <button type="button" onClick={this.onOpenModal}>
          Open Modal
        </button>
        {modal.isOpen && (
          <Modal onCloseModal={this.onCloseModal}>
            <h3>Content modal</h3>
          </Modal>
        )}
        <Button/>
      </div>
    ); 
  }
}
