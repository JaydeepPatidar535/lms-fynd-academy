import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <>
            <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
                <section className='text-lg text-red'>
                    Copyright {year} | All rights reserved Learnovation
                </section>
                <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300' href='https://github.com/JaydeepPatidar535/LMS---Lernovation' target='_blank'>
                        <BsGithub />
                    </a>
                    <a className='hover:text-yellow-500 transition-all ease-in-out duration-300' href='https://www.linkedin.com/in/jaydeep-patidar-810a1b253' target='_blank'>
                        <BsLinkedin />
                    </a>
                </section>
            </footer>
        </>
    );

}

export default Footer;