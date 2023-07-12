// pages/posts/[id].js

import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Slider from "react-slick"
import FooterForm from '../components/FooterForm';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import routes from './routes';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Index({ dataBlogs }) {

  const [hiddenTitleIndex, setHiddenTitleIndex] = useState(0);


const settings = {
  centerMode: true,
  autoplay: false,
  autoplaySpeed: 1000,
  slidesToShow: 4,
  dots: true,
  arrows: true,
  swipe: true,
  infinite: true,
  swipeToSlide: true, responsive: [{
    breakpoint: 768,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
  }
]
  };
  const toggleHiddenTitle = (index) => {
    if (hiddenTitleIndex === index) {
      setHiddenTitleIndex(null);
    } else {
      setHiddenTitleIndex(index);
    }
  };
  const router = useRouter()

  // If the page is still being generated, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Head>
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      <title>Full-Service Social Media Marketing Agency in India - Social Media Creative Agency</title>
      <meta name="keywords" content="social media creative agency, creative social media services, creative agency social media posts, full service creative agency, best creative agency in india, top creative agencies, best social media agency in india, social media management agency, white label social media management, best social media marketing agency" />
      <meta name="description" content="Looking for creative Social Media Services to promote your brand?? SMCA is full-service creative agency based in India, offers white label social media management services for clients. Get top-notch quality social media posts services from the experts." />
      <link rel="canonical" href="https://www.socialmediacreativeagency.com/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="The Best Social Media Marketing Agency in India - Social Media Creative Agency (SMCA)" />
      <meta property="og:description" content="Looking for creative Social Media Services to promote your brand?? SMCA is full-service creative agency based in India, offers white label social media management services for clients. Get top-notch quality social media posts services from the experts." />
      <meta property="og:url" content="https://www.socialmediacreativeagency.com/" />
      <meta property="og:site_name" content="Creative Agency" />
      <meta property="article:modified_time" content="2023-02-27T05:38:12+00:00" />
      <link rel="stylesheet" type="text/css" href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css"></link>
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap"></link>

      <script async
        src="https://www.googletagmanager.com/gtag/js?id=G-4T85M437M3"
        
      />
      <script
        dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){
          dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-4T85M437M3');
      ` }}
      />
      <meta name="google-site-verification" content="muKy4GDWt7CbVzZo5Gly_Z6UieYyZ65RlQsB4ts9uKY" />
      </Head>
      <Navbar />
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="blog-details__left">
                <div className="blog-details__img">
                  <img src="https://www.socialmediacreativeagency.com/wp-content/uploads/2023/05/Top-10-Social-Media-Trends-for-2023-1-scaled.jpg" alt="" />
                  <div className="blog-details__date-box">
                    <p>08 <br /> May</p>
                  </div>
                </div>
                <div className="blog-details__content">
                  <ul className="list-unstyled blog-details__meta">
                    <li><a href=""><i className="far fa-user-circle"></i> SMCA</a>
                    </li>
                    <li><a href=""><i className="far fa-folder-open"></i> Business</a>
                    </li>
                  </ul>
                  <h1 className="blog-details__title">{dataBlogs.title}</h1>
                  <p>The number of social media trends we’re witnessing today is truly remarkable. From enterprise-level virtual reality experiences to bots that can process natural language, it’s easy to see why social media is constantly evolving. As we look ahead to the future of social media, here are the top 10 trends you should be aware of for 2023.</p>
                  <h3>1. YouTube Shorts is worth your investment:</h3>
                  <p>YouTube Shorts is the latest trend in social media, which allows users to create short, vertical videos. These short clips are quickly becoming popular and YouTube is already investing heavily in the technology. With its low-cost entry barriers, this could be a great way to reach your target audience and differentiate yourself from your competitors.</p>
                  <h3>2. Social media influencers:</h3>
                  <p>Influencers are becoming increasingly important as they can leverage their followers and reach to promote products, services, and brands. As more businesses become aware of this potential, an increasing number of influencers are being employed in social media campaigns to drive engagement and <a href="/7-social-media-hacks-to-double-your-brand-growth-in-2023/">brand</a> awareness. Moreover, micro-influencers are becoming popular as they have a high level of influence over smaller groups.</p>
                  <h3>3. The rise of voice-activated AI assistants:</h3>
                  <p>AI is among the hottest social media trends of 2023. Voice-activated assistants are becoming increasingly popular, allowing users to interact with their devices using natural language commands. These AI assistants can be used to help people find what they need quickly, as well as provide personalized recommendations based on user preferences.</p>
                  <h3>4. LinkedIn will see more creators:</h3>
                  <p>As the world’s largest professional network, LinkedIn has massive potential when it comes to social media trends. In 2023, it is expected that more creators will start taking advantage of this platform as they look for ways to further engage their audience. Additionally, with the rise of virtual events, some users are even finding new ways to use LinkedIn as an event-hosting platform.</p>
                  <h3>5. Augmented Reality and Virtual Reality:</h3>
                  <p>The use of AR and VR technologies is becoming increasingly popular among social media users. From immersive gaming experiences to virtual reality-enabled shopping, this technology is sure to be a major part of the social media landscape in 2023. Additionally, some companies are already leveraging AR and VR technologies as a way to create more engaging content for their followers.</p>
                  <h3>6. The importance of SEO will increase:</h3>
                  <p>Search engine optimization (SEO) is a major part of any successful digital marketing campaign, and this trend will continue to be important in 2023. Companies are increasingly investing in SEO as it helps them reach their target audiences more efficiently as well as generate more organic traffic. Moreover, with the introduction of new algorithms and search engine updates, businesses need to ensure they are up-to-date with their SEO strategies.</p>
                  <h3>7. Gated content:</h3>
                  <p>It’s among the most talked-about social media trends of 2023. Gated content is a way for businesses to offer exclusive, limited access to their content in order to drive more engagement and leads. This can be done by offering premium information, discounts, or personalized materials only available to certain users who opt-in.</p>
                  <h3>8. Higher transparency among brands and creators:</h3>
                  <p>In the past few years, social media users have become more aware of how their data is used. This has led to greater transparency among brands and creators on platforms like Instagram and YouTube. In 2023, this trend will only continue as companies become more open with their practices and provide users with more control over what they share.</p>
                  <h3>9. More focus on storytelling:</h3>
                  <p>Storytelling has always been an important part of a successful social media campaign, however, in 2023 this will become even more important. Companies will need to use creative storytelling strategies to engage their target audiences and build trust with them. Additionally, stories are a great way to communicate brand values and help users form an emotional connection with the company.</p>
                  <h3>10. Instagram will see a massive flow of creators:</h3>
                  <p>The popularity of Instagram continues to grow and with it the number of creators. In 2023, businesses will be able to leverage this platform to reach potential customers by partnering with influencers and collaborating with other brands. Additionally, <a href="/how-to-promote-your-business-on-instagram-in-2023-10-ways-that-actually-work/">Instagram</a> is expected to launch new features that will make it easier for content creators to monetize their accounts.</p>
                  <h3>Conclusion!</h3>
                  <p>2023 is shaping up to be an exciting year for social media. With the emergence of new technologies, companies are finding creative ways to engage their audiences and better reach their target markets. From augmented reality to SEO, these social media trends present opportunities for businesses to create more innovative content and gain a competitive edge in the digital space.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

// export default function Post({ post }) {
//   const router = useRouter()

//   // If the page is still being generated, show a loading state
//   if (router.isFallback) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div>
//       <h1>Title : {post.title}</h1>
//       <p>{post.id}</p>
//     </div>
//   )
// }




// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://smca.ezrankings.in/react-backend/blogs.php')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { blogdetail: post.linkUrl.toString(), },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://smca.ezrankings.in/react-backend/blogCat.php?url=${params.blogdetail}`)
  const dataBlogs = await res.json()

  // Pass post data to the page via props
  return { props: { dataBlogs } }
}
