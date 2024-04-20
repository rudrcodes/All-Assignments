import { useRef, useState } from 'react'
import { motion, useScroll, useSpring } from "framer-motion"
import './App.css'
import './style.css'

function App() {
  // const [BGColor, setBGColor] = useState(false);
  const [FontColor, setFontcolor] = useState('black');
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress)


  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })


  console.log(scrollYProgress)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 90) {
      // setBGColor(true)
      setFontcolor('white')
    }
    else {
      // setBGColor(false)
      setFontcolor('black')
    }
  })

 window.addEventListener('mouseup', () => {
setFontcolor('purple')
  })
  window.addEventListener('mouseout', () => {
    setFontcolor('red')
      })
  return (
    <>
      {/* <motion.div
        className="progress-bar"
        style={{ scaleX }}
      /><h1>sad</h1> */}
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quod quam adipisci, assumenda hic alias facere ipsa nostrum dolorum fugit accusamus dicta in deserunt cupiditate ipsam aspernatur quia blanditiis obcaecati vitae porro vel maxime voluptate tempore! Doloribus voluptatibus reprehenderit obcaecati hic molestias. Blanditiis dolore quae non doloremque, laboriosam incidunt quos. Molestias veritatis rerum unde vitae! Impedit dolores voluptates iusto sunt, fugit omnis excepturi voluptatum, soluta aut rem aperiam sint ipsa exercitationem quod dicta aspernatur, hic harum! Harum dolor, accusantium perferendis error voluptatem impedit, molestias, facere doloribus quas dolorem cum fugit temporibus blanditiis natus nisi facilis dignissimos ea minima a quos laboriosam perspiciatis unde molestiae odit. Asperiores necessitatibus perspiciatis quisquam, consequatur quaerat eaque placeat sit ducimus nam sequi voluptates debitis maxime eo, reprehenderit aspernatur architecto animi aliquam necessitatibus temporibus quibusdam corporis impedit harum dolorum est, sed facilis labore accusamus eum! Autem quas totam molestias hic ipsa rerum quisquam consequuntur delectus, animi a, quidem fugit in distinctio blanditiis fuga aut repellat! Iusto, commodi. Dolore commodi ullam distinctio facilis! Odit quam provident dignissimos, cumque voluptas expedita porro quos possimus esse assumenda distinctio aut veritatis ratione ea illo natus quaerat corrupti ut et perspiciatis pariatur, reiciendis repellendus minus id! Accusamus, consectetur architecto accusantium quidem voluptas dolor tempora facilis doloremque commodi similique at dignissimos iure fugit quasi neque quos, atque earum suscipit eum obcaecati reprehenderit? Fugiat minus blanditiis velit culpa, ipsum magni r modi architecto eaque. Sequi similique animi, voluptatum rem qui deserunt accusamus nam non et soluta maiores culpa, incidunt corrupti illum cumque consequatur, architecto illo. Alias expedita aspernatur totam optio. Dolorem deleniti dignissimos asperiores dicta, quasi quos quaerat autem rerum minus officiis error aliquid odit eaque eveniet officia inventore veritatis possimus fugiat, necessitatibus est ea eligendi hic. Amet adipisci facere doloribus. Amet reprehenderit odit ad sint veniam? Odit cumque mollitia libero aliquid hic reprehenderit quibusdam repellat eius quisquam repellendus ab, facilis velit eligendi blanditiis veniam tenetur sapiente molestiae?am incidunt quos. Molestias veritatis rerum unde vitae! Impedit dolores voluptates iusto sunt, fugit omnis excepturi voluptatum, soluta aut rem aperiam sint ipsa exercitationem quod dicta aspernatur, hic harum! Harum dolor, accusantium perferendis error voluptatem impedit, molestias, facere doloribus quas dolorem cum fugit temporibus blanditiis natus nisi facilis dignissimos ea minima a quos laboriosam perspiciatis unde molestiae odit. Asperiores necessitatibus perspiciatis quisquam, consequatur quaerat eaque placeat sit ducimus nam sequi voluptates debitis maxime eo, reprehenderit aspernatur architecto animi aliquam necessitatibus temporibus quibusdam corporis impedit harum dolorum est, sed facilis labore accusamus eum! Autem quas totam molestias hic ipsa rerum quisquam consequuntur delectus, animi a, quidem fugit in distinctio blanditiis fuga aut repellat! Iusto, commodi. Dolore commodi ullam distinctio facilis! Odit quam provident dignissimos, cumque voluptas expedita porro quos possimus esse assumenda distinctio aut veritatis ratiimpedit harum dolorum est, sed facilis labore accusamus eum! Autem quas totam molestias hic ipsa rerum quisquam consequuntur delectus, animi a, quidem fugit in distinctio blanditiis fuga aut repellat! Iusto, commodi. Dolore commodi ullam distinctio facilis! Odit quam provident dignissimos, cumque voluptas expedita porro quos possimus esse assumenda distinctio aut veritatis ratione ea illo natus quaerat corrupti ut et perspiciatis pariatur, reiciendis repellendus minus id! Accusamus, consectetur architecto accusanti</p>
      <h1  id='p' style={{ color: FontColor, transition: 'all 300ms ease-in-out' }}>Rudransh is back Rudransh is back Rudransh is back Rudransh is back Rudransh is back </h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem quod quam adipisci, assumenda hic alias facere ipsa nostrum dolorum fugit accusamus dicta in deserunt cupiditate ipsam aspernatur quia blanditiis obcaecati vitae porro vel maxime voluptate tempore! Doloribus voluptatibus reprehenderit obcaecati hic molestias. Blanditiis dolore quae non doloremque, laboriosam incidunt quos. Molestias veritatis rerum unde vitae! Impedit dolores voluptates iusto sunt, fugit omnis excepturi voluptatum, soluta aut rem aperiam sint ipsa exercitationem quod dicta aspernatur, hic harum! Harum dolor, accusantium perferendis error voluptatem impedit, molestias, facere doloribus quas dolorem cum fugit temporibus blanditiis natus nisi facilis dignissimos ea minima a quos laboriosam perspiciatis unde molestiae odit. Asperiores necessitatibus perspiciatis quisquam, consequatur quaerat eaque placeat sit ducimus nam sequi voluptates debitis maxime eo, reprehenderit aspernatur architecto animi aliquam necessitatibus temporibus quibusdam corporis impedit harum dolorum est, sed facilis labore accusamus eum! Autem quas totam molestias hic ipsa rerum quisquam consequuntur delectus, animi a, quidem fugit in distinctio blanditiis fuga aut repellat! Iusto, commodi. Dolore commodi ullam distinctio facilis! Odit quam provident dignissimos, cumque voluptas expedita porro quos possimus esse assumenda distinctio aut veritatis ratione ea illo natus quaerat corrupti ut et perspiciatis pariatur, reiciendis repellendus minus id! Accusamus, consectetur architecto accusantium quidem voluptas dolor tempora facilis doloremque commodi similique at dignissimos iure fugit quasi neque quos, atque earum suscipit eum obcaecati reprehenderit? Fugiat minus blanditiis velit culpa, ipsum magni r modi architecto eaque. Sequi similique animi, voluptatum rem qui deserunt accusamus nam non et soluta maiores culpa, incidunt corrupti illum cumque consequatur, architecto illo. Alias expedita aspernatur totam optio. Dolorem deleniti dignissimos asperiores dicta, quasi quos quaerat autem rerum minus officiis error aliquid odit eaque eveniet officia inventore veritatis possimus fugiat, necessitatibus est ea eligendi hic. Amet adipisci facere doloribus. Amet reprehenderit odit ad sint veniam? Odit cumque mollitia libero aliquid hic reprehenderit quibusdam repellat eius quisquam repellendus ab, facilis velit eligendi blanditiis veniam tenetur sapiente molestiae?am incidunt quos. Molestias veritatis rerum unde vitae! Impedit dolores voluptates iusto sunt, fugit omnis excepturi voluptatum, soluta aut rem aperiam sint ipsa exercitationem quod dicta aspernatur, hic harum! Harum dolor, accusantium perferendis error voluptatem impedit, molestias, facere doloribus quas dolorem cum fugit temporibus blanditiis natus nisi facilis dignissimos ea minima a quos laboriosam perspiciatis unde molestiae odit. Asperiores necessitatibus perspiciatis quisquam, consequatur quaerat eaque placeat sit ducimus nam sequi voluptates debitis maxime eo, reprehenderit aspernatur architecto animi aliquam necessitatibus temporibus quibusdam corporis impedit harum dolorum est, sed facilis labore accusamus eum! Autem quas totam molestias hic ipsa rerum quisquam consequuntur delectus, animi a, quidem fugit in distinctio blanditiis fuga aut repellat! Iusto, commodi. Dolore commodi ullam distinctio facilis! Odit quam provident dignissimos, cumque voluptas expedita porro quos possimus esse assumenda distinctio aut veritatis ratione ea illo natus quaerat corrupti ut et perspiciatis pariatur, reiciendis repellendus minus id! Accusamus, consectetur architecto accusantiam incidunt quos. Molestias veritatis rerum unde vitae! Impedit dolores voluptates iusto sunt, fugit omnis excepturi voluptatum, soluta aut rem aperiam sint ipsa exercitationem quod dicta aspernatur, hic harum! Harum dolor, accusantium perferendis error voluptatem impedit, molestias, facere doloribus quas dolorem cum fugit temporibus blanditiis natus nisi facilis dignissimos ea minima a quos laboriosam perspiciatis unde molestiae odit. Asperiores necessitatibus perspiciatis quisquam, consequatur quaerat eaque placeat sit ducimus nam sequi voluptates debitis maxime eo, reprehenderit aspernatur architecto animi aliquam necessitatibus temporibus quibusdam corporis impedit harum dolorum est, sed facilis labore accusamus eum! Autem quas totam molestias hic ipsa rerum quisquam consequuntur delectus, animi a, quidem fugit in distinctio blanditiis fuga aut repellat! Iusto, commodi. Dolore commodi ullam distinctio facilis! Odit quam provident dignissimos, cumque voluptas expedita porro quos possimus esse assumenda distinctio aut veritatis ratione ea illo natus quaerat corrupti ut et perspiciatis pariatur, reiciendis repellendus minus id! Accusamus, consectetur architecto accusanti</p>
      <section>
        <div ref={ref}>
          <figure className="progress">
            <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
              <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          </figure>
        </div>
      </section>





    </>
  )
}

export default App
