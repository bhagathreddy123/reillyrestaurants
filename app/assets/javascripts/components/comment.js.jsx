var Comment = createReactClass({
  propTypes: {
    author: PropTypes.string,
    body: PropTypes.sting,
    rank: PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Autor: {this.props.author}</div>
        <div>Body: {this.props.body}</div>
        <div>Rank: {this.props.rank}</div>
      </div>
    );
  }
});