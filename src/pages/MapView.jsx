import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import HeroSection from "@/components/common/HeroSection";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SelectOptions } from "@/components/common/SelectOptions";
import { DatePickerWithRange } from "@/components/common/RangePicker";
import { SelectNotifications } from "@/components/common/SelectNotification";

// Fix for default marker icon in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// eslint-disable-next-line react/prop-types
function LocationMarker({ onLocationSelect }) {
  const [position, setPosition] = useState(null);

  const map = useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
        );
        const data = await response.json();
        console.log(data);
        const address = data.display_name || "Address not found";
        onLocationSelect({
          latitude: lat.toFixed(6),
          longitude: lng.toFixed(6),
          address,
        });
      } catch (error) {
        console.error("Error fetching address:", error);
        onLocationSelect({
          latitude: lat.toFixed(6),
          longitude: lng.toFixed(6),
          address: "Error fetching address",
        });
      }
    },
  });

  return position ? <Marker position={position} /> : null;
}

export default function MapView() {
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
    address: "",
    cloud: "",
    date: "",
    notificationTime: "",
    notificationMethod: "",
  });

  const data = [
    { Path: 1, Row: 22, Lat: 34.5, Long: -112.3, L8_Next_Acq: "2024-10-15", L9_Next_Acq: "2024-11-01" },
    { Path: 2, Row: 25, Lat: 38.1, Long: -120.8, L8_Next_Acq: "2024-10-16", L9_Next_Acq: "2024-11-02" },
  ];
  return (
    <div className="bg-black">
      <HeroSection />
      <div className="max-w-4xl mx-auto p-4 mt-10">
        <div className="bg-muted rounded-lg shadow-lg p-6 border-2">
          <h1 className="text-2xl font-bold text-center text-white mb-4">
            Map Location Selector
          </h1>

          <div className="h-[400px] rounded-lg overflow-hidden mb-4">
            <MapContainer
              center={[37.7749, -122.4194]}
              zoom={13}
              className="h-full w-full"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <LocationMarker onLocationSelect={setLocation} />
            </MapContainer>
          </div>

          <div className="space-y-4 text-white font-medium">
            <div>
              <Label className="ml-1">
                Latitude
              </Label>
              <Input
                type="text"
                value={location.latitude}
                readOnly
                className="mt-2"
              />
            </div>

            <div>
              <Label className="ml-1">
                Longitude
              </Label>
              <Input
                type="text"
                value={location.longitude}
                readOnly
                className="mt-2"
              />
            </div>

            <div>
              <Label className="ml-1">
                Address
              </Label>
              <Input
                type="text"
                value={location.address}
                readOnly
                className="mt-2"
              />
            </div>

            <div>
              <Label className="ml-1">
                Cloud Coverage Threshold (%)
              </Label>
              <SelectOptions />
            </div>

            <div>
              <Label className="ml-1">
                Date Range
              </Label>
              <DatePickerWithRange />
            </div>
            <div>
              <Label className="ml-1">
                Notification Lead Time (hours)
              </Label>
              <SelectNotifications />
            </div>
            <div>
              <Label className="ml-1">
                Enter your email for notification
              </Label>
              <Input
                type="text"
                value={location.notificationMethod}
                className="mt-2"
              />
            </div>
            <div className="flex justify-between">
              <Button>Search</Button>
              <Button>Download Data</Button>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center text-white mt-12">
            Next Landsat Acquisition
          </h1>
          <div className="text-white mt-8">
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid white', padding: '8px' }}>Path</th>
                  <th style={{ border: '1px solid white', padding: '8px' }}>Row</th>
                  <th style={{ border: '1px solid white', padding: '8px' }}>Lat</th>
                  <th style={{ border: '1px solid white', padding: '8px' }}>Long</th>
                  <th style={{ border: '1px solid white', padding: '8px' }}>L8 Next Acq</th>
                  <th style={{ border: '1px solid white', padding: '8px' }}>L9 Next Acq</th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', border: '1px solid white', padding: '8px' }}>
                      No data available
                    </td>
                  </tr>
                ) : (
                  data.map((item, index) => (
                    <tr key={index}>
                      <td style={{ border: '1px solid white', padding: '8px' }}>{item.Path}</td>
                      <td style={{ border: '1px solid white', padding: '8px' }}>{item.Row}</td>
                      <td style={{ border: '1px solid white', padding: '8px' }}>{item.Lat}</td>
                      <td style={{ border: '1px solid white', padding: '8px' }}>{item.Long}</td>
                      <td style={{ border: '1px solid white', padding: '8px' }}>{item.L8_Next_Acq}</td>
                      <td style={{ border: '1px solid white', padding: '8px' }}>{item.L9_Next_Acq}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}