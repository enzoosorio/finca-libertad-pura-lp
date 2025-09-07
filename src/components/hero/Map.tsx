import { useEffect, useRef } from "react";
import { useGoogleMaps } from "../../hooks/useGoogleMaps";

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
}

const GoogleMapa = ({ center = { lat: -12.0464, lng: -77.0428 }, zoom = 15 }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { isLoaded, loadError } = useGoogleMaps();

  useEffect(() => {
    if (!isLoaded || !mapRef.current) {
      return;
    }

    const initializeMap = async () => {
      // Importar las librerías necesarias de forma moderna
      const { Map } = await window.google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

      // Crear el mapa con estilos personalizados
      const map = new Map(mapRef.current!, {
        center,
        zoom,
        mapId: "DEMO_MAP_ID",
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: false,
        fullscreenControl: true,
      });
      new AdvancedMarkerElement({
        map,
        position: center,
        title: "Finca Libertad Pura"
      });

      new window.google.maps.Circle({
        strokeColor: '#10B981',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#10B981',
        fillOpacity: 0.15,
        map,
        center: center,
        radius: 1000
      });
    };

    initializeMap().catch(console.error);

  }, [isLoaded, center.lat, center.lng, zoom]);

  // Estados de carga
  if (loadError) {
    return (
      <div className="w-full h-[400px] bg-gray-100 rounded-lg shadow-md flex items-center justify-center">
        <div className="text-center text-gray-600">
          <div className="text-4xl mb-2">🗺️</div>
          <p className="font-body">Error al cargar el mapa</p>
          <p className="text-sm font-roboto">Intenta recargar la página</p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-[400px] bg-gray-50 rounded-lg shadow-md flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="animate-spin w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full mx-auto mb-2"></div>
          <p className="font-body">Cargando mapa...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">      
      {/* Mapa principal */}
      <div 
        ref={mapRef} 
        className="w-full h-[400px] rounded-lg shadow-md"
        style={{ minHeight: "300px" }}
      />
      
    </div>
  );
};

export default GoogleMapa;