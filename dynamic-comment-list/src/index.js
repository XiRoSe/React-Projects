import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovelCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovelCard>
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice Blog Post"
        avatar={faker.image.avatar()}/>
      </ApprovelCard>
      <ApprovelCard>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 8:05PM"
        content="Awasome post!~"
        avatar={faker.image.avatar()}/>
      </ApprovelCard>
      <ApprovelCard>
      <CommentDetail
        author="Jane"
        timeAgo="Today at 2:11AM"
        content="The best post ever!"
        avatar={faker.image.avatar()}/>
      </ApprovelCard>
    </div>
  );
};

ReactDOM.render(<App/>,document.querySelector('#root'));