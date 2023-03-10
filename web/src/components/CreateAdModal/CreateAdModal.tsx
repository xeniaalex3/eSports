import { Check, GameController } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Input } from '../Form/Input';
import { useEffect, useState } from 'react';

interface Game {
  id: string
  title: string
}

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);

  console.log(weekDays);

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])
  
  return (

    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-2xl font-black">
        Publish an ad
        </Dialog.Title>

        <form className='mt-8 flex flex-col gap-4'>
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className='text-base'>Which game?</label>
            <select 
            id='game' 
            className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
            defaultValue=""
            >
            <option disabled value="">Select the game you want to play</option>

            {games.map(game => {
              return (
                <option key={game.id} value={game.id}>{game.title}</option>
              )
            })}
            </select>
          </div>

          <div className='flex flex-col gap-2 mt-3'>
            <label htmlFor="name" className='text-base'>Your name (or nickname)</label>
            <Input id='name' placeholder='Como te chamam dentro do game?' />
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="yearsPlaying" className='text-base'>How many years have you been playing?</label>
              <Input id='yearsPlaying' placeholder='Tudo bem ser ZERO' type="number" />
            </div>

            <div className='flex flex-col gap-8'>
              <label htmlFor="discord" className='text-base'>What is your Discord?</label>
              <Input id='discord' placeholder='Usuario#0000' type="text" />
            </div>
          </div>

          <div className='flex gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="weekDays">When do you usually play?</label>
              
              <ToggleGroup.Root type='single' className='grid grid-cols-4 gap-2' value={weekDays} onValueChange={setWeekDays}>
                <ToggleGroup.Item value='1' 
                className={`w-8 h-8 rounded ${weekDays.includes('1') ? "bg-violet-500" : "bg-zinc-900"}`} title='Monday'>M</ToggleGroup.Item>
                <ToggleGroup.Item value='2' className={`w-8 h-8 rounded ${weekDays.includes('2') ? "bg-violet-500" : "bg-zinc-900"}`} title='Tuesday'>T</ToggleGroup.Item>
                <ToggleGroup.Item value='3' className={`w-8 h-8 rounded ${weekDays.includes('3') ? "bg-violet-500" : "bg-zinc-900"}`} title='Wednesday'>W</ToggleGroup.Item>
                <ToggleGroup.Item value='4' className={`w-8 h-8 rounded ${weekDays.includes('4') ? "bg-violet-500" : "bg-zinc-900"}`} title='Thursday'>T</ToggleGroup.Item>
                <ToggleGroup.Item value='5' className={`w-8 h-8 rounded ${weekDays.includes('5') ? "bg-violet-500" : "bg-zinc-900"}`} title='Friday'>F</ToggleGroup.Item>
                <ToggleGroup.Item value='6' className={`w-8 h-8 rounded ${weekDays.includes('6') ? "bg-violet-500" : "bg-zinc-900"}`} title='Saturday'>S</ToggleGroup.Item>
                <ToggleGroup.Item value='7' className={`w-8 h-8 rounded ${weekDays.includes('7') ? "bg-violet-500" : "bg-zinc-900"}`} title='Sunday'>S</ToggleGroup.Item>
                </ToggleGroup.Root>

            </div>
            <div className='flex flex-col gap-2 flex-1'>
              <label htmlFor="hourStart">What time of day?</label>
              <div className='grid grid-cols-2 gap-2'>
                <input id="hourStart" type="time" placeholder='De' />
                <input id="hourEnd" type="time" placeholder='Ate' />
              </div>
            </div>
          </div>
          <div className='mt-2 flex items-center gap-2 text-sm'>
           <Checkbox.Root className="w-6 h-6 p-1 rounded bg-zinc-900">
            <Checkbox.Indicator>
              <Check className='w-4 h-4 text-emerald-400'/>
            </Checkbox.Indicator>
           </Checkbox.Root>
           I usually connect to voice chat
          </div>
          <footer className='mt-4 flex justify-between gap-4'>
            <Dialog.Close
              className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
              type='button'
            >
              Cancel
            </Dialog.Close>
            <button
              type='submit'
              className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'

            >
              <GameController size={24} />
              Find duo
            </button>
          </footer>
        </form>

      </Dialog.Content>
    </Dialog.Portal>

  );
}