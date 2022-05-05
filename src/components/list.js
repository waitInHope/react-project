
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
  return (
    <dl>
      {items.map((item, index) => (
        <ListItem item={item} key={index}></ListItem>
      ))}
    </dl>
  )
}