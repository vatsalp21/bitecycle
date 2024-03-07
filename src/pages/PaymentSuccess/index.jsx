import { useState, useEffect } from "react";
import { Alert } from "../../components/elements/Alert";

const handleButtonClick = () => {
  fetch("http://localhost:8080/send-email", { method: "POST" })
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error("Error:", error));
};

const PaymentSuccess = () => {
  const names = [
    "Himank Sharma",
    "Moses Kummeth",
    "Vatsal Pandey",
    "Merry Don",
    "Hong Linh",
  ];
  const [deliveryData] = useState({
    deliveryPerson: names[Math.floor(Math.random() * names.length)],
    deliveryDate: "February 25, 2024",
  });

  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const accessToken =
    "pk.eyJ1IjoicHJlZGFrIiwiYSI6ImNrbzZ2NnZ6aDFwbHoyb2x5dmFpczcweXoifQ.8Y9xrsJYO4qDhI39KyjzUQ";

  // Map URL for tracking
  const mapUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+2f4f4f(${
    currentLocation
      ? `${currentLocation.lng},${currentLocation.lat}`
      : "DEFAULT_LOCATION"
  })/${
    currentLocation
      ? `${currentLocation.lng},${currentLocation.lat}`
      : "DEFAULT_LOCATION"
  },15,0,0/800x400?access_token=${accessToken}`;

  return (
    <div className="max-w-lg mx-auto p-4 bg-green-100 rounded-lg shadow-lg ">
      <Alert variant="success">
        Your payment was successful! Check your email for updates!
      </Alert>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-yellow-600">
          Delivery Details:
        </h2>
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <p>
            <strong>Delivery Person:</strong> {deliveryData.deliveryPerson}
          </p>
          <p className="mt-1">
            <strong>Delivery Date:</strong> {deliveryData.deliveryDate}
          </p>
        </div>
        {/* Add map for tracking */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-yellow-600">
            Track Your Order:
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md mt-4">
            <img
              alt="Map"
              width="100%"
              height="400"
              src={mapUrl}
              className="mt-2"
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
