# Authentication

Programming language, Architecture, implementation, performance

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install npm.

```bash
npm install 
```

## Execute project

```start
npm run dev
```

## Usage user crud

* to use the paths: create, update, delete you must register a userio with role admin to be able to use all the functionalities of this api.
* the userio model works under JWT to generate the userio token, to use the paths you must send in the headers an "authorization" to be able to use these paths 

```javascript
router.post('/save_user', saveUser);
router.post('/login', loginUser);
router.get('/get_users', md_auth.auth, getUsers);
router.get('/get_users/q', md_auth.auth, getUser);
router.get('/get_user/:id',md_auth.auth , getUserById);
```
## Example

* Register:
URL:
http://localhost:4000/demo/save_user

Body:
```json
{
    "name": "David",
    "surname": "jDavid",
    "nick": "jDavid",
    "email": "jDavid@test@gmail.com",
    "password": "david12345",
    "role": "admin",
}
```

* Login:
URL:
http://localhost:4000/demo/login

Body:
```json
{
    "email": "jDavid@test@gmail.com",
    "password": "david12345",
    "gettoken": true
}
```

* Get users:
http://localhost:4000/demo/get_users


* Get user:
http://localhost:4000/demo/get_user/5ef8bc771e12b73d04c38226

Params:
user_id

* Get users:
http://localhost:4000/demo/get_carriers/q?role=admin

Params:
receives any parameter

## Usage carrier crud

```javascript
router.post('/create_carrier', saveCarrier);
router.get('/get_carriers', getCarriers);
router.get('/get_carriers/q', getCarrier);
router.get('/get_carrier/:id', getCarrierById);
router.delete('/delete_carrier/:id', deleteCarrier);
router.put('/update_carrier/:id', updateCarrier);
```
## Example

* Register:
URL:
http://localhost:4000/demo/create_carrier

Headers:
      KEY          VALUE
  authorization -> Token 

Body:
```json
{
    "name": "",
    "scac": "",
    "mc": "",
    "dot": "",
    "fein": ""
}
```

* Get carriers:
http://localhost:4000/demo/get_carriers


* Get carrier:
http://localhost:4000/demo/get_carrier/5ef8bc771e12b73d04c38226

Params:
carrier_id

* Get carriers:
http://localhost:4000/demo/get_carriers/q?name=R%26L CARRIERS&scac=RNLO

Params:
receives any parameter

* delete carrier:
http://localhost:4000/demo/delete_carrier/5ef8bc771e12b73d04c38226

Headers:
      KEY          VALUE
  authorization -> Token 

Params:
carrier_id

* update carrier:
http://localhost:4000/demo/update_carrier/5ef8bc771e12b73d04c38226

Params:
carrier_id

Headers:
      KEY          VALUE
  authorization -> Token 

Body:
```json
{
    "name": "",
    "scac": "",
    "mc": "",
    "dot": "",
    "fein": ""
}
```

## Usage shipment crud

```javascript
router.post('/create_shipment', saveShipment);
router.get('/get_shipments', getShipments);
router.get('/get_shipments/q', getShipment);
router.get('/get_shipment/:id', getShipmentById);
router.put('/update_shipment/:id', updateShipment);
router.delete('/delete_shipment/:id', deleteShipment);
```
## Example

* Register:
URL:
http://localhost:4000/demo/create_shipment

Headers:
      KEY          VALUE
  authorization -> Token 

Body:
```json
{
    "origin_country": "USA",
    "origin_state": "FL",
    "origin_city": "Davie",
    "destination_country": "USA",
    "destination_state": "MI",
    "destination_city": "Holland",
    "pickup_date": "2020-03-18T00:42:48.000Z",
    "delivery_date": "1970-01-01T00:00:00.000Z",
    "status": "Delivered",
    "carrier_rate": "1155"
}
```


* Get shipment:
http://localhost:4000/demo/get_shipments


* Get shipment:
http://localhost:4000/demo/get_shipment/5ef8bc771e12b73d04c38226

Params:
shipment_id

* Get shipment:
http://localhost:4000/demo/get_shipments/q?provider=Falabella&address=CHINA

Params:
receives any parameter

* delete shipment:
http://localhost:4000/demo/delete_shipment/5ef8bc771e12b73d04c38226

Headers:
      KEY          VALUE
  authorization -> Token 

Params:
shipment_id

* update shipment:
http://localhost:4000/demo/update_shipment/5ef8bc771e12b73d04c38226

Params:
shipment_id

Headers:
      KEY          VALUE
  authorization -> Token 

Body:
```json
{
    "origin_country": "USA",
    "origin_state": "FL",
    "origin_city": "Davie",
    "destination_country": "USA",
    "destination_state": "MI",
    "destination_city": "Holland",
    "pickup_date": "2020-03-18T00:42:48.000Z",
    "delivery_date": "1970-01-01T00:00:00.000Z",
    "status": "Delivered",
    "carrier_rate": "1155"
}
```

## Usage order crud

```javascript
router.post('/create_order', saveOrder);
router.get('/get_orders', getOrders);
router.get('/get_orders/q', getOrder);
router.get('/get_order/:id', getOrderById);
router.put('/update_order/:id', updateOrder);
router.delete('/delete_order/:id', deleteOrder);
```
## Example

* Register:
URL:
http://localhost:4000/demo/create_order

Headers:
      KEY          VALUE
  authorization -> Token 

Body:
```json
{
    "provider": "libre mercado",
    "address": "CHINA",
    "phone": "322293733",
    "description_order": "mesa de cosina",
    "quantity": 1,
    "unit_price": 1500000,
    "total_price": 2000000,
    "delivery_date": "06/30/2020",
    "carrier_id": "5efa0bf59c1d6a370c931acc"
}
```

* Get shipment:
http://localhost:4000/demo/get_orders


* Get shipment:
http://localhost:4000/demo/get_order/5ef8bc771e12b73d04c38226

Params:
order_id

* Get shipment:
http://localhost:4000/demo/get_orders/q?provider=Falabella&address=CHINA

Params:
receives any parameter

* delete shipment:
http://localhost:4000/demo/delete_order/5ef8bc771e12b73d04c38226

Headers:
      KEY          VALUE
  authorization -> Token 

Params:
order_id

* update shipment:
http://localhost:4000/demo/update_order/5ef8bc771e12b73d04c38226

Headers:
      KEY          VALUE
  authorization -> Token 

Params:
order_id

Body:
```json
{
    "provider": "libre mercado",
    "address": "CHINA",
    "phone": "322293733",
    "description_order": "mesa de cosina",
    "quantity": 1,
    "unit_price": 1500000,
    "total_price": 2000000,
    "delivery_date": "06/30/2020",
    "carrier_id": "5efa0bf59c1d6a370c931acc"
}
```

## License
[MIT](https://choosealicense.com/licenses/mit/)