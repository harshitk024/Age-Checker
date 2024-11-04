function cRound(n) {
  if (0 < n) {
    return Math.floor(n);
  } else {
    return Math.ceil(n);
  }
}

const Age = ({ ageSeconds }) => {
  return (
    <>
      <h2 className="header">Your age in</h2>
      <h2 className="header">Seconds : {ageSeconds}</h2>
      <h2 className="header">Minutes : {cRound(ageSeconds / 60)}</h2>
      <h2 className="header">Hours : {cRound(ageSeconds / 60 / 60)}</h2>
      <h2 className="header">Days : {cRound(ageSeconds / 60 / 60 / 24)}</h2>
    </>
  );
};

export default Age;
