interface GameBannerProps {
 cover: string,
 name: string,
 ads: string,
}

export function GameBanner(props: GameBannerProps) {
 


  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={props.cover} alt="image 1" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">
          {props.name}
        </strong>
        <span className="text-zinc-300 text-sm block mt-1">{props.ads} ad(s)</span>
      </div>
    </a>
  )
}
