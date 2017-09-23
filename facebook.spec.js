function Auth(authService){
  this.authService =authService

  this.signInWithFacebook =(phone,password) => {
  return this.authService(phone,password)
  }
  
  }


test('Mock with 1 should return 1',() =>{
  const mockFn = jest.fn(1)
  .mockReturnValue(1)

  expect(mockFn(1)).toBe(1)
  expect(mockFn).toBeCalledWith(1)
})
test('Signin with valid credential should pass',()=> {
  const returnObject ={
    name: 'Sasithon',
    facebookId: '5845414241',
    email: 'amfouy@gmail.com'
  }

  const mockFacebook = jest.fn('0822547899','soul')
  .mockReturnValue(returnObject)

  let app = new Auth(mockFacebook)
  let  value =app.signInWithFacebook('0822547899','soul')

  expect(value).toEqual(returnObject)
  expect(mockFacebook).toBeCalled()
  expect(mockFacebook).toBeCalledWith('0822547899','soul')


})
