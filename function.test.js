const{stateAge, addUser} = require('./function')

test('Should return I am [age]', () => {
    expect(stateAge(25)).toEqual( 'I am 25.')
})

it('Should return user object or a failed status', () => {
    expect(addUser('Joey', 21)).toEqual({name: 'Joey', age: 21})

    expect(addUser('Chandler', 15)).toEqual ('User not old enough')
})