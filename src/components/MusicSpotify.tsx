export function MusicSportify() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-[65%]">
      <iframe
        src="https://open.spotify.com/embed/artist/0zOgrfCrPbkvSKB4KUEbj4?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1E4vm02ABLVz6b?utm_source=generator&theme=0"
        width="100%"
        height="152"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="max-md:pb-10"
      ></iframe>
    </div>
  )
}
