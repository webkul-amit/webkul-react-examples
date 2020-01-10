// Data Change with Mutation
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

function callable( fn, a, b) {
  return fn(a, b);
}

callable(sum, 10, 20);

function sum(a,b) {
  return a+b;
}