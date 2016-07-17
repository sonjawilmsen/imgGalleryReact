import React from 'react';

function imagesLoaded(parentNode) {
  const imgElements = parentNode.querySelectorAll('img');
  for (const img of imgElements) {
    if (!img.complete) {
      return false;
    }
  }
  return true;
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  handleImageChange() {
    // In React 0.13 use: 'this.refs.gallery.getDOMNode()'
    const galleryElement = this.refs.gallery;
    this.setState({
      loading: !imagesLoaded(galleryElement),
    });
  }

  renderSpinner() {
    if (!this.state.loading) {
      return null;
    }
    return (
      <span className="spinner" />
    );
  }

  renderImage(imageUrl) {
    return (
      <div>
        <img
          src={imageUrl}
          onLoad={this.handleImageChange.bind(this)}
          onError={this.handleImageChange.bind(this)}
          />
      </div>
    );
  }

  render() {
    return (
      <div className="gallery" ref="gallery">
        {this.renderSpinner()}
        <div className="images">
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}
Gallery.propTypes = {
  imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};
export default Gallery;
