"use client";

import Script from "next/script";
import { useCallback, useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Marker from "../Marker";
import data from "./data";

const mapId = "naver-map";

export type NaverMap = naver.maps.Map;

export default function Map({
  onChangeValue,
}: {
  onChangeValue: (value: string) => void;
}) {
  const mapRef = useRef<NaverMap>(null);

  const initializeMap = useCallback(() => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(35.886, 127.6),
      zoom: 7,
      scaleControl: true,
      mapDataControl: true,
      logoControlOptions: {
        position: naver.maps.Position.BOTTOM_LEFT,
      },
    };

    const map = new window.naver.maps.Map(mapId, mapOptions);
    mapRef.current = map;

    data.forEach((diocese) => {
      const markerContainer = document.createElement("div");
      markerContainer.className = "custom-marker";

      const root = createRoot(markerContainer);
      root.render(<Marker onClick={() => onChangeValue(diocese.name)} />);

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(
          diocese.latitude,
          diocese.longitude
        ),
        map,
        icon: {
          anchor: new naver.maps.Point(15, 30),
          content: markerContainer,
        },
      });
    });
  }, [onChangeValue]);

  useEffect(() => {
    if (window.naver && window.naver.maps) {
      initializeMap();
    }
  }, [initializeMap]);

  return (
    <div>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&submodules=geocoder`}
        onLoad={initializeMap}
      />
      <div id={mapId} className="aspect-[7/6] w-full bg-gray-200" />
    </div>
  );
}
