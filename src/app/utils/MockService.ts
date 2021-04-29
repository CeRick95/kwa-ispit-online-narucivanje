export const mockService = {login, register, existByEmail};
import axios from 'axios';

async function getUsers(): Promise<any> {
 return await axios.get('http://localhost:3000/users').then(
    response => {
      if (response.status === 200 && response.data.length > 0) {
        console.log('Success');
        return Promise.resolve(response.data);
      }else{
        return Promise.reject('Status: ' + response.status + 'Error message: ' + response.data);
      }
    }
    ,
    error => {
      return Promise.reject(error);
    }
  );
}

function login(email: string, password: string): Promise<any> {
  return getUsers().then(data => {
    let foundUser;
    foundUser = data.filter(value =>  value.email === email );
    console.log(foundUser[0]);
    if (foundUser[0]){
      if (foundUser[0].password === password){
        const authData = {
          accessToken: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtY2V0a292aWMiLCJpYXQiOjE2MTk2Mjk2NzUsImV4cCI6MTYxOTYzODMxNX0.yeTkbDZttUAV4NZS-4HBL3GtekfcgZ0RvNGRsg130AEqH2WuY2qpSEtnNAbOWqphaWUph5BSLS67aEto4nMsBw',
          tokenType: 'Bearer',
          tokenExp: 3600,
          id: foundUser[0].id,
          cart: foundUser[0].cart
        };
        return Promise.resolve(authData);
      }else {
        return Promise.reject('Bad password');
      }
    }else {
      return Promise.reject('User does not exist in database. Email: ' + email);
    }
    },
    error => {
      return Promise.reject(error);
    });
}

function register(json: any): Promise<any> {
  return registerPrivate(json).then(
    data => {
      return  Promise.resolve(data);
    },
    error => {
      return Promise.reject(error);
    }
  );

}

async function registerPrivate(json: any): Promise<any>{
  return await axios.post('http://localhost:3000/users', json).then(
    response => {
      if (response.status === 201 || response.status === 200){
       return  Promise.resolve(response.data);
      }else {
        return Promise.reject({status: response.status, message: response.data});
      }
    },
    error => {
      return Promise.reject(error);
    }
  );
}

async function existByEmail(email: string): Promise<boolean>{
  return await axios.get('http://localhost:3000/users?email=' + email).then(
    response => {
      if ( response.status === 200 && response.data.length > 0){
        return Promise.resolve(true);
      }else {
        return Promise.resolve(false);
      }
    },
    error => {
      return Promise.reject(error);
    }
  );

}
