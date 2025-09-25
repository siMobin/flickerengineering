export default function MapEmbed() {
  // 23.752472939510906, 90.41570219571854
  const lat = 23.752472939510906; // example latitude (Dhaka)
  const lng = 90.41570219571854; // example longitude

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
