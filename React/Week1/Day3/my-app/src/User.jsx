//Creating an external component for dispalying the user :
export function User(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
      </div>
    );
  }