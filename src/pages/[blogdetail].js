// pages/posts/[id].js

import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Slider from "react-slick"
import FooterForm from './components/FooterForm';
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
//console.log('vikas', router);
  // If the page is still being generated, show a loading state
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Head>
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      <title>{dataBlogs.meta_title}</title>
      <meta name="keywords" content={dataBlogs.meta_keyword} />
      <meta name="description" content={dataBlogs.meta_description} />
      <link rel="canonical" href="https://www.socialmediacreativeagency.com/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={dataBlogs.meta_title} />
      <meta property="og:description" content={dataBlogs.meta_description} />
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
                  <img src={dataBlogs.img} alt={dataBlogs.alt} />
                  <div className="blog-details__date-box">
                    <p>{dataBlogs.post_date} <br /> {dataBlogs.post_month}</p>
                  </div>
                </div>
                <div className="blog-details__content">
                  <ul className="list-unstyled blog-details__meta">
                    <li><Link href="#"><i className="far fa-user-circle"></i> {dataBlogs.author}</Link>
                    </li>
                    <li><Link href="#"><i className="far fa-folder-open"></i> {dataBlogs.category}</Link>
                    </li>
                  </ul>
                  <h1 className="blog-details__title">{dataBlogs.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: dataBlogs.description}} />
                  <div className="blog-details__bottom" bis_skin_checked="1">
                <p className="blog-details__tags">
                <span>Tags</span>
                {dataBlogs.tags && dataBlogs.tags.length > 0 && dataBlogs.tags[0] && dataBlogs.tags.map((tagData, t)=>
                  (
                    <Link href="#" key={t} className="mr-5">{tagData} </Link> 
                  )
                )
                
                }       
                {/* <Link href="#">Performance</Link>        */}
                </p>
                <div className="blog-details__social-list" bis_skin_checked="1">

                <div className="heateor_sss_sharing_container heateor_sss_horizontal_sharing" data-heateor-ss-offset="0" data-heateor-sss-href="https://www.socialmediacreativeagency.com/a-complete-guide-to-choosing-a-full-service-creative-agency-for-your-business/" bis_skin_checked="1">
                <div className="heateor_sss_sharing_ul" bis_skin_checked="1">
                  <a className="heateor_sss_button_instagram inst" href="https://www.instagram.com/" title="Instagram" rel="nofollow noopener" target="_blank">
                      <span className="heateor_sss_svg inst2">
                  <svg className="inst3" version="1.1" viewBox="-10 -10 148 148" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" ><g><g>
                      <path d="M86,112H42c-14.336,0-26-11.663-26-26V42c0-14.337,11.664-26,26-26h44c14.337,0,26,11.663,26,26v44 C112,100.337,100.337,112,86,112z M42,24c-9.925,0-18,8.074-18,18v44c0,9.925,8.075,18,18,18h44c9.926,0,18-8.075,18-18V42 c0-9.926-8.074-18-18-18H42z" fill="#fff">

                  </path></g>
                      <g>
                          <path d="M64,88c-13.234,0-24-10.767-24-24c0-13.234,10.766-24,24-24s24,10.766,24,24C88,77.233,77.234,88,64,88z M64,48c-8.822,0-16,7.178-16,16s7.178,16,16,16c8.822,0,16-7.178,16-16S72.822,48,64,48z" fill="#fff"></path></g><g><circle cx="89.5" cy="38.5" fill="#fff" r="5.5">

                      </circle>
                  </g>
              </g>
              </svg>
              </span>
              </a>
              <a className="heateor_sss_facebook face1" href={`https://www.facebook.com/sharer/sharer.php?u=https://www.socialmediacreativeagency.com/${dataBlogs.linkUrl}`} title="Facebook" rel="nofollow noopener" target="_blank">
                          <span className="heateor_sss_svg face2">
                  <svg className="face3" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-5 -5 42 42"><path d="M17.78 27.5V17.008h3.522l.527-4.09h-4.05v-2.61c0-1.182.33-1.99 2.023-1.99h2.166V4.66c-.375-.05-1.66-.16-3.155-.16-3.123 0-5.26 1.905-5.26 5.405v3.016h-3.53v4.09h3.53V27.5h4.223z" fill="#fff"></path>
                  </svg>
              </span>
              </a>
              <a className="heateor_sss_button_twitter twi1" href={`http://twitter.com/share?text=${dataBlogs.title}&url=https://www.socialmediacreativeagency.com/${dataBlogs.linkUrl}`} title="Twitter" rel="nofollow noopener" target="_blank">
                      <span className="heateor_sss_svg heateor_sss_s__default heateor_sss_s_twitter twi2"><svg className="twi3" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="-4 -4 39 39">
                          <path d="M28 8.557a9.913 9.913 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.738 9.738 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.942 4.942 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a4.968 4.968 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174-.318 0-.626-.03-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.893 9.893 0 0 1-6.114 2.107c-.398 0-.79-.023-1.175-.068a13.953 13.953 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013 0-.213-.005-.426-.015-.637.96-.695 1.795-1.56 2.455-2.55z" fill="#fff">
                      </path>
                  </svg>
              </span>
              </a>
              </div>
                </div>                          
                </div>
                </div>
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
