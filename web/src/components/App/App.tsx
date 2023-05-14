import * as Dialog from '@radix-ui/react-dialog'
import { GameBanner } from '../GameBanner/GameBanner'
import { CreateAdBanner } from '../CreateAdBanner/CreateAdBanner'
import { CreateAdModal } from '../CreateAdModal/CreateAdModal'
import { games } from '../../services/games'


import '../../styles/main.css'

// import images and logo
import logo from '../../assets/logo.svg'

interface Game {
  id: string
  name: string
  cover: string
  ads: string
  
}

function App() {

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="logo" />
      <h1 className="text-6xl text-white font-black mt-20">
      Your{' '}
        <span className=" text-transparent bg-gradient bg-clip-text">duo</span>{' '}
        is here.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              cover={game.cover}
              name={game.name}
              ads={game.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
