import './index.css';
import classnames from 'classnames';

export default function Map({ roverResults }) {
  const rows = Array(roverResults.yAxis + 1).fill(Array(roverResults.xAxis +1).fill(null));

  function renderSquare(y, x) {
    let roverPosition = false;
    if (roverResults.xPosition === x && roverResults.yPosition === y) {
      roverPosition = true;
    }

    return (
      <div key={`square-${x}-${y}`} className={classnames({
        square: true,
        roverPosition,
        crashed: roverResults.crashed
      })}>
        <p>x: {x}, y: {y}</p>
        {roverPosition && <p>{roverResults.orientation}</p>}
      </div>
    )
  }

  return (
    <div>
      <h1>Danesh</h1>
      <div className='container'>
        {rows.map((y, iy) => (
          <div className="row" key={`row-${iy}`}>
            {y.map((x, ix) => (
              renderSquare(iy, ix)
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}