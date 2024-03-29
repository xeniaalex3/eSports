import { MagnifyingGlassPlus } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';


export function CreateAdBanner() {
  return (
    <div className="pt-1 mt-9 bg-gradient self-stretch rounded-lg overflow-hidden">
    <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
      <div>
        <strong className="block text-white text-2xl font-black">
        Can't find your duo?{' '}
        </strong>

        <span className="block text-zinc-400 mt-2">
        Publish an ad to find new players{' '}
        </span>
      </div>

      <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
        <MagnifyingGlassPlus size={24} />
        Publish an ad
      </Dialog.Trigger>
    </div>
  </div>
  )
}