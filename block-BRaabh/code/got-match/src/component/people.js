// import React from 'react'
function People(props) {
  return (
    <>
      <ul>
        {props.everyone.map((person) => {
          return (
            <li className="cards" key={JSON.stringify(person)}>
              <img src={person.image} alt={person.name} />
              <h2>{person.name}</h2>
              <p>{person.description}</p>
              <button>Know More</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default People;
