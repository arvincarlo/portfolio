import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const  footerLinks =[
  {
    'title': "LinkedIn",
    'href': "https://www.linkedin.com/in/arvin-carlo-cris-a2412511a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    'title': "JobStreet",
    'href': "https://ph.jobstreet.com/profile/arvincarlo-cris-1VsRDWByXz",
  },
  {
    'title': "Github",
    'href': "https://github.com/arvincarlo",
  },
]

export const Footer = () => {
  return <footer className='relative overflow-x-clip'>
    <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
    <div className="container">
      <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
        <div className='text-white/40'>&copy; 2024. All rights reserved.</div>
        <nav className='flex flex-col md:flex-row items-center gap-8'>
          {footerLinks.map(link => (
            <a href={link.href} target="_blank" key={link.title} className='inline-flex items-center gap-1.5 cursor-pointer z-20'>
              <span className='font-semibold'>{link.title}</span>
              <ArrowUpRightIcon className="size-4"/>
            </a>
          ))}
        </nav>
      </div>
    </div>
  </footer>;
};
