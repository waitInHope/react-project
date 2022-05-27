
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../store/postSlice';

import { Fragment } from "react";

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.label}</dt>
      <dd>{item.value}</dd>
    </Fragment>
  )
}

export default function List({items}) {
  const postArr = useSelector((state) => state.posts.data);
  console.log('从redux获取到的全局状态', postArr);

  const dispatch = useDispatch();
  const changePostHandle = () => {
    dispatch(
      addPost({
        id:3,
        title: 'post3',
        content: 'hello post3'
      })
    )
  }

  return (
    <div>
      <dl>
        {items.map((item, index) => (
          <ListItem item={item} key={index}></ListItem>
        ))}
      </dl>
      {postArr.map((i) => {
        return <div key={i.id}><span>{i.title}</span><span>{i.content}</span></div>
      })}
      <button onClick={changePostHandle}>修改posts</button>
    </div>
  )
}