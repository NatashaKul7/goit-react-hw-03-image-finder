import { Component } from 'react';
import { ModalBox, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onCloseModal();
    }
  };

  render() {
    return (
      <Overlay onClick={this.onOverlayClick}>
        <ModalBox>{this.props.children}</ModalBox>
      </Overlay>
    );
  }
}
