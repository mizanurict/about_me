
const Skills = () => {
    return (
        <div className="h-screen relative">
            <h1 data-aos="fade-down" data-aos-duration="1000" className="text-2xl font-bold underline text-center">Skills</h1>
            <div className="my-32 grid gap-4 justify-center md:grid-cols-3 lg:grid-cols-3 md:w-[470px] lg:w-[470px] mx-auto rotate-45">
                <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" data-aos-easing="ease"
                data-aos-anchor="#skill-anchor"
                className="bg-slate-100 size-36 mx-auto">
                    <img className="-rotate-45 origin-center p-4 size-36 mx-auto object-contain" src="https://i.postimg.cc/DypwTWyF/html-5-icon-726x1024-evem6gg5-removebg-preview.png" alt="html" />
                    
                </div>
                <div data-aos="fade-left" data-aos-duration="900" data-aos-delay="300" data-aos-easing="ease"
                data-aos-anchor="#skill-anchor"    className="bg-slate-100 size-36 mx-auto">
                    <img className="-rotate-45 origin-center p-4 size-36 mx-auto object-contain" src="https://i.postimg.cc/HL2NqMd9/486-4864508-css-logo-png-transparent-png-removebg-preview.png" alt="css" />
                    
                </div>
                <div data-aos="fade-left" data-aos-duration="900" data-aos-delay="300" data-aos-easing="ease"
                data-aos-anchor="#skill-anchor"
                    className="bg-slate-100 size-36 mx-auto">
                    <img className="-rotate-45 origin-center p-4 size-36 mx-auto object-contain"  src="https://i.postimg.cc/k49z2cXS/javascript-logo.png" alt="javascript" />
                </div>
                <div data-aos="fade-right" data-aos-duration="900" data-aos-delay="300" data-aos-easing="ease"
                   data-aos-anchor="#skill-anchor" 
                    className="bg-slate-100 size-36 mx-auto">
                    <img className="-rotate-45 origin-center p-4 size-36 mx-auto object-contain"  src="https://i.postimg.cc/jjYT9jLx/React-icon-svg-removebg-preview.png" alt="React" />
                </div>
                <div data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="0" data-aos-easing="ease-in" data-aos-anchor="#skill-anchor" className="bg-slate-100 size-36 mx-auto">
                    <img className="-rotate-45 origin-center p-4 size-36 mx-auto object-contain"  src="https://i.postimg.cc/9MNN6xJd/1-bc9pm-Tiy-KR0-WNPka2w3e0-Q.png" alt="Node" />
                </div>
                <div data-aos="fade-left" data-aos-duration="900" data-aos-delay="300" data-aos-easing="ease" data-aos-anchor="#skill-anchor" className="bg-slate-100 size-36 mx-auto">
                    <img className="-rotate-45 origin-center p-4 size-36 mx-auto object-contain"  src="https://i.postimg.cc/d0NbFt0Z/0-vq-JSMyn-SHUPXx70.jpg" alt="Express" />
                </div>
                <div data-aos="fade-right" data-aos-duration="900" data-aos-delay="300" data-aos-easing="ease" data-aos-anchor="#skill-anchor" className="bg-slate-100 size-36 mx-auto">
                    <img className="-rotate-45 origin-center p-4 size-36 mx-auto object-contain"  src="https://i.postimg.cc/yxmpDV7P/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail-removebg-preview.png" alt="Mongodb" />
                </div>
                <div data-aos="fade-right" data-aos-duration="900" data-aos-delay="300" data-aos-easing="ease"  data-aos-anchor="#skill-anchor" className="bg-slate-100 size-36 mx-auto">
                    <img className="-rotate-45 origin-center p-4 size-36 mx-auto object-contain"  src="https://i.postimg.cc/QdwgZ23x/png-transparent-mysql-round-logo-tech-companies-thumbnail.pngg" alt="MySQL" />
                </div>
                <div data-aos="fade-down" data-aos-duration="1200" data-aos-delay="300" data-aos-easing="ease" data-aos-anchor="#skill-anchor" className="bg-slate-100 size-36 mx-auto">
                    <img className="-rotate-45 origin-center p-4 size-36 mx-auto object-contain"  src="https://i.postimg.cc/QMc7GVm0/images-2-removebg-preview.png" alt="Github" />
                </div>
                
            </div>
            <div id="skill-anchor" className="absolute size-4 bg-green-500 right-0 bottom-[30%]"></div>
        </div>
    );
};

export default Skills;