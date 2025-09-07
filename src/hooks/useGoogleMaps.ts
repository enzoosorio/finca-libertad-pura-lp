import { useState, useEffect } from 'react';

interface UseGoogleMapsReturn {
  isLoaded: boolean;
  loadError: boolean;
}

export const useGoogleMaps = (): UseGoogleMapsReturn => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    // Si ya está cargado
    if (window.google && window.google.maps) {
      setIsLoaded(true);
      return;
    }

    // Función que se ejecuta cuando Google Maps se carga
    const handleLoad = () => {
      if (window.google && window.google.maps) {
        setIsLoaded(true);
        setLoadError(false);
      } else {
        setLoadError(true);
      }
    };

    // Función que se ejecuta si hay error al cargar
    const handleError = () => {
      setLoadError(true);
      setIsLoaded(false);
    };

    // Si el script ya existe en el DOM
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    
    if (existingScript) {
      // Esperar a que se cargue
      if (window.google && window.google.maps) {
        handleLoad();
      } else {
        // Agregar listeners al script existente
        existingScript.addEventListener('load', handleLoad);
        existingScript.addEventListener('error', handleError);
      }
    } else {
      // Si no hay script, significa que hay un problema
      setLoadError(true);
    }

    // Cleanup
    return () => {
      if (existingScript) {
        existingScript.removeEventListener('load', handleLoad);
        existingScript.removeEventListener('error', handleError);
      }
    };
  }, []);

  return { isLoaded, loadError };
};
