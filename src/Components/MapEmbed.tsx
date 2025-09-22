export default function MapEmbed() {
  const lat = 23.8103; // example latitude (Dhaka)
  const lng = 90.4125; // example longitude

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps?q=${lat},${lng}&hl=es;z=14&output=embed`}
      ></iframe>
    </div>
  );
}
