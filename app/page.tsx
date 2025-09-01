import DayState from '@/components/DayState';
import Image from 'next/image'
import Link from 'next/link';
export default function Home() {
  const habits = {
    "beber água": {
      "2025-08-26": true,
      "2025-08-25": false,
      "2025-08-24": true,
    },
    "estudar nextJS": {
      "2025-08-26": true,
      "2025-08-25": true,
      "2025-08-24": true,
    },
  };

  const today = new Date();
  const tadayWeekDay = today.getDay(); // 0 (Domingo) a 6 (Sábado)
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]

  const sortedWeekDays = weekDays.slice(tadayWeekDay + 1).concat(weekDays.slice(0, tadayWeekDay + 1))
  
  return (
    <main className="container relative flex flex-col gap-8 px-4 pt-16 text-center">
      {habits === null ||
        (Object.keys(habits).length === 0 && (
          <h1 className="mt-20 text-4xl font-light text-white font-display">
            Você não tem hábitos cadastrados!
          </h1>
        ))}
      {habits !== null &&
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xl font-light text-white text-light">{habit}</span>
              <button>
                <Image
                  src="/trash.svg"
                  alt="Deletar hábito"
                  width={20}
                  height={20}
                  className="hover:opacity-70"
                />
              </button>
            </div>
            <div className='grid grid-cols-7 gap-3 p-3 mt-3 rounded-lg bg-neutral-800'>
              {
                sortedWeekDays.map((day) => (
                  <div key={day} className='flex flex-col last:font-bold'>
                    <span className='font-sans text-xs text-center text-white'>{day}</span>
                    <DayState day={false}/>
                  </div>
                ))
              }
            </div>
          </div>
        ))}

        <Link href="novo-habito" className='fixed w-2/3 text-center bottom-10 left-1/2 -translate-x-1/2 text-neutral-900 bg-[#45EDAD] font-dispaly font-regular text-2xl p-2 rounded-md'>novo hábito</Link>
    </main>
  );
}
