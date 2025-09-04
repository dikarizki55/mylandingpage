import Desktop from "./(Desktop)/Desktop";
import Mobile from "./(Mobile)/Mobile";

const pageProps = {
  home: {
    title: (
      <>
        Hi, I&apos;m Dika – <br />
        a Full Stack Developer <br /> & 3D Artist.
      </>
    ),
    image: "/landingpage/myphotos.png",
  },
  aboutme: {
    fullstack: {
      title: "Full Stack Developer",
      description: (
        <>
          Hi, I&apos;m Dika Rizki, a passionate Full Stack Developer with a
          fresh perspective and a strong drive to build meaningful web
          experiences. I specialize in modern JavaScript technologies like
          Next.js, React, and Express, and I enjoy crafting scalable and
          visually clean web applications.
          <br /> <br />
          Though I&apos;m a fresh graduate, I&apos;ve built several portfolio
          projects including SaaS-style websites that reflect both technical
          structure and design thinking. I love working remotely and constantly
          push myself to learn new technologies and stay up-to-date with the web
          ecosystem.
          <br /> <br />
          My approach combines logical architecture with visual clarity—bridging
          the gap between frontend experience and backend performance.
        </>
      ),
      image: "/portfolio/moneyjournal3.jpg",
    },
    artist: {
      title: "3d Artist",
      description: (
        <>
          {" "}
          I&apos;m Dika Rizki, a 3D Artist with hands-on experience in motion
          graphics and 3d Modeling. Using Blender as my main tool, I bring
          concepts to life through storytelling-driven visuals that connect with
          audiences.
          <br /> <br />
          I work remotely, collaborating on projects that require both creative
          direction and technical execution. Whether it’s animating dynamic
          scenes or designing immersive environments, I aim to craft visuals
          that feel intentional and engaging.
          <br /> <br />
          Currently, I’m focused on sharpening my skills and exploring new
          storytelling techniques through 3D.
        </>
      ),
      image: "/portfolio/watch.jpg",
    },
  },
  portfolio: {
    fullstack: {
      title: "Fullstack Developer",
      items: [
        {
          src: "/portfolio/cafepos.webp",
          title: "CafePos",
          description: (
            <span>
              From Design to Deployment: My CafePOS Project Over the past few
              weeks, I challenged myself to build a complete web application to
              sharpen my fullstack development skills. The result is CafePOS, a
              simple point-of-sale web app built with Next.js. I started from
              scratch, designing the UI in Figma, then bringing it to life with
              modern web technologies. It was a valuable journey — not only
              improving my coding skills, but also helping me understand how
              design and development connect in real-world projects. This
              application is optimized for mobile devices, as its features are
              designed to be used directly at the café table.
              <br />
              <br />
              <a
                className=" underline text-white"
                href="https://github.com/dikarizki55/cafepos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Feature
              </a>
              <br />
              <a
                className=" underline text-white"
                href="https://github.com/dikarizki55/cafepos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <br />
              <a
                className=" underline text-white"
                href="https://cafepos-git-main-dika-rizkis-projects.vercel.app/admin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dashboard Page
              </a>
            </span>
          ),
          link: "https://cafepos-git-main-dika-rizkis-projects.vercel.app/?table=2",
        },
        {
          src: "/portfolio/moneyjournal3.jpg",
          title: "Money Journal",
          description: (
            <span>
              Money Journal is a multi-user web application I built to help
              users track their daily income and expenses efficiently. Developed
              with Next.js (App Router), Tailwind CSS, shadcn/ui, and Supabase
              as the backend, the app features Google OAuth login powered by
              Auth.js
              <br />
              <br />I designed and developed the entire application from
              scratch, covering both the frontend and backend architecture. The
              app is deployed on Vercel for fast and scalable delivery.
            </span>
          ),
          link: "https://moneyjournal-git-main-dika-rizkis-projects.vercel.app/",
        },
        {
          src: "/portfolio/nikeLandingPage.webp",
          title: "Nike Landing Page",
          description: (
            <span>
              Nike Landing Page is a modern and interactive single-page website
              I built to explore advanced frontend animation techniques using
              Framer Motion. Designed for a smooth and engaging user experience,
              the page features animated sections, scroll-triggered effects, and
              dynamic UI transitions that bring the brand&apos;s visual energy
              to life.
              <br /> <br />
              Developed with Next.js (App Router) and Tailwind CSS, the project
              focuses entirely on frontend interaction and design polish,
              without backend integration. All animations are handcrafted to
              ensure fluid motion and responsive performance across devices.
            </span>
          ),
          link: "/nikelandingpage",
        },
      ],
    },
    artist: {
      title: "3d Artist",
      items: [
        {
          video: true,
          src: "https://zgqwlzpqthoiuspzjnin.supabase.co/storage/v1/object/public/mylandingpage/portfolio/watch.mp4",
          title: "Patek Philippe Aquanaut 5968A-001",
          description: (
            <span>
              I created a 3D product visualization of the Patek Philippe
              Aquanaut 5968A-001 as a practice in realistic modeling and
              rendering. This project was done entirely in Blender, using the
              Cycles Render Engine to achieve accurate lighting, materials, and
              overall realism. <br /> <br /> The process involved detailed
              modeling based on the real product, custom texturing, and careful
              lighting setup to highlight the watch’s iconic design and
              luxurious feel. My goal was to capture the essence of the original
              timepiece and present it in a clean, photorealistic visual.
            </span>
          ),
        },
        {
          video: true,
          src: "https://zgqwlzpqthoiuspzjnin.supabase.co/storage/v1/object/public/mylandingpage/portfolio/Woman%20Blender%20Character.mp4",
          title: "Cute Female Character",
          description: (
            <span>
              This is a personal project where I created a stylized 3D character
              of a young female with a cute/chibi-inspired design. The character
              was based on AI-generated references and fully built in Blender,
              from modeling to final rigging and animation. <br /> <br /> I
              developed a custom full-body rig, including facial controls and
              IK/FK systems, allowing the character to be fully animated. As
              part of this project, I also created a short test animation to
              demonstrate the rig&apos;s flexibility and usability for
              expressive motion.
            </span>
          ),
        },
      ],
    },
  },
};

export type PageProps = typeof pageProps;

const Page = () => {
  return (
    <div>
      <div className=" block xl:hidden">
        <Mobile {...pageProps}></Mobile>
      </div>
      <div className=" hidden xl:block">
        <Desktop {...pageProps}></Desktop>
      </div>
    </div>
  );
};

export default Page;
