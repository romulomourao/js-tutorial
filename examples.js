const barker = (state) => ({
  bark: () => console.log(`Woof, I am ${state.name}`)
});

barker({name: 'karo'}).bark();
console.log(barker);

const murderRobot = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0
  };

  return Object.assign(
    {},
    barker(state)
  )

};
murderRobot('android').bark();