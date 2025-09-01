import Image from 'next/image'
function DayState({ day }: { day: boolean | undefined }) {
    let image: [string, string, number?] = ["/cicle.svg", "gray mark", 12]
    
    if (day) image = ["/check.svg", "Green Check", 18]
    if (day === false) image = ["/uncheck.svg", "Red uncheck", 18]
    
    const [src, alt, size] = image;
  return (
    <div className='flex items-center justify-center h-9'>
        <Image src={src} width={size} height={size} alt={alt}/>
    </div>
  )
}

export default DayState