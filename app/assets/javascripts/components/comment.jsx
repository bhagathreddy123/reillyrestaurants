var Comment = createReactClass({
  propTypes: {
    author: PropTypes.string,
    body: PropTypes.sting,
    rank: PropTypes.string
  },

  render: function() {
    return (
      <React.Fragment>
        <div>Autor: {this.props.author}</div>
        <div>Body: {this.props.body}</div>
        <div>Rank: {this.props.rank}</div>
      </React.Fragment>
    );
  }
});