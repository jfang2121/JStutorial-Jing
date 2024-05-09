import { Fragment } from "react";
import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = 0;

//event handler (a click event)
  const handleClick = (e: MouseEvent) => console.log(e.) // e: MouseEvent is type annotation
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
  return (
    <Fragment>
      <h1>List</h1> {/* React.createElement('h1') */}
      {/* Below is the most concise way. if the condition items.length is true, it will show the no item found, if false, nothing will show up on the screen */}
      {items.length === 0 && <p>No item found</p>}
      {/* {getMessage()} the benefit of using function is that function has parameters */}
      <ul className="list-group">
        {items.map((item) => (
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
            className={selectedIndex === index ? 'list-group-item active': 'list-group-item'}
            key={item}
            {/* you can have "e" or "event"*/}
            onClick={handleClick} 
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
