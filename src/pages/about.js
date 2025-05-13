import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import HeaderLogo from "../components/globals/header/HeaderLogo"
import Section from "../components/globals/section/Section"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      rina1: file(relativePath: { eq: "la-dolce-rina-cookbook.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina2: file(relativePath: { eq: "la-dolce-rina-family.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina3: file(relativePath: { eq: "la-dolce-rina-cookbook.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina4: file(relativePath: { eq: "la-dolce-rina-parents.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina5: file(relativePath: { eq: "la-dolce-rina-lovelife.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina6: file(relativePath: { eq: "la-dolce-rina-husband.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina7: file(relativePath: { eq: "la-dolce-rina-school.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina8: file(relativePath: { eq: "la-dolce-rina-view.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina9: file(relativePath: { eq: "la-dolce-rina-viewpt.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina10: file(relativePath: { eq: "la-dolce-rina-sanfrancisco.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina11: file(relativePath: { eq: "la-dolce-rina-france.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina12: file(relativePath: { eq: "la-dolce-rina-europe.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina13: file(relativePath: { eq: "la-dolce-rina-europetour.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina14: file(relativePath: { eq: "la-dolce-rina-japan.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina15: file(relativePath: { eq: "la-dolce-rina-thailand.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina16: file(relativePath: { eq: "la-dolce-rina-jungle.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina17: file(relativePath: { eq: "la-dolce-rina-park.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina18: file(relativePath: { eq: "la-dolce-rina-farm.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina19: file(relativePath: { eq: "la-dolce-rina-food.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina20: file(relativePath: { eq: "la-dolce-rina-friends.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina21: file(relativePath: { eq: "la-dolce-rina-food-img.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina22: file(relativePath: { eq: "la-dolce-rina-photoshoot.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
      rina24: file(relativePath: { eq: "la-dolce-rina-fd2.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina25: file(relativePath: { eq: "la-dolce-rina-fd3.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina26: file(relativePath: { eq: "la-dolce-rina-food-tb.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rina27: file(relativePath: { eq: "la-dolce-rina-jungle-tb.jpeg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
  rina28: file(relativePath: { eq: "la-dolce-rina-farm-tb.jpg" }) {
    childImageSharp {
      fluid(quality: 80, maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  rina29: file(relativePath: { eq: "la-dolce-rina-jungle-tb2.jpeg" }) {
    childImageSharp {
      fluid(quality: 80, maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }     
 
  
 
 
  rina23: file(relativePath: { eq: "la-dolce-rina-fd1.jpg" }) {
    childImageSharp {
      fluid(quality: 80, maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
 
     
    }
  `)
  return (
      <Layout>
        <AboutWrapper>
          <SEO title="About" />
          <Section style={{ width: "100vw", margin: "4rem auto 1rem auto" }}>
            <HeaderLogo />
          </Section>
          <div class="banner-img">
            <Img  fluid={data.rina1.childImageSharp.fluid} />
          </div>

          <Section style={{ width: "80vw", margin: "4rem auto" }}>
            <p>
              15 years ago, I was just a food-obsessed, cookbook-hoarder working in corporate sales and living the Army wife dream; following my physician husband to the ends of the earth and beyond. In the midst of yet another move, I was presented with an amazing opportunity to fulfill one of my life’s dreams - to go to culinary school. I found myself in one of the most exciting places to eat in America practically overnight.
            </p>
            <p>
              At Tante Marie’s Cooking School in the heart of San Francisco, I learned the fundamentals of French cuisine and ate my way through the local food scene. Classic mother sauces and soufflés by day, San Francisco foodie hotspots by night. I was in heaven!
            </p>
            <p>
              Just a few months after graduation, my husband and I moved to Germany, and for the next 4 years, we ate our way through almost every country in Europe. I met chefs, winemakers, cheesemakers, and all sorts of farmers, and it was at the Le Cordon Bleu in Paris that I fell in love with fresh, local, seasonal, market cuisine. Through these experiences, I was inspired to write my first cookbook.
            </p>
            <p>
              I have taken cooking classes all over the world including Italy, France, Spain, South Korea, Japan, Thailand, and Vietnam. I’m a food enthusiast turned cookbook author, private chef and advocate for meaningful causes. With a background rooted in global culinary traditions, I strive to create memorable dining experiences that bring people together. I live in Gulf Breeze, FL, with my husband, David, and our two daughters, Sophia and Elena, who inspire me daily.
            </p>
            <p>Welcome and enjoy!</p>
            <p>xo,</p>
            <p>Rina</p>
            <Img
                className="rina-image"
                fluid={data.rina2.childImageSharp.fluid}
            />
            {/* <p>
              PS. I live in Honolulu, Hawaii with my husband Dave and two little girls, Sophia and Elena. I love to eat, but not nearly as much as I love them.
            </p> */}

            {/* <h2>The Early Years</h2>
            <Img
                className="rina-image"
                fluid={data.rina3.childImageSharp.fluid}
            />
            <Img
                className="rina-image"
                fluid={data.rina4.childImageSharp.fluid}
            />
            <p>I grew up in a very small town in the suburbs of Pittsburgh, Pennsylvania. My Father ran a small trucking company and my Mother stayed at home. Money was always tight and we lived paycheck to paycheck, but we still managed to eat really well. </p>
            <p>My grandparents and great-grandparents were Italian immigrants and taught my Father the importance of food and cooking.  My parents were both fantastic cooks.  My favorite childhood finger food was my Mother’s perfectly sautéed mushrooms in butter and my favorite meal was my Father’s pasta.  We ate fresh fruits and vegetables, salads, soups, roasted meats and lots of pasta. We ate at very nice restaurants and it wasn’t uncommon for my Dad to blow an entire paycheck at an Italian specialty food store or at one of the best Italian bakeries or pastry shops in the city. </p>
            <p>For me, food is not just about eating. It’s about nurturing. I learned this from my Father at a very young age and because of this, I always knew I wanted to be a cook. It was because of my parents and especially my Father, that I gained a deep and abiding love for food and cooking.</p>


            <h2>The Love  of  My Life</h2>
            <Img
                className="rina-image"
                fluid={data.rina5.childImageSharp.fluid}
            />
            <Img
                className="rina-image"
                fluid={data.rina6.childImageSharp.fluid}
            />
            <p>I met Dave when I was 20 years old; I was in college and he was in medical school. I was downright smitten over his charm, intelligence, good looks, and sense of humor. When I brought him home to meet my parents for the first time, he said  “Mmmmmmm. Your house smells like garlic.” My Father smiled and replied, “Thank you.” </p>
            <p>Dave is a physician radiologist and come June, 2021- we’ll be living on the beautiful Emerald Coast of Gulf Breeze, Florida. We have lived in other amazing places including San Francisco, Hawaii, Germany, and Seoul, South Korea; I have my husband to thank for the incredible opportunities that I have had to attend culinary school, travel the world, and experience endless food cultures and cuisines. We’ve eaten in some of the best restaurants in the world (literally) and attended cooking classes in countries all over Europe and Asia. It was through these experiences that I was able to meet my co-author, Sarah Fragoso, and together, write the cookbook of my dreams. </p>


            <h2>Culinary School</h2>
            <Img
                className="rina-image"
                fluid={data.rina7.childImageSharp.fluid}
            />
            <p>I had a wonderful experience in culinary school. Every morning I would get dressed in my black and white checkered pants, gleaming white double breasted chef’s coat, and sturdy black Dansko clogs. With my hair bun wound up tight, I would smile proudly in the mirror and think to myself, “I am becoming a chef.” </p>
            <p>I adored being surrounded by endless wine, cream, butter, sugar, all types of flours, and like-minded people who loved cooking as much as I did. I learned the principles and techniques of French cooking as they applied to modern California tastes, and in the process, made over 6oo recipes.
            </p>
            <p>I swooned over freshly baked brioche and croissants, roasted chicken in tarragon cream, wild mushroom risotto, pumpkin ravioli, and traditional French braises and pastries. I had never worked so hard at something that I truly loved to do. </p>
            <p>Yes, it was amazing working with truffles, lobsters, wagyu, and caviar, but my biggest takeaway was learning how to cook without recipes and understanding how good, simple food should taste. Developing and refining my palette in culinary school has ultimately enabled me to become an excellent recipe writer and developer, giving me wings in the kitchen to do what I love to do. Cook! </p>


            <h2>Revamping My Culinary Point Of View</h2>
            <p>After I graduated culinary school, I distinctly remember looking in the mirror in disbelief and asking myself “how did this happen?” Not only was I the heaviest I had ever been in my entire life, but my painful, chronic, cystic acne was completely out of control. </p>
              <div>
                <Img
                    className="rina-image"
                    fluid={data.rina8.childImageSharp.fluid}
                />
                <h4>Here I am at 170 pounds.</h4>
              </div>
              <div>
              <Img
                  className="rina-image"
                  fluid={data.rina9.childImageSharp.fluid}
              />
              <h4>For the life of me I couldn't figure out why my face was such a mess. </h4>
              </div>
              <div></div>

            <p>I once again subscribed to the “fat is bad” conventional wisdom, read fitness magazines, ordered P90X, did heart pounding cardio moves, counted calories, and lost weight. But I was also starving, moody and weak. I felt cheated and deprived. Cereal with fruit for breakfast, a turkey sandwich for lunch, and pasta with vegetables for dinner.  What was I doing wrong?
            </p>
            <p>A friend gave me a book that would change my life forever. After reading “The Paleo Solution'' by Robb Wolf, I bawled my eyes out while eating my very last bowl of Special K Chocolatey Delight and told my husband that we were cutting out all gluten, grains, legumes, dairy, sugar, and processed foods for one month. He whimpered “No pasta, no couscous? No way!”  </p>
            <p>I was all in. I printed up shopping and eating guides and bought my very first paleo cookbook. The transformation was  amazing. That last 10 pounds that have always been so hard for me to lose came right off. After just a couple of weeks my husband and I started to notice other positive and unexpected changes. My painful, chronic, cystic acne disappeared and my husband's seemingly incurable acid reflux and eczema vanished. We looked and felt better than ever and it was then that a new lifestyle had emerged for us both.
            </p>

            <div class="img-div">
              <Img
                  className="rina-image"
                  fluid={data.rina10.childImageSharp.fluid}
              />
              <h4>San Francisco, CA 2011- 170lbs   </h4>

            </div>
            <div class="img-div">
              <Img
                  className="rina-image"
                  fluid={data.rina11.childImageSharp.fluid}
              />
              <h4>Cannes, France 2012- 145lbs</h4>
            </div>
            <div></div>


            <h2>A 3 ½ Year Tour In Europe</h2>
            <p>We were stationed in Kaiserslautern, Germany, exactly 2 ½ hours by train to Paris. I was in heaven. After about the 2nd or 3rd weekend in the city of lights, we figured out it was a lot more fun to eat in French restaurants and walk the streets of the most beautiful city in the world than it was spending all of our time in cathedrals and museums. I took a week long “cuisine du marché” or “market cuisine” course at the Le Cordon Bleu, and it was there that I completely fell head over heels in love with fresh, local, seasonal, market cuisine.</p>
            <p>Every morning, our cozy little bunch of 10 students, a chef instructor, and a translator would comb the stalls of the world famous open-air markets all over Paris (a different one each morning) and listen to the stories of local growers, farmers, butchers, winemakers, and cheesemakers. We would take back anything and everything that was at its peak of freshness and ripeness and make the most amazing vegetable dishes, salads, gratins, tarts, soups, ragoûts, pastas, and fruit desserts. </p>
            <p>I was deeply inspired by my experience at the Le Cordon Bleu, thus planting the seed for me to write my first cookbook.</p>
            <Img
                className="rina-image"
                fluid={data.rina12.childImageSharp.fluid}
            />
            <Img
                className="rina-image"
                fluid={data.rina13.childImageSharp.fluid}
            />


            <h2>An Unexpected Turn</h2>
            <p>After being stationed in Germany and traveling all over Europe for 3 ½ years, the U.S. Army moved my husband and I to Seoul, South Korea for a 1 year tour. I quickly became excited for the opportunity to live in Asia and travel to some of the most exciting food destinations on the planet; Thailand, Vietnam, and Japan were at the top of my list.
            </p>
            <Img
                className="rina-image"
                fluid={data.rina14.childImageSharp.fluid}
            />
            <p>While we were living in Seoul, we decided it was time to start our family. We were trying to get pregnant for about 6 months with no luck when I started thinking about the worst case scenario… “this might not happen for us.” As much as I tried staying positive, I slowly started feeling scared, sad, and depressed. It was at that time that I saw my longtime mentor, Sarah Fragoso promoting her 4th cookbook “Everyday Paleo Thai Cuisine” with a culinary retreat in Chiang Mai. </p>
            <p>That night I told Dave that I NEEDED to go to Thailand and meet Sarah, bathe elephants, take cooking classes, eat amazing, authentic Thai food, and receive endless Thai massages; that would surely make me feel better.  Being the most amazing, wonderful, loving, supportive husband ever...he once again gave me the go ahead to follow my bliss.</p>
            <p>I spent a fabulous week in Chiang Mai, Thailand with Sarah and her family and it was everything I dreamed it would be and so much more. Sarah and I quickly connected and became very close and not only talked about our personal lives in great detail, but the possibility of collaborating on a cookbook together. </p>
            <Img
                className="rina-image"
                fluid={data.rina15.childImageSharp.fluid}
            />
            <Img
                className="rina-image"
                fluid={data.rina16.childImageSharp.fluid}
            />
            <p>I was bursting with excitement and completely beside myself at the thought of this amazing opportunity. It was later decided that we would write a gluten and grain free cookbook inspired by the farm-to-table cuisine of California and France. </p>
            <p>I was so excited to write this book! I knew firsthand that California and French cuisine had many fascinating parallels as both cuisines emphasize the use of fresh, quality, local, seasonal ingredients with dishes that focus not only on classic recipes, but on the usage of the most spectacular cheeses and wines in the world.  </p>
            <p>Sarah lives in Northern California, and with its endless local growers, farmers markets, artisanal cheese makers and wine-country nearby, it became the perfect setting for our beautiful farm-to-table cuisine cookbook. </p>
            <Img
                className="rina-image"
                fluid={data.rina17.childImageSharp.fluid}
            />
            <Img
                className="rina-image"
                fluid={data.rina18.childImageSharp.fluid}
            />
            <Img
                className="rina-image"
                fluid={data.rina19.childImageSharp.fluid}
            />
            <h2>Have Faith</h2>
            <p>I’ve been reflecting  on the past with so much gratitude in my heart for the way things “worked out,” and for the  love and support of my family, friends, and the amazing people I’ve met along this incredible journey. </p>
            <p>This book was created at a time when I desperately needed to create SOMETHING. After 2 years of trying to get pregnant and one failed IUI, I finally DID get pregnant. 1 month after I finished testing the 170 recipes in this book.  </p>
            <p>I channeled the energy of every disappointment during that time and poured every last bit of my heart and soul into creating the cookbook of my dreams; a celebration of beautiful, healthy, delicious, real food recipes. </p>
            <p>I truly believe that I was called to do this work and create something that would inspire people to nourish themselves and others from the inside out. This book is my “first born” and truly a dream I never knew I had until it was the only thing pulling me out of hell called “unexplained infertility.” </p>
            <p>The joy and fulfillment I’ve experienced, the people I’ve met, the relationships I‘ve built, and my 2 most precious gifts, Sophia and Elena would not exist if things worked out the way I wanted. I am so grateful. </p>
            <p>So I guess what I’m trying to say is this: when life doesn’t go your way, have faith that things will work out, maybe not how you planned, but just how it’s meant to be.  </p>
            <Img
                className="rina-image"
                fluid={data.rina20.childImageSharp.fluid}
            />
            <Img
                className="rina-image"
                fluid={data.rina21.childImageSharp.fluid}
            />
            <Img
                className="rina-image"
                fluid={data.rina22.childImageSharp.fluid}
            />
            <h2>A Farm To Table Cookbook</h2>
            <p>Whenever I go to my local farmer’s market and find myself admiring the color, brilliance and beauty of what our farmers can do, I am quickly reminded of why I was inspired to write a cookbook in the first place. It’s a re-awakening to a food philosophy that I experienced 10 years ago while attending culinary school in San Francisco. </p>
            <p>This philosophy communicates the idea that when your ingredients are organically grown, ripe, and in season, you don’t have to do much to them to create something extraordinary. </p>
            <p>I’ve heard this philosophy before, but for what seems like a million different reasons, I quickly closed the door on that “pretentious, stuck-up, preachy and expensive” way of life.
              That is, until I experienced first-hand what “California Cuisine” was all about.
            </p>
            <Img
                className="rina-image"
                fluid={data.rina23.childImageSharp.fluid}
            />
            <p>California cuisine, similar to French cuisine, is rooted in a culture where endless local growers, farmers markets, and wine country nearby create the perfect setting for fresh, quality, local, seasonal ingredients to be prepared in restaurants where menu’s change with the seasons, sometimes daily. </p>
            <p>This provides people with an experience of what it’s like to eat food that’s been harvested at the peak of freshness. Food that is incredibly vibrant, alive and more flavorful than you could possibly imagine.  In the beginning, for me, it was all about taste. But eventually, I fell in love with the land, the farmers, the chefs, the stories, the life, and of course, the ingredients.
            </p>
            <Img
                className="rina-image"
                fluid={data.rina24.childImageSharp.fluid}
            />
            <Img
                className="rina-image"
                fluid={data.rina25.childImageSharp.fluid}
            />
            <Img
                className="rina-image"
                fluid={data.rina26.childImageSharp.fluid}
            />
            <p>Unfortunately, our “fast-food” culture here in the U.S. has conditioned us to believe that food should always be fast, cheap, and easy, and that cooking is laborious and hard . A culture that wants us to believe that we don’t have the time or money to sit down together and share good, homemade food. </p>
            <p>This did not sit well with my “food and cooking is life” Italian upbringing. I felt compelled to write a book that would encourage people to cook together and share good food and wine with the people they love. To appreciate quality ingredients, and the time spent in the kitchen and at the table. </p>
            
            <p>I wanted my readers to see the faces of true artisans and organic farmers, the people who are working so incredibly hard to create quality products free from pesticides, antibiotics, hormones etc. Hoping people in turn would be inspired and excited to visit their local farmers market a little more often and transform BUSHELS of simple ingredients into delicious, everyday FEASTS. </p>
            <Img
                className="rina-image"
                fluid={data.rina28.childImageSharp.fluid}
            />
            <Img
                className="rina-image"
                fluid={data.rina29.childImageSharp.fluid}
            />
             */}

          </Section>
        </AboutWrapper>
        <Gallery />
      </Layout>
  )
}

const AboutWrapper = styled.div`
  p {
    width: 100%;
    margin-bottom: 1rem;
    text-align: justify;
  }
  h2 {
    font-size: 30px;
    width: 100%;
    color: #000;
  }
 .banner-img {
  width: 80%;
  margin: 3% auto;
 }
  .rina-image {
    width: 400px;
    margin: 2rem auto;
  }
  @media only screen and (max-width: 768px) {
    .rina-image {
    width: 100%;
  }
  }
  h4 {
    text-transform: capitalize;
    color: #000;
    margin-bottom: 8%;
  }
`

export default About
