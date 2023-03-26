import React, { useState } from 'react';
import Pickup from './Pickup';
import Dropoff from './Dropoff';
import axios from 'axios';

const DeliveryRequest = ({ apiKey }) => {
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropoffLocation, setDropoffLocation] = useState(null);
  const [items, setItems] = useState([]);

  const sendDeliveryRequest = () => {
    const deliveryUrl = 'https://api.uber.com/v1/deliveries/request';

    const deliveryHeaders = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    };

    const deliveryData = {
      pickup: {
        location: pickupLocation
      },
      dropoff: {
        location: dropoffLocation
      },
      items: items
    };

    axios.post(deliveryUrl, deliveryData, { headers: deliveryHeaders })
      .then(response => {
        console.log(response.data);
        // Handle successful response
      })
      .catch(error => {
        console.error(error);
        // Handle error
      });
  };

  const handlePickupLocationChange = (location) => {
    setPickupLocation(location);
  };

  const handleDropoffLocationChange = (location) => {
    setDropoffLocation(location);
  };

  const handleItemsChange = (newItems) => {
    setItems(newItems);
  };

  return (
    <div>
      <h2>Delivery Request</h2>
      <Pickup onLocationChange={handlePickupLocationChange} />
      <Dropoff onLocationChange={handleDropoffLocationChange} />
      <Items onItemsChange={handleItemsChange} />
      <button onClick={sendDeliveryRequest}>Send Delivery Request</button>
    </div>
  );
};

export default DeliveryRequest;
