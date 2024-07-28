export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;

  let partnersText = 'I am not married';

  if (isMarried === true && sex === 'm') {
    partnersText = `${partnerName} is my wife`;
  } else if (isMarried === true && sex === 'f') {
    partnersText = `${partnerName} is my husband`;
  } else {
    partnersText = 'I am not married';
  }

  return (
    <section className="Person">
      <h2 className="Person__name">My name is {name}</h2>
      {age && <p className="Person__age">I am {age}</p>}
      <p className="Person__partner">{partnersText}</p>
    </section>
  );
};
