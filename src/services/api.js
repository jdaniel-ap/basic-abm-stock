import axios from 'axios';

export const addItem = async (data) => {
  const request = await axios({
    method: 'post',
    data: {
      ...data
    },
    url: 'https://crudcrud.com/api/64ab3ba533e54300840fb0bdf98607b9/items',
  }).catch(err => console.log(err.response));

  return request;
}

export const deleteItem = async (id) => {
  const request = await axios({
    method: 'delete',
    url: `https://crudcrud.com/api/64ab3ba533e54300840fb0bdf98607b9/items/${id}`,
  }).catch(err => console.log(err.response));

  return request;
}

export const getItems = async () => {
  const request = await axios({
    method: 'get',
    url: 'https://crudcrud.com/api/64ab3ba533e54300840fb0bdf98607b9/items',
  }).catch(err => console.log(err.response));

  return request;
}

export const getItem = async (id) => {
  const request = await axios({
    method: 'get',
    url: `https://crudcrud.com/api/64ab3ba533e54300840fb0bdf98607b9/items/${id}`,
  }).catch(err => console.log(err.response));

  return request;
}

export const editItem = async (id, details) => {
  const request = await axios({
    method: 'put',
    data: {
      ...details
    },
    url: `https://crudcrud.com/api/64ab3ba533e54300840fb0bdf98607b9/items/${id}`,
  }).catch(err => console.log(err.response));
  console.log(request)
  return request;
}
