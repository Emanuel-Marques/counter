export const actionCreator = (increment = 1) => ({
    type: 'INCREMENT_COUNTER',
    playload: increment,
});

export const clickCounter = () => ({
    type: 'INCREMENT_CLICKS',
});