export const Task = (props) => {
  return (
    <div style={{ color: props.completed ? "green" : "white"}}>
      <h6>{props.id}. {props.taskName} -
      - <button onClick={() => props.deleteTask(props.id)}>X</button> -
      - <button onClick={() => props.completeTask(props.id)}>Complete</button>
      </h6> 
    </div>
  );
};
