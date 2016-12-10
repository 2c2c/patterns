import React from 'react';

const CommentList = ({comments}) => <ul>
  {comments.map(comment => <li>{comment.body}-{comment.author}</li>)}
</ul>

class CommentListContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        comments: [
          {
            body: "hey",
            author: "mike"
          }, {
            body: "hi",
            author: 'bob'
          }, {
            body: "hello",
            author: 'jill'
          },
        ]
      })
    }, 5000);
  }

  render() {
    return <CommentList comments={this.state.comments}/>
  }
}

export default CommentListContainer;
