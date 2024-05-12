import { Fragment, useState } from "react";

// {items: [], heading:string}
//use type annotation
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; //onclick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // a hook
  const [selectedIndex, setSelectedInsex] = useState(-1);

  //event handler (a click event)

  {
    /* if (items.length === 0)
    return (
      <>
        <h1>List </h1>
        <p>No item found</p>
      </>
    );
    */
  }

  /*
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null; //null means nothing will be rendered
  };

  */

  //in react, you cannot return more than one element
  //<div> or <Fragment>
  //in jsx we can only use html or other react components, or using {}
  // you can have console.log(e) or console.log(event)
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      {/* Below is the most concise way. if the condition items.length is true, it will show the no item found, if false, nothing will show up on the screen */}
      {/* {getMessage()} the benefit of using function is that function has parameters */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li>{item}</li>
        ))}

        {/*<li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
  <li className="list-group-item">And a fifth one</li> */}

        {/* mapping each item to a list item below, adding index as parameter, we can see the index of the item clicked*/}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedInsex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
