export default function Footer() {
  return (
    <footer className="mt-4 mx-6 mb-6 pt-8 border-t border-black flex justify-between items-center text-[10px] text-black font-medium uppercase tracking-widest">
      <span>Sydney, Australia</span>
      <div className="flex gap-4">
        <a href="https://github.com/WillGaston" target='_blank' className="hover:text-orange-600 transition-colors">Github</a>
        <a href="https://www.linkedin.com/in/willgaston1/" target='_blank' className="hover:text-orange-600 transition-colors">LinkedIn</a>
       </div>
    </footer>
  )
}